(function () { // HTMLDirectoryElement
    HTMLDirectoryElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLDirectoryElement, "HTMLDirectoryElement");
    Object.setPrototypeOf(HTMLDirectoryElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDirectoryElement.prototype, "compact", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDirectoryElement.prototype", "compact_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDirectoryElement.prototype", "compact_set", arguments);
        },
    });
})();