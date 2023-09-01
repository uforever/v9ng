(function () { // External
    External = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(External, "External");
    v9ng.toolsFunc.defineProperty(External.prototype, "AddSearchProvider", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "External.prototype", "AddSearchProvider", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(External.prototype, "IsSearchProviderInstalled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "External.prototype", "IsSearchProviderInstalled", arguments);
        },
    });
})();
(function () { // external
    external = {};
    Object.setPrototypeOf(external, External.prototype);
})();