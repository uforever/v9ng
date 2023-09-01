(function () { // PerformancePaintTiming
    PerformancePaintTiming = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(PerformancePaintTiming, "PerformancePaintTiming");
    Object.setPrototypeOf(PerformancePaintTiming.prototype, PerformanceEntry.prototype);
})();