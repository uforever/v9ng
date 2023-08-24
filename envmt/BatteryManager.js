(function () { // BatteryManager
    BatteryManager = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(BatteryManager, "BatteryManager");
    Object.setPrototypeOf(BatteryManager.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "charging", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "charging_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "chargingTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "chargingTime_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "dischargingTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "dischargingTime_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "level", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "level_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingtimechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingtimechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingtimechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "ondischargingtimechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "ondischargingtimechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onlevelchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onlevelchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onlevelchange_set", arguments);
        },
    });
})();