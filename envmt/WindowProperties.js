(function () { // WindowProperties
    WindowProperties = function () {
    };
    v9ng.toolsFunc.ctorGuard(WindowProperties, "WindowProperties");
    delete WindowProperties.prototype.constructor;
    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
})();