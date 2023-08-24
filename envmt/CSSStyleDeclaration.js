(function () { // CSSStyleDeclaration
    CSSStyleDeclaration = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(CSSStyleDeclaration, "CSSStyleDeclaration");
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssText_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssText_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "parentRule_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssFloat_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssFloat_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "getPropertyPriority", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "getPropertyValue", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "removeProperty", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "setProperty", arguments);
        },
    });
})();