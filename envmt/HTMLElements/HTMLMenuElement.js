(function () { // HTMLMenuElement
    HTMLMenuElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLMenuElement, "HTMLMenuElement");
    Object.setPrototypeOf(HTMLMenuElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMenuElement.prototype, "compact", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMenuElement.prototype", "compact_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMenuElement.prototype", "compact_set", arguments);
        },
    });
})();