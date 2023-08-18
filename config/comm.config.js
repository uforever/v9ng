const fs = require("fs");

function readFile(fileName) {
    try {
        return fs.readFileSync(`./comm/${fileName}.js`);
    } catch (e) {
        console.log('\x1b[31m%s\x1b[0m', `[DOESN'T EXIST]: \`./comm/${fileName}.js\``);
        return "";
    }
}

function readCode() {
    return `/* Tools Code */
${readFile("toolsFunc")}
${readFile("envmtImpl")}
`;
}

module.exports = {
    readCode,
    readFile,
}