(function () { // HTMLModElement
    HTMLModElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLModElement, "HTMLModElement");
    Object.setPrototypeOf(HTMLModElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLModElement.prototype, "cite", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLModElement.prototype", "cite_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLModElement.prototype", "cite_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLModElement.prototype, "dateTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLModElement.prototype", "dateTime_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLModElement.prototype", "dateTime_set", arguments);
        },
    });
})();