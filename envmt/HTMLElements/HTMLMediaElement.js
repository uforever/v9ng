(function () { // HTMLMediaElement
    HTMLMediaElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLMediaElement, "HTMLMediaElement");
    Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_EMPTY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_IDLE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_NO_SOURCE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_NOTHING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_METADATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_CURRENT_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_FUTURE_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_ENOUGH_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "error", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "error_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentSrc", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "currentSrc_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "crossOrigin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "crossOrigin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "crossOrigin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "networkState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "networkState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "preload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "preload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "buffered", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "buffered_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "readyState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seeking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "seeking_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "currentTime_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "currentTime_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "duration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "duration_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "paused", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "paused_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultPlaybackRate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "defaultPlaybackRate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "defaultPlaybackRate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "playbackRate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "playbackRate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "playbackRate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "played", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "played_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seekable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "seekable_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "ended", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "ended_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "autoplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "autoplay_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "autoplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "loop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "loop_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "loop_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preservesPitch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "preservesPitch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "preservesPitch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controls", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "controls_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "controls_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controlsList", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "controlsList_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "controlsList_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "volume", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "volume_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "volume_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "muted", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "muted_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "muted_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultMuted", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "defaultMuted_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "defaultMuted_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "textTracks", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "textTracks_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitAudioDecodedByteCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "webkitAudioDecodedByteCount_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitVideoDecodedByteCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "webkitVideoDecodedByteCount_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onencrypted", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "onencrypted_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "onencrypted_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onwaitingforkey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "onwaitingforkey_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "onwaitingforkey_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "srcObject", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "srcObject_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "srcObject_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_EMPTY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_IDLE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_NO_SOURCE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_NOTHING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_METADATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_CURRENT_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_FUTURE_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_ENOUGH_DATA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "addTextTrack", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "addTextTrack", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "canPlayType", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "canPlayType", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "captureStream", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "captureStream", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "load", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "load", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "pause", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "pause", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "play", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "play", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "sinkId", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "sinkId_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "remote", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "remote_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "disableRemotePlayback", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "disableRemotePlayback_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "disableRemotePlayback_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setSinkId", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "setSinkId", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "mediaKeys", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "mediaKeys_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setMediaKeys", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMediaElement.prototype", "setMediaKeys", arguments);
        },
    });
})();