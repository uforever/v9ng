(function () { // HTMLMapElement
    HTMLMapElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLMapElement, "HTMLMapElement");
    Object.setPrototypeOf(HTMLMapElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMapElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMapElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMapElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMapElement.prototype, "areas", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMapElement.prototype", "areas_get", arguments);
        },
        set: undefined,
    });
})();