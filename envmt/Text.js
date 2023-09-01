(function () { // Text
    Text = function () {
    };
    v9ng.toolsFunc.ctorGuard(Text, "Text");
    Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
    v9ng.toolsFunc.defineProperty(Text.prototype, "wholeText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Text.prototype", "wholeText_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Text.prototype", "assignedSlot_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Text.prototype, "splitText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Text.prototype", "splitText", arguments);
        },
    });
})();