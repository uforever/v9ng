(function () { // PresentationConnectionCloseEvent
    PresentationConnectionCloseEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(PresentationConnectionCloseEvent, "PresentationConnectionCloseEvent");
    Object.setPrototypeOf(PresentationConnectionCloseEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "reason", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PresentationConnectionCloseEvent.prototype", "reason_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "message", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PresentationConnectionCloseEvent.prototype", "message_get", arguments);
        },
        set: undefined,
    });
})();