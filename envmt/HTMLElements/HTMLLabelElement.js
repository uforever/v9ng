(function () { // HTMLLabelElement
    HTMLLabelElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLLabelElement, "HTMLLabelElement");
    Object.setPrototypeOf(HTMLLabelElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLLabelElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLabelElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLLabelElement.prototype, "htmlFor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLabelElement.prototype", "htmlFor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLabelElement.prototype", "htmlFor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLLabelElement.prototype, "control", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLabelElement.prototype", "control_get", arguments);
        },
        set: undefined,
    });
})();