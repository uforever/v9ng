(function () { // HTMLFieldSetElement
    HTMLFieldSetElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLFieldSetElement, "HTMLFieldSetElement");
    Object.setPrototypeOf(HTMLFieldSetElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "elements", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "elements_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "willValidate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "willValidate_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "validity_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validationMessage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "validationMessage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "checkValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "checkValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "reportValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "reportValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "setCustomValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFieldSetElement.prototype", "setCustomValidity", arguments);
        },
    });
})();