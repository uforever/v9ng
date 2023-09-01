(function () { // PerformanceEntry
    PerformanceEntry = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(PerformanceEntry, "PerformanceEntry");
    v9ng.toolsFunc.defineProperty(PerformanceEntry.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PerformanceEntry.prototype", "name_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PerformanceEntry.prototype, "entryType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PerformanceEntry.prototype", "entryType_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PerformanceEntry.prototype, "startTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PerformanceEntry.prototype", "startTime_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PerformanceEntry.prototype, "duration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PerformanceEntry.prototype", "duration_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PerformanceEntry.prototype, "toJSON", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PerformanceEntry.prototype", "toJSON", arguments);
        },
    });
})();