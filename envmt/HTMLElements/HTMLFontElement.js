(function () { // HTMLFontElement
    HTMLFontElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLFontElement, "HTMLFontElement");
    Object.setPrototypeOf(HTMLFontElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLFontElement.prototype, "color", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "color_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "color_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFontElement.prototype, "face", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "face_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "face_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLFontElement.prototype, "size", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "size_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLFontElement.prototype", "size_set", arguments);
        },
    });
})();