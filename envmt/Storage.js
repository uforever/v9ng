(function () { // Storage
    Storage = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Storage, "Storage");
    v9ng.toolsFunc.defineProperty(Storage.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "clear", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "clear", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "getItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "getItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "key", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "key", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "removeItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "removeItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "setItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "setItem", arguments);
        },
    });
})();
(function () { // localStorage
    localStorage = {};
    Object.setPrototypeOf(localStorage, Storage.prototype);
})();