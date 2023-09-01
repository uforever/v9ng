(function () { // HTMLSelectElement
    HTMLSelectElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLSelectElement, "HTMLSelectElement");
    Object.setPrototypeOf(HTMLSelectElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "autocomplete", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "autocomplete_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "autocomplete_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "multiple", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "multiple_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "multiple_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "required", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "required_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "required_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "size", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "size_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "size_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "options", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "options_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "length_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "length_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "selectedOptions_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "selectedIndex_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "selectedIndex_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "willValidate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "willValidate_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "validity_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validationMessage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "validationMessage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "labels", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "labels_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "add", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "add", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "checkValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "checkValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "namedItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "remove", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "reportValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "reportValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSelectElement.prototype, "setCustomValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSelectElement.prototype", "setCustomValidity", arguments);
        },
    });
})();