(function () { // HTMLImageElement
    HTMLImageElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLImageElement, "HTMLImageElement");
    Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "alt", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "alt_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "alt_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "srcset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "srcset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "srcset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "sizes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "sizes_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "sizes_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "crossOrigin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "crossOrigin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "crossOrigin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "useMap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "useMap_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "useMap_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "isMap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "isMap_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "isMap_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "height_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "naturalWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "naturalHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "complete", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "complete_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "currentSrc", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "currentSrc_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "referrerPolicy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "referrerPolicy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "decoding", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "decoding_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "decoding_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "fetchPriority", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "fetchPriority_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "fetchPriority_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "loading", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "loading_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "loading_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "lowsrc", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "lowsrc_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "lowsrc_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "hspace", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "hspace_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "hspace_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "vspace", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "vspace_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "vspace_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "longDesc", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "longDesc_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "longDesc_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "border", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "border_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "border_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "x", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "x_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "y", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "y_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLImageElement.prototype, "decode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLImageElement.prototype", "decode", arguments);
        },
    });
})();