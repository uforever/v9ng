(function () { // HTMLTitleElement
    HTMLTitleElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTitleElement, "HTMLTitleElement");
    Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTitleElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTitleElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTitleElement.prototype", "text_set", arguments);
        },
    });
})();