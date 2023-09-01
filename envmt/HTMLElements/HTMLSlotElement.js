(function () { // HTMLSlotElement
    HTMLSlotElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLSlotElement, "HTMLSlotElement");
    Object.setPrototypeOf(HTMLSlotElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLSlotElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSlotElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSlotElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assign", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSlotElement.prototype", "assign", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assignedElements", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSlotElement.prototype", "assignedElements", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assignedNodes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLSlotElement.prototype", "assignedNodes", arguments);
        },
    });
})();