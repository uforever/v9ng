const fs = require("fs");

function readFile(fileName) {
    try {
        return fs.readFileSync(`./envmt/${fileName}.js`);
    } catch (e) {
        console.log('\x1b[31m%s\x1b[0m', `[DOESN'T EXIST]: \`./envmt/${fileName}.js\``);
        return "";
    }
}

function readCode() {
    return `/* Environment Code */
(function () {
${readFile("EventTarget")}
${readFile("WindowProperties")}
${readFile("Window")}
${readFile("Node")}
${readFile("Document")}
${readFile("HTMLDocument")}
${readFile("Storage")}
${readFile("Navigator")}
${readFile("Location")}
${readFile("globalThis")}
})();
`;
}

module.exports = {
    readCode,
}