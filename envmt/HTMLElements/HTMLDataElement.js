(function () { // HTMLDataElement
    HTMLDataElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDataElement, "HTMLDataElement");
    Object.setPrototypeOf(HTMLDataElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDataElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDataElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDataElement.prototype", "value_set", arguments);
        },
    });
})();