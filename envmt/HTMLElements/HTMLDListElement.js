(function () { // HTMLDListElement
    HTMLDListElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDListElement, "HTMLDListElement");
    Object.setPrototypeOf(HTMLDListElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDListElement.prototype, "compact", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDListElement.prototype", "compact_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDListElement.prototype", "compact_set", arguments);
        },
    });
})();