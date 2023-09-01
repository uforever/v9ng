(function () { // HTMLOptionElement
    HTMLOptionElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLOptionElement, "HTMLOptionElement");
    Object.setPrototypeOf(HTMLOptionElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "label", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "label_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "label_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "defaultSelected", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "defaultSelected_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "defaultSelected_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "selected", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "selected_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "selected_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "text_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptionElement.prototype, "index", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptionElement.prototype", "index_get", arguments);
        },
        set: undefined,
    });
})();