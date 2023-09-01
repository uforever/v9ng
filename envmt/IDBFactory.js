(function () { // IDBFactory
    IDBFactory = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(IDBFactory, "IDBFactory");
    v9ng.toolsFunc.defineProperty(IDBFactory.prototype, "cmp", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBFactory.prototype", "cmp", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBFactory.prototype, "databases", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBFactory.prototype", "databases", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBFactory.prototype, "deleteDatabase", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBFactory.prototype", "deleteDatabase", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(IDBFactory.prototype, "open", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "IDBFactory.prototype", "open", arguments);
        },
    });
})();

(function () { // indexedDB
    indexedDB = {};
    Object.setPrototypeOf(indexedDB, IDBFactory.prototype);
})();