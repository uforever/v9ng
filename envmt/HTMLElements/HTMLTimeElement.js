(function () { // HTMLTimeElement
    HTMLTimeElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTimeElement, "HTMLTimeElement");
    Object.setPrototypeOf(HTMLTimeElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTimeElement.prototype, "dateTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTimeElement.prototype", "dateTime_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTimeElement.prototype", "dateTime_set", arguments);
        },
    });
})();