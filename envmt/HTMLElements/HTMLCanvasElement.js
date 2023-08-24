(function () { // HTMLCanvasElement
    HTMLCanvasElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLCanvasElement, "HTMLCanvasElement");
    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "height_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "captureStream", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "getContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "getContext", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "toBlob", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "toDataURL", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "transferControlToOffscreen", arguments);
        },
    });
})();