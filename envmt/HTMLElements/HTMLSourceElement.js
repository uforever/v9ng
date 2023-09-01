(function () { // HTMLSourceElement
    HTMLSourceElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLSourceElement, "HTMLSourceElement");
    Object.setPrototypeOf(HTMLSourceElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "srcset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "srcset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "srcset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "sizes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "sizes_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "sizes_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "media", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "media_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "media_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSourceElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSourceElement.prototype", "height_set", arguments);
        },
    });
})();