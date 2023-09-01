(function () { // HTMLOptGroupElement
    HTMLOptGroupElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLOptGroupElement, "HTMLOptGroupElement");
    Object.setPrototypeOf(HTMLOptGroupElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptGroupElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptGroupElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "label", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptGroupElement.prototype", "label_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOptGroupElement.prototype", "label_set", arguments);
        },
    });
})();