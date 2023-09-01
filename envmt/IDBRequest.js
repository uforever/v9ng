(function () { // IDBRequest
    IDBRequest = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(IDBRequest, "IDBRequest");
    Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "result", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "result_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "error", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "error_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "source", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "source_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "transaction", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "transaction_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "readyState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "onsuccess", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "onsuccess_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "onsuccess_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBRequest.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBRequest.prototype", "onerror_set", arguments);
        },
    });
})();