(function () { // CloseEvent
    CloseEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(CloseEvent, "CloseEvent");
    Object.setPrototypeOf(CloseEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(CloseEvent.prototype, "wasClean", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CloseEvent.prototype", "wasClean_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CloseEvent.prototype, "code", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CloseEvent.prototype", "code_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CloseEvent.prototype, "reason", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CloseEvent.prototype", "reason_get", arguments);
        },
        set: undefined,
    });
})();