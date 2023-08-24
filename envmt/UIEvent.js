(function () { // UIEvent
    UIEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'UIEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(UIEvent, "UIEvent");
    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "view", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "view_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "detail", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "detail_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "sourceCapabilities", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "sourceCapabilities_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "which", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "which_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "initUIEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "initUIEvent", arguments);
        },
    });
})();