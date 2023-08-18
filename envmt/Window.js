(function () { // Window
    Window = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Window, "Window");
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
    v9ng.toolsFunc.defineProperty(Window, "TEMPORARY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Window, "PERSISTENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
})();