(function () { // Performance
    Performance = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(Performance, "Performance");
    Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(Performance.prototype, "timeOrigin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "timeOrigin_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "onresourcetimingbufferfull", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "onresourcetimingbufferfull_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "onresourcetimingbufferfull_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "clearMarks", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "clearMarks", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "clearMeasures", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "clearMeasures", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "clearResourceTimings", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "clearResourceTimings", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "getEntries", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "getEntries", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "getEntriesByName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "getEntriesByName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "getEntriesByType", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "getEntriesByType", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "mark", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "mark", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "measure", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "measure", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "now", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "now", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "setResourceTimingBufferSize", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "setResourceTimingBufferSize", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "toJSON", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "toJSON", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "timing", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "timing_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "navigation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "navigation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "memory", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "memory_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Performance.prototype, "eventCounts", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Performance.prototype", "eventCounts_get", arguments);
        },
        set: undefined,
    });
})();
(function () { // performance
    performance = {};
    Object.setPrototypeOf(performance, Performance.prototype);
    v9ng.toolsFunc.defineProperty(performance, "clearResourceTimings", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "performance", "clearResourceTimings", arguments);
        },
    });
})();