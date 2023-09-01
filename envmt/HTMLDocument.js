(function () { // HTMLDocument
    HTMLDocument = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLDocument, "HTMLDocument");
    Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
})();
(function () { // document
    document = {};
    Object.setPrototypeOf(document, HTMLDocument.prototype);
    Object.defineProperty(document, v9ng.cache.domSymbol, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: jsDocument,
    });
    Object.defineProperty(jsDocument, v9ng.cache.ptrSymbol, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: document,
    });
    v9ng.toolsFunc.defineProperty(document, "location", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "document", "location_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "document", "location_set", arguments);
        },
    });
})();