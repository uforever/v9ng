(function () { // HTMLHeadingElement
    HTMLHeadingElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLHeadingElement, "HTMLHeadingElement");
    Object.setPrototypeOf(HTMLHeadingElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLHeadingElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHeadingElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHeadingElement.prototype", "align_set", arguments);
        },
    });
})();