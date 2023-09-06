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

function readEvents() {
    let result = `// ---- Events BEGIN ----`;
    try {
        const fileList = fs.readdirSync('./envmt/Events');
        for (const fileName of fileList) {
            const code = fs.readFileSync(`./envmt/Events/${fileName}`);
            result += `
${code}`;
        }
    } catch (e) {
        console.log("[DOESN'T EXIST]: ./envmt/Events/");
    }
    result += `
// ---- Events END ----`;
    return result;
}

function readCode() {
    return `/* Environment Code */
(function () {
${readFile("EventTarget")}
${readFile("Window")}
${readFile("Screen")}
${readFile("ScreenOrientation")}
${readFile("Node")}
${readFile("Element")}
${readFile("HTMLElement")}
${readHTMLElements()}
${readFile("HTMLAudioElement")}
${readFile("HTMLVideoElement")}
${readFile("Audio")}
${readFile("SVGElement")}
${readFile("SVGGraphicsElement")}
${readFile("SVGPatternElement")}
${readFile("Document")}
${readFile("HTMLDocument")}
${readFile("CharacterData")}
${readFile("Text")}
${readFile("CDATASection")}
${readFile("Storage")}
${readFile("Navigator")}
${readFile("Location")}
${readFile("Request")}
${readFile("PaymentResponse")}
${readFile("Notification")}
${readFile("SourceBuffer")}
${readFile("External")}
${readFile("chrome")}
${readFile("History")}
${readFile("Performance")}
${readFile("SpeechSynthesisUtterance")}
${readFile("TextTrackList")}
${readFile("IDBFactory")}
${readFile("IDBRequest")}
${readFile("IDBOpenDBRequest")}
${readFile("IDBDatabase")}
${readFile("NetworkInformation")}
${readFile("HTMLCollection")}
${readFile("HTMLAllCollection")}
${readFile("MimeType")}
${readFile("MimeTypeArray")}
${readFile("Plugin")}
${readFile("PluginArray")}
${readFile("CSSStyleDeclaration")}
${readFile("CanvasRenderingContext2D")}
${readFile("OffscreenCanvasRenderingContext2D")}
${readFile("Path2D")}
${readFile("PerformanceEntry")}
${readFile("PerformancePaintTiming")}
${readFile("WebGLRenderingContext")}
${readFile("WebGLBuffer")}
${readFile("WebGLProgram")}
${readFile("XMLHttpRequestEventTarget")}
${readFile("XMLHttpRequest")}
${readFile("BatteryManager")}
${readFile("Event")}
${readEvents()}
${readFile("MouseEvent")}
${readFile("XPathExpression")}
${readFile("DOMParser")}
${readFile("globalThis")}
})();
`;
}

module.exports = {
    readCode,
}