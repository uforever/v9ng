(function () { // HTMLParagraphElement
    HTMLParagraphElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLParagraphElement, "HTMLParagraphElement");
    Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParagraphElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLParagraphElement.prototype", "align_set", arguments);
        },
    });
})();