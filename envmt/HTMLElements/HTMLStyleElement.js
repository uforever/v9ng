(function () { // HTMLStyleElement
    HTMLStyleElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLStyleElement, "HTMLStyleElement");
    Object.setPrototypeOf(HTMLStyleElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLStyleElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLStyleElement.prototype, "media", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "media_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "media_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLStyleElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLStyleElement.prototype, "sheet", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "sheet_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLStyleElement.prototype, "blocking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "blocking_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLStyleElement.prototype", "blocking_set", arguments);
        },
    });
})();