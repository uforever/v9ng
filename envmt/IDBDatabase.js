(function () { // IDBDatabase
    IDBDatabase = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(IDBDatabase, "IDBDatabase");
    Object.setPrototypeOf(IDBDatabase.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "name_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "version", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "version_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "objectStoreNames", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "objectStoreNames_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "onclose", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onclose_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onclose_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "onversionchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onversionchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "onversionchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "close", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "close", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "createObjectStore", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "createObjectStore", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "deleteObjectStore", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "deleteObjectStore", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBDatabase.prototype, "transaction", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBDatabase.prototype", "transaction", arguments);
        },
    });
})();