(function () { // XPathExpression
    XPathExpression = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(XPathExpression, "XPathExpression");
    v9ng.toolsFunc.defineProperty(XPathExpression.prototype, "evaluate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XPathExpression.prototype", "evaluate", arguments);
        },
    });
})();