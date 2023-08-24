(function () { // Plugin
    Plugin = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Plugin, "Plugin");
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "name_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "filename", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "filename_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "description", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "description_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "namedItem", arguments);
        },
    });
})();