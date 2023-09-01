(function () { // DOMParser
    DOMParser = function () {
    };
    v9ng.toolsFunc.ctorGuard(DOMParser, "DOMParser");
    v9ng.toolsFunc.defineProperty(DOMParser.prototype, "parseFromString", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "DOMParser.prototype", "parseFromString", arguments);
        },
    });
})();