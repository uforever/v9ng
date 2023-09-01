(function () { // HTMLFrameElement
    HTMLFrameElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLFrameElement, "HTMLFrameElement");
    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "scrolling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "scrolling_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "scrolling_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "frameBorder", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "frameBorder_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "frameBorder_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "longDesc", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "longDesc_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "longDesc_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "noResize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "noResize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "noResize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "contentDocument", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "contentDocument_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "contentWindow", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "contentWindow_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "marginHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "marginHeight_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "marginHeight_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFrameElement.prototype, "marginWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "marginWidth_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFrameElement.prototype", "marginWidth_set", arguments);
        },
    });
})();