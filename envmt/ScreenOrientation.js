(function () { // ScreenOrientation
    ScreenOrientation = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(ScreenOrientation, "ScreenOrientation");
    Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(ScreenOrientation.prototype, "angle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "angle_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(ScreenOrientation.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(ScreenOrientation.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "onchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(ScreenOrientation.prototype, "lock", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "lock", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(ScreenOrientation.prototype, "unlock", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "ScreenOrientation.prototype", "unlock", arguments);
        },
    });
})();