(function () { // HTMLPreElement
    HTMLPreElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLPreElement, "HTMLPreElement");
    Object.setPrototypeOf(HTMLPreElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLPreElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLPreElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLPreElement.prototype", "width_set", arguments);
        },
    });
})();