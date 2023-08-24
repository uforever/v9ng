(function () { // MouseEvent
    MouseEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'MouseEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(MouseEvent, "MouseEvent");
    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "screenX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "screenX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "screenY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "screenY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "clientX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "clientX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "clientY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "clientY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "ctrlKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "ctrlKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "shiftKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "shiftKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "altKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "altKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "metaKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "metaKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "button", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "button_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "buttons", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "buttons_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "relatedTarget", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "relatedTarget_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "pageX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "pageX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "pageY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "pageY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "x", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "x_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "y", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "y_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "offsetX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "offsetX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "offsetY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "offsetY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "movementX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "movementX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "movementY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "movementY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "fromElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "fromElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "toElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "toElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "layerX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "layerX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "layerY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "layerY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "getModifierState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "getModifierState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "initMouseEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "initMouseEvent", arguments);
        },
    });
})();