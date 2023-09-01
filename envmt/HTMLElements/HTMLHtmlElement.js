(function () { // HTMLHtmlElement
    HTMLHtmlElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLHtmlElement, "HTMLHtmlElement");
    Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHtmlElement.prototype", "version_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHtmlElement.prototype", "version_set", arguments);
        },
    });
})();