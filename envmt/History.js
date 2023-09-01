(function () { // History
    History = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(History, "History");
    v9ng.toolsFunc.defineProperty(History.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "scrollRestoration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "scrollRestoration_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "scrollRestoration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "state", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "state_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "back", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "back", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "forward", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "forward", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "go", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "go", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "pushState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "pushState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(History.prototype, "replaceState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "History.prototype", "replaceState", arguments);
        },
    });
})();
(function () { // history
    history = {};
    Object.setPrototypeOf(history, History.prototype);
    v9ng.toolsFunc.defineProperty(history, "pushState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "history", "pushState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(history, "replaceState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "history", "replaceState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(history, "go", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "history", "go", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(history, "back", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "history", "back", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(history, "forward", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "history", "forward", arguments);
        },
    });
})();