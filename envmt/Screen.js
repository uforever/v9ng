(function () { // Screen
    Screen = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(Screen, "Screen");
    Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(Screen.prototype, "availWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "availWidth_get", arguments, 1920);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "availHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "availHeight_get", arguments, 1080);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "width_get", arguments, 1920);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "height_get", arguments, 1080);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "colorDepth_get", arguments, 24);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "pixelDepth_get", arguments, 24);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "availLeft", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "availLeft_get", arguments, 0);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "availTop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "availTop_get", arguments, 0);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "orientation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "orientation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "onchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Screen.prototype, "isExtended", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Screen.prototype", "isExtended_get", arguments, false);
        },
        set: undefined,
    });
})();

(function () { // screen
    screen = {};
    Object.setPrototypeOf(screen, Screen.prototype);
})();