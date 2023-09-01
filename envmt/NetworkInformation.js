(function () { // NetworkInformation
    NetworkInformation = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(NetworkInformation, "NetworkInformation");
    Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "onchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "effectiveType_get", arguments, "4g");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "rtt_get", arguments, 100);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "downlink_get", arguments, 1.55);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "NetworkInformation.prototype", "saveData_get", arguments, false);
        },
        set: undefined,
    });
})();