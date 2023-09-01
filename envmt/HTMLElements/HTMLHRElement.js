(function () { // HTMLHRElement
    HTMLHRElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLHRElement, "HTMLHRElement");
    Object.setPrototypeOf(HTMLHRElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLHRElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLHRElement.prototype, "color", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "color_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "color_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLHRElement.prototype, "noShade", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "noShade_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "noShade_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLHRElement.prototype, "size", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "size_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "size_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLHRElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLHRElement.prototype", "width_set", arguments);
        },
    });
})();