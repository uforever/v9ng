(function () { // HTMLLegendElement
    HTMLLegendElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLLegendElement, "HTMLLegendElement");
    Object.setPrototypeOf(HTMLLegendElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLLegendElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLegendElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLLegendElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLegendElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLLegendElement.prototype", "align_set", arguments);
        },
    });
})();