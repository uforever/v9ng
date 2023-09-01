(function () { // HTMLTemplateElement
    HTMLTemplateElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTemplateElement, "HTMLTemplateElement");
    Object.setPrototypeOf(HTMLTemplateElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "content", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTemplateElement.prototype", "content_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRoot", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTemplateElement.prototype", "shadowRoot_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRootMode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTemplateElement.prototype", "shadowRootMode_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTemplateElement.prototype", "shadowRootMode_set", arguments);
        },
    });
})();