(function () { // BeforeInstallPromptEvent
    BeforeInstallPromptEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'BeforeInstallPromptEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(BeforeInstallPromptEvent, "BeforeInstallPromptEvent");
    Object.setPrototypeOf(BeforeInstallPromptEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "platforms", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BeforeInstallPromptEvent.prototype", "platforms_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "userChoice", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BeforeInstallPromptEvent.prototype", "userChoice_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "prompt", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BeforeInstallPromptEvent.prototype", "prompt", arguments);
        },
    });
})();