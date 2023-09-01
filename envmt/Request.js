(function () { // Request
    Request = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'Request': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(Request, "Request");
    v9ng.toolsFunc.defineProperty(Request.prototype, "method", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "method_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "url", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "url_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "headers", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "headers_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "destination", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "destination_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "referrer", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "referrer_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "referrerPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "referrerPolicy_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "mode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "mode_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "credentials", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "credentials_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "cache", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "cache_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "redirect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "redirect_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "integrity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "integrity_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "keepalive", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "keepalive_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "signal", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "signal_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "isHistoryNavigation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "isHistoryNavigation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "bodyUsed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "bodyUsed_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "arrayBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "arrayBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "blob", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "blob", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "clone", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "clone", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "formData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "formData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "json", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "json", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "text", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "text", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Request.prototype, "body", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Request.prototype", "body_get", arguments);
        },
        set: undefined,
    });
})();