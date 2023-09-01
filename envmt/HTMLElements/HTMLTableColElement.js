(function () { // HTMLTableColElement
    HTMLTableColElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTableColElement, "HTMLTableColElement");
    Object.setPrototypeOf(HTMLTableColElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "span", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "span_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "span_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "ch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "ch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "ch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "chOff", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "chOff_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "chOff_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "vAlign", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "vAlign_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "vAlign_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableColElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableColElement.prototype", "width_set", arguments);
        },
    });
})();