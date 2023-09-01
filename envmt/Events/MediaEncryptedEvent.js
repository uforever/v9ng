(function () { // MediaEncryptedEvent
    MediaEncryptedEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(MediaEncryptedEvent, "MediaEncryptedEvent");
    Object.setPrototypeOf(MediaEncryptedEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initDataType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MediaEncryptedEvent.prototype", "initDataType_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initData", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MediaEncryptedEvent.prototype", "initData_get", arguments);
        },
        set: undefined,
    });
})();