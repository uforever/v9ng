(function () { // DeviceOrientationEvent
    DeviceOrientationEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(DeviceOrientationEvent, "DeviceOrientationEvent");
    Object.setPrototypeOf(DeviceOrientationEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "DeviceOrientationEvent.prototype", "alpha_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "DeviceOrientationEvent.prototype", "beta_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "DeviceOrientationEvent.prototype", "gamma_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "DeviceOrientationEvent.prototype", "absolute_get", arguments);
        },
        set: undefined,
    });
})();