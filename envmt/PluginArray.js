(function () { // PluginArray
    PluginArray = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(PluginArray, "PluginArray");
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "namedItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "refresh", arguments);
        },
    });
})();