(function () { // HTMLDialogElement
    HTMLDialogElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDialogElement, "HTMLDialogElement");
    Object.setPrototypeOf(HTMLDialogElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDialogElement.prototype, "open", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "open_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "open_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLDialogElement.prototype, "returnValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "returnValue_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "returnValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLDialogElement.prototype, "close", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "close", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLDialogElement.prototype, "show", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "show", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLDialogElement.prototype, "showModal", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDialogElement.prototype", "showModal", arguments);
        },
    });
})();