(function () { // HTMLHeadElement
    HTMLHeadElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLHeadElement, "HTMLHeadElement");
    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
})();