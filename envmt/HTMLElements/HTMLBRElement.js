(function () { // HTMLBRElement
    HTMLBRElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLBRElement, "HTMLBRElement");
    Object.setPrototypeOf(HTMLBRElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLBRElement.prototype, "clear", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBRElement.prototype", "clear_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBRElement.prototype", "clear_set", arguments);
        },
    });
})();