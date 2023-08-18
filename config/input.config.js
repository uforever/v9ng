const fs = require("fs");

function readCode(projName, codeType) {
    try {
        return fs.readFileSync(`./input/${projName}/${codeType}.js`);
    } catch (e) {
        console.log('\x1b[31m%s\x1b[0m', `[DOESN'T EXIST]: \`./input/${projName}/${codeType}.js\``);
        return "";
    }
}

module.exports = {
    readCode,
}