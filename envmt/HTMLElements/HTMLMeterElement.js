(function () { // HTMLMeterElement
    HTMLMeterElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLMeterElement, "HTMLMeterElement");
    Object.setPrototypeOf(HTMLMeterElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "min", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "min_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "min_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "max", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "max_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "max_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "low", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "low_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "low_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "high", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "high_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "high_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "optimum", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "optimum_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "optimum_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMeterElement.prototype, "labels", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMeterElement.prototype", "labels_get", arguments);
        },
        set: undefined,
    });
})();