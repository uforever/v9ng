(function () { // HTMLBaseElement
    HTMLBaseElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLBaseElement, "HTMLBaseElement");
    Object.setPrototypeOf(HTMLBaseElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLBaseElement.prototype, "href", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBaseElement.prototype", "href_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBaseElement.prototype", "href_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBaseElement.prototype, "target", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBaseElement.prototype", "target_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBaseElement.prototype", "target_set", arguments);
        },
    });
})();