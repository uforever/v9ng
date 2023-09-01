(function () { // CDATASection
    CDATASection = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(CDATASection, "CDATASection");
    Object.setPrototypeOf(CDATASection.prototype, Text.prototype);
})();