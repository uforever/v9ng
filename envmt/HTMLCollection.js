(function () { // HTMLCollection
    HTMLCollection = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLCollection, "HTMLCollection");
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "namedItem", arguments);
        },
    });
})();