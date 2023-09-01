(function () { // SVGGraphicsElement
    SVGGraphicsElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(SVGGraphicsElement, "SVGGraphicsElement");
    Object.setPrototypeOf(SVGGraphicsElement.prototype, SVGElement.prototype);
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "transform", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "transform_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "nearestViewportElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "nearestViewportElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "farthestViewportElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "farthestViewportElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "requiredExtensions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "requiredExtensions_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "systemLanguage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "systemLanguage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getBBox", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "getBBox", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getCTM", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "getCTM", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGGraphicsElement.prototype", "getScreenCTM", arguments);
        },
    });
})();