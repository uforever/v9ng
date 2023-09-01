(function () { // HTMLTableSectionElement
    HTMLTableSectionElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTableSectionElement, "HTMLTableSectionElement");
    Object.setPrototypeOf(HTMLTableSectionElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "rows", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "rows_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "ch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "ch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "ch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "chOff", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "chOff_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "chOff_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "vAlign", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "vAlign_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "vAlign_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "deleteRow", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "deleteRow", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "insertRow", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableSectionElement.prototype", "insertRow", arguments);
        },
    });
})();