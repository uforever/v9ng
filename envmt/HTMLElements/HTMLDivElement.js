(function () { // HTMLDivElement
    HTMLDivElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLDivElement, "HTMLDivElement");
    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDivElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDivElement.prototype", "align_set", arguments);
        },
    });
})();