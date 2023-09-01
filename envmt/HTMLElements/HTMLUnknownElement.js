(function () { // HTMLUnknownElement
    HTMLUnknownElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLUnknownElement, "HTMLUnknownElement");
    Object.setPrototypeOf(HTMLUnknownElement.prototype, HTMLElement.prototype);
})();