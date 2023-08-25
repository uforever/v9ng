(function () { // HTMLScriptElement
    HTMLScriptElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLScriptElement, "HTMLScriptElement");
    Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLScriptElement, "supports", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement", "supports", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "noModule", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "noModule_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "noModule_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "charset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "charset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "charset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "async", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "async_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "async_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "defer", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "defer_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "defer_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "crossOrigin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "crossOrigin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "text_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "referrerPolicy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "referrerPolicy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "event", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "event_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "event_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "htmlFor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "htmlFor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "htmlFor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "integrity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "integrity_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "integrity_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "fetchPriority_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "fetchPriority_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "blocking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "blocking_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "blocking_set", arguments);
        },
    });
})();