(function () { // HTMLQuoteElement
    HTMLQuoteElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLQuoteElement, "HTMLQuoteElement");
    Object.setPrototypeOf(HTMLQuoteElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLQuoteElement.prototype, "cite", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLQuoteElement.prototype", "cite_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLQuoteElement.prototype", "cite_set", arguments);
        },
    });
})();