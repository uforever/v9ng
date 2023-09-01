(function () { // HTMLTableCaptionElement
    HTMLTableCaptionElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTableCaptionElement, "HTMLTableCaptionElement");
    Object.setPrototypeOf(HTMLTableCaptionElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTableCaptionElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableCaptionElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableCaptionElement.prototype", "align_set", arguments);
        },
    });
})();