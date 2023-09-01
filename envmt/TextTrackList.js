(function () { // TextTrackList
    TextTrackList = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(TextTrackList, "TextTrackList");
    Object.setPrototypeOf(TextTrackList.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(TextTrackList.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(TextTrackList.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(TextTrackList.prototype, "onaddtrack", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onaddtrack_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onaddtrack_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(TextTrackList.prototype, "onremovetrack", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onremovetrack_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "onremovetrack_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(TextTrackList.prototype, "getTrackById", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "TextTrackList.prototype", "getTrackById", arguments);
        },
    });
})();