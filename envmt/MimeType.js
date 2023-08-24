(function () { // MimeType
    MimeType = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(MimeType, "MimeType");
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "suffixes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "description", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "description_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "enabledPlugin_get", arguments);
        },
        set: undefined,
    });
})();