(function () { // HTMLAllCollection
    HTMLAllCollection = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLAllCollection, "HTMLAllCollection");
    v9ng.toolsFunc.defineProperty(HTMLAllCollection.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAllCollection.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLAllCollection.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAllCollection.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAllCollection.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAllCollection.prototype", "namedItem", arguments);
        },
    });
})();