const fs = require("fs");

function readFile(fileName) {
    try {
        return fs.readFileSync(`./envmt/${fileName}.js`);
    } catch (e) {
        console.log('\x1b[31m%s\x1b[0m', `[DOESN'T EXIST]: \`./envmt/${fileName}.js\``);
        return "";
    }
}

function readHTMLElements() {
    let result = `// ---- HTMLElements BEGIN ----`;
    try {
        const fileList = fs.readdirSync('./envmt/HTMLElements');
        for (const fileName of fileList) {
            const code = fs.readFileSync(`./envmt/HTMLElements/${fileName}`);
            result += `
${code}`;
        }
    } catch (e) {
        console.log("[DOESN'T EXIST]: ./envmt/HTMLElements/");
    }
    result += `
// ---- HTMLElements END ----`;
    return result;
}

function readCode() {
    return `/* Environment Code */
(function () {
${readFile("EventTarget")}
${readFile("WindowProperties")}
${readFile("Window")}
${readFile("Node")}
${readFile("Element")}
${readFile("HTMLElement")}
${readHTMLElements()}
${readFile("Document")}
${readFile("HTMLDocument")}
${readFile("Storage")}
${readFile("Navigator")}
${readFile("Location")}
${readFile("HTMLCollection")}
${readFile("MimeType")}
${readFile("MimeTypeArray")}
${readFile("Plugin")}
${readFile("PluginArray")}
${readFile("CSSStyleDeclaration")}
${readFile("CanvasRenderingContext2D")}
${readFile("WebGLRenderingContext")}
${readFile("WebGLBuffer")}
${readFile("WebGLProgram")}
${readFile("XMLHttpRequestEventTarget")}
${readFile("XMLHttpRequest")}
${readFile("BatteryManager")}
${readFile("Event")}
${readFile("UIEvent")}
${readFile("MouseEvent")}
${readFile("globalThis")}
})();
`;
}

module.exports = {
    readCode,
}