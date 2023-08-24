(function () { // MimeTypeArray
    MimeTypeArray = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(MimeTypeArray, "MimeTypeArray");
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "namedItem", arguments);
        },
    });
})();