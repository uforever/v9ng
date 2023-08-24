(function () { // HTMLMetaElement
    HTMLMetaElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLMetaElement, "HTMLMetaElement");
    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "httpEquiv_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "httpEquiv_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "content", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "content_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "content_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "media", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "media_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "media_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "scheme", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "scheme_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "scheme_set", arguments);
        },
    });
})();