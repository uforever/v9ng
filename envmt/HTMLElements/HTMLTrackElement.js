(function () { // HTMLTrackElement
    HTMLTrackElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTrackElement, "HTMLTrackElement");
    Object.setPrototypeOf(HTMLTrackElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTrackElement, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement, "LOADED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement, "ERROR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "kind", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "kind_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "kind_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "srclang", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "srclang_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "srclang_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "label", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "label_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "label_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "default", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "default_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "default_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "readyState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "track", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTrackElement.prototype", "track_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "LOADED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLTrackElement.prototype, "ERROR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
})();