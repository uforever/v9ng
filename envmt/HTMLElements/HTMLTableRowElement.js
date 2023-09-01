(function () { // HTMLTableRowElement
    HTMLTableRowElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLTableRowElement, "HTMLTableRowElement");
    Object.setPrototypeOf(HTMLTableRowElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "rowIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "rowIndex_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "sectionRowIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "sectionRowIndex_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "cells", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "cells_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "ch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "ch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "ch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "chOff", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "chOff_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "chOff_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "vAlign", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "vAlign_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "vAlign_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "bgColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "bgColor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "bgColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "deleteCell", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "deleteCell", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "insertCell", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLTableRowElement.prototype", "insertCell", arguments);
        },
    });
})();