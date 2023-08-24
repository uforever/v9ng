(function () { // window
    delete global;
    delete Buffer;
    delete process;
    delete clearImmediate;
    delete setImmediate;
    delete SharedArrayBuffer;
    delete $jsDebugIsRegistered;
    delete fs;
    // delete VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL;
    delete globalThis[Symbol.toStringTag];
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
    v9ng.toolsFunc.defineProperty(window, "setTimeout", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "setTimeout", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "clearTimeout", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "clearTimeout", arguments);
        },
    });
    eval = v9ng.toolsFunc.funcHook(eval, undefined, false, v9ng.toolsFunc.noopFunc, v9ng.toolsFunc.noopFunc);
})();