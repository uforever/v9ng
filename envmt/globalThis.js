(function () { // window
    delete global;
    delete Buffer;
    delete WindowProperties;
    window = globalThis;
    Object.setPrototypeOf(window, Window.prototype);
    v9ng.toolsFunc.defineProperty(window, "atob", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (str) {
            return v9ng.toolsFunc.base64.base64decode(str);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "btoa", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (str) {
            return v9ng.toolsFunc.base64.base64encode(str);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "name_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "location", {
        configurable: false,
    });
    v9ng.toolsFunc.defineProperty(window, "top", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "top_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(window, "self", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "self_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "self_set", arguments);
        },
    });
})();