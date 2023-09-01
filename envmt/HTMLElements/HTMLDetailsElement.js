(function () { // HTMLDetailsElement
    HTMLDetailsElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDetailsElement, "HTMLDetailsElement");
    Object.setPrototypeOf(HTMLDetailsElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDetailsElement.prototype, "open", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDetailsElement.prototype", "open_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDetailsElement.prototype", "open_set", arguments);
        },
    });
})();