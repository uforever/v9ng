(function () { // EventTarget
    EventTarget = function () {
    };
    v9ng.toolsFunc.ctorGuard(EventTarget, "EventTarget");
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "addEventListener", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "addEventListener", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "dispatchEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "dispatchEvent", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "removeEventListener", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "removeEventListener", arguments);
        },
    });
})();