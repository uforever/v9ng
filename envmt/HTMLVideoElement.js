(function () { // HTMLVideoElement
    HTMLVideoElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLVideoElement, "HTMLVideoElement");
    Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "height_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "videoWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "videoHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "poster", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "poster_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "poster_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDecodedFrameCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitDecodedFrameCount_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDroppedFrameCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitDroppedFrameCount_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "playsInline", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "playsInline_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "playsInline_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onenterpictureinpicture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "onenterpictureinpicture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "onenterpictureinpicture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onleavepictureinpicture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "onleavepictureinpicture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "onleavepictureinpicture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "disablePictureInPicture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "disablePictureInPicture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "disablePictureInPicture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "cancelVideoFrameCallback", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "cancelVideoFrameCallback", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestPictureInPicture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "requestPictureInPicture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestVideoFrameCallback", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "requestVideoFrameCallback", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitSupportsFullscreen", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitSupportsFullscreen_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDisplayingFullscreen", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitDisplayingFullscreen_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "getVideoPlaybackQuality", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "getVideoPlaybackQuality", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullScreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitEnterFullScreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitEnterFullscreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullScreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitExitFullScreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLVideoElement.prototype", "webkitExitFullscreen", arguments);
        },
    });
})();