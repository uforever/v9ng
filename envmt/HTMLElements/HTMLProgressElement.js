(function () { // HTMLProgressElement
    HTMLProgressElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLProgressElement, "HTMLProgressElement");
    Object.setPrototypeOf(HTMLProgressElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLProgressElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLProgressElement.prototype, "max", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "max_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "max_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLProgressElement.prototype, "position", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "position_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLProgressElement.prototype, "labels", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLProgressElement.prototype", "labels_get", arguments);
        },
        set: undefined,
    });
})();