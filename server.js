const fs = require("fs");
const { VM, VMScript } = require("vm2");
const jsdom = require("jsdom");

const commConfig = require("./config/comm.config.js"); // comm
const envmtConfig = require("./config/envmt.config.js"); // envmt
const inputConfig = require("./config/input.config.js"); // input

const projName = "rs5";
const htmlFileName = `./input/${projName}/init.html`;
const jsFileName = `./input/${projName}/external.js`;
const outputFileName = `./output/${projName}.js`;
const logFileName = `./output/${projName}.log`;
const debugFileName = `./output/${projName}.dbg.js`;

const { JSDOM } = jsdom;
let initHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo Proj</title>
</head>
<body>
    
</body>
</html>`;
try {
    initHtml = fs.readFileSync(htmlFileName, "utf8");
} catch (e) { };
let externalJs = '';
try {
    externalJs = fs.readFileSync(jsFileName, "utf8");
} catch (e) { };
const url = "https://www.chinastock.com.cn/newsite/cgs-services/stockFinance/businessAnnc.html?type=marginList";
const dom = new JSDOM(initHtml, {
    url: url,
    referrer: url,
    contentType: "text/html",
    includeNodeLocations: false,
    storageQuota: 5_000_000,
});
const jsDocument = dom.window.document;
const undetectableObj = new ldObj();

fs.writeFileSync(logFileName, `---- [LOGS] ----`); // clear logs

const initCode = fs.readFileSync("./config/init.js");
const commCode = commConfig.readCode(); // tools + envmt impl
const envmtCode = envmtConfig.readCode(); // environment
const globalCode = commConfig.readFile("globalPlugin"); // comm global plugin
const customCode = inputConfig.readCode(projName, "custom"); // custom hook for proj
const proxyCode = commConfig.readFile("proxyObj"); // comm proxy code
const inputCode = inputConfig.readCode(projName, "input"); // input
const asyncCode = inputConfig.readCode(projName, "async"); // async

const logCode = `/* VM Logs Code */
(function () {
    v9ng.toolsFunc.saveLog = function (args) {
        if (args.length === 1 && typeof args[0] === 'string') {
            v9ng.cache.fs.appendFileSync("${logFileName}", \`
\${(args[0])}\`);
        } else {
            v9ng.cache.fs.appendFileSync("${logFileName}", \`
\${v9ng.toolsFunc.commToString(args)}\`);
        }
    };
})();
`;

const runCode = `
${initCode}
${commCode}
${logCode}
${envmtCode}
${globalCode}
${customCode}
${proxyCode}
${inputCode}
${asyncCode}
`;

const outputCode = `
${initCode}
${commCode}
${envmtCode}
${globalCode}
${customCode}
${proxyCode}
${inputCode}
${asyncCode}
`;

console.log("---- START ----");
const vm = new VM({
    sandbox: {
        fs,
        jsDocument,
        undetectableObj,
        externalJs,
    },
});
const script = new VMScript(runCode, debugFileName);
const result = vm.run(script);
console.log(result);
// vm.run(script);
fs.writeFileSync(outputFileName, runCode);
console.log("---- END ----");