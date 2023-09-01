(function () { // CharacterData
    CharacterData = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(CharacterData, "CharacterData");
    Object.setPrototypeOf(CharacterData.prototype, Node.prototype);
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "data", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "data_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "data_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "previousElementSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "previousElementSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "nextElementSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "nextElementSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "after", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "after", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "appendData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "appendData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "before", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "deleteData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "deleteData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "insertData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "insertData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "remove", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "replaceData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "replaceData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "replaceWith", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "replaceWith", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CharacterData.prototype, "substringData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CharacterData.prototype", "substringData", arguments);
        },
    });
})();