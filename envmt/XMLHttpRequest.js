(function () { // XMLHttpRequest
    XMLHttpRequest = function () {
    };
    v9ng.toolsFunc.ctorGuard(XMLHttpRequest, "XMLHttpRequest");
    Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "onreadystatechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "onreadystatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "readyState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "timeout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "timeout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "withCredentials_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "withCredentials_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "upload_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseURL_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "status_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "statusText_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseType_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseType_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "response_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseText_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseXML_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "abort", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "getAllResponseHeaders", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "getResponseHeader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "open", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "overrideMimeType", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "send", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "setRequestHeader", arguments);
        },
    });
})();