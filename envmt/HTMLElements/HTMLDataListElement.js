(function () { // HTMLDataListElement
    HTMLDataListElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDataListElement, "HTMLDataListElement");
    Object.setPrototypeOf(HTMLDataListElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDataListElement.prototype, "options", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDataListElement.prototype", "options_get", arguments);
        },
        set: undefined,
    });
})();