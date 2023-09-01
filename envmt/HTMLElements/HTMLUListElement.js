(function () { // HTMLUListElement
    HTMLUListElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLUListElement, "HTMLUListElement");
    Object.setPrototypeOf(HTMLUListElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLUListElement.prototype, "compact", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLUListElement.prototype", "compact_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLUListElement.prototype", "compact_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLUListElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLUListElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLUListElement.prototype", "type_set", arguments);
        },
    });
})();