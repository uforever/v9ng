(function () { // XMLHttpRequestEventTarget
    XMLHttpRequestEventTarget = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
    Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onprogress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onprogress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "ontimeout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "ontimeout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadend_set", arguments);
        },
    });
})();