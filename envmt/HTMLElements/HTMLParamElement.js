(function () { // HTMLParamElement
    HTMLParamElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLParamElement, "HTMLParamElement");
    Object.setPrototypeOf(HTMLParamElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLParamElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLParamElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLParamElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLParamElement.prototype, "valueType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "valueType_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParamElement.prototype", "valueType_set", arguments);
        },
    });
})();