(function () { // HTMLOListElement
    HTMLOListElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLOListElement, "HTMLOListElement");
    Object.setPrototypeOf(HTMLOListElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLOListElement.prototype, "reversed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "reversed_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "reversed_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOListElement.prototype, "start", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "start_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "start_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOListElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLOListElement.prototype, "compact", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "compact_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLOListElement.prototype", "compact_set", arguments);
        },
    });
})();