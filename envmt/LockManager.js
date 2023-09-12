(function () { // LockManager
    LockManager = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(LockManager, "LockManager");
    v9ng.toolsFunc.defineProperty(LockManager.prototype, "query", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "LockManager.prototype", "query", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(LockManager.prototype, "request", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "LockManager.prototype", "request", arguments);
        },
    });
})();