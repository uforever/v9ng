(function () { // HTMLSpanElement
    HTMLSpanElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLSpanElement, "HTMLSpanElement");
    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
})();