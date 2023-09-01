(function () { // IDBOpenDBRequest
    IDBOpenDBRequest = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(IDBOpenDBRequest, "IDBOpenDBRequest");
    Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
    v9ng.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBOpenDBRequest.prototype", "onblocked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBOpenDBRequest.prototype", "onblocked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBOpenDBRequest.prototype", "onupgradeneeded_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBOpenDBRequest.prototype", "onupgradeneeded_set", arguments);
        },
    });
})();