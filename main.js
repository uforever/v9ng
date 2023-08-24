const fs = require("fs");

const { VM, VMScript } = require("vm2");

const commConfig = require("./config/comm.config.js"); // comm
const envmtConfig = require("./config/envmt.config.js"); // envmt
const inputConfig = require("./config/input.config.js"); // input

const projName = "demoProj";

const outputFileName = `./output/${projName}.js`;
const logFileName = `./output/${projName}.log`;
const debugFileName = `./output/${projName}.dbg.js`;

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
            fs.appendFileSync("${logFileName}", \`
\${(args[0])}\`);
        } else {
            fs.appendFileSync("${logFileName}", \`
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
    },
});
const script = new VMScript(runCode, debugFileName);
const result = vm.run(script);
console.log(result);
fs.writeFileSync(outputFileName, runCode);
console.log("---- END ----");