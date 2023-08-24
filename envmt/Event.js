(function () { // Event
    Event = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'Event': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(Event, "Event");
    v9ng.toolsFunc.defineProperty(Event, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Event, "CAPTURING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Event, "AT_TARGET", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Event, "BUBBLING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "target", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "target_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "currentTarget", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "currentTarget_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "eventPhase", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "eventPhase_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "bubbles", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "bubbles_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "cancelable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelable_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "defaultPrevented", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "defaultPrevented_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "composed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "composed_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "timeStamp", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "timeStamp_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "srcElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "srcElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "returnValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "returnValue_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "returnValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "cancelBubble", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelBubble_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelBubble_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "CAPTURING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "AT_TARGET", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "BUBBLING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "composedPath", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "composedPath", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "initEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "initEvent", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "preventDefault", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "preventDefault", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "stopImmediatePropagation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "stopImmediatePropagation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "stopPropagation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "stopPropagation", arguments);
        },
    });
})();