(function () { // Notification
    Notification = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'Notification': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(Notification, "Notification");
    Object.setPrototypeOf(Notification.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(Notification, "permission", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification", "permission_get", arguments, "default");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification, "maxActions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification", "maxActions_get", arguments, 2);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification, "requestPermission", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification", "requestPermission", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "onclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "onshow", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onshow_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onshow_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "onclose", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onclose_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "onclose_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "title", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "title_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "dir", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "dir_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "lang", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "lang_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "body", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "body_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "tag", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "tag_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "icon", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "icon_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "badge", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "badge_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "vibrate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "vibrate_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "timestamp", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "timestamp_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "renotify", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "renotify_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "silent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "silent_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "requireInteraction", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "requireInteraction_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "data", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "data_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "actions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "actions_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "close", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "close", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Notification.prototype, "image", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Notification.prototype", "image_get", arguments);
        },
        set: undefined,
    });
})();