(function () { // SourceBuffer
    SourceBuffer = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(SourceBuffer, "SourceBuffer");
    Object.setPrototypeOf(SourceBuffer.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "mode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "mode_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "mode_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "updating", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "updating_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "buffered", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "buffered_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "timestampOffset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "timestampOffset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "timestampOffset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowStart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "appendWindowStart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "appendWindowStart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowEnd", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "appendWindowEnd_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "appendWindowEnd_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdatestart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdatestart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdatestart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdateend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdateend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onupdateend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "abort", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "abort", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "appendBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "appendBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "changeType", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "changeType", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SourceBuffer.prototype, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SourceBuffer.prototype", "remove", arguments);
        },
    });
})();