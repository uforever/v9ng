(function () { // Navigator
    Navigator = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Navigator, "Navigator");
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vendorSub", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vendorSub_get", arguments, "");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "productSub", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "productSub_get", arguments, "20030107");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vendor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vendor_get", arguments, "Google Inc.");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "maxTouchPoints", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "maxTouchPoints_get", arguments, 0);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "scheduling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "scheduling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userActivation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userActivation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "doNotTrack", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "doNotTrack_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "geolocation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "geolocation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "connection", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "connection_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "plugins", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "plugins_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mimeTypes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mimeTypes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "pdfViewerEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitTemporaryStorage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitPersistentStorage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "hardwareConcurrency", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "hardwareConcurrency_get", arguments, 8);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "cookieEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "cookieEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appCodeName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appCodeName_get", arguments, "Mozilla");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appName_get", arguments, "Netscape");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appVersion", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appVersion_get", arguments, "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "platform", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "platform_get", arguments, "Win32");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "product", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "product_get", arguments, "Gecko");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userAgent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userAgent_get", arguments, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "language", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "language_get", arguments, "zh-CN");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "languages", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "languages_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "onLine", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "onLine_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webdriver_get", arguments, false);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getGamepads", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getGamepads", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "javaEnabled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "javaEnabled", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "sendBeacon", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "sendBeacon", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vibrate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vibrate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "bluetooth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "bluetooth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "clipboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "clipboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "credentials", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "credentials_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "keyboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "keyboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "managed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "managed_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaDevices", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaDevices_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "storage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "storage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "serviceWorker", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "serviceWorker_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "virtualKeyboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "virtualKeyboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "wakeLock", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "wakeLock_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "deviceMemory", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "deviceMemory_get", arguments, 8);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "ink", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "ink_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "hid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "hid_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "locks", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "locks_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaCapabilities", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaCapabilities_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaSession", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaSession_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "permissions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "permissions_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "presentation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "presentation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "serial", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "serial_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "gpu", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "gpu_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "usb", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "usb_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "windowControlsOverlay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "windowControlsOverlay_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "xr", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "xr_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userAgentData", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userAgentData_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "canShare", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "canShare", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "share", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "share", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "clearAppBadge", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "clearAppBadge", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getBattery", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getBattery", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getUserMedia", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getUserMedia", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "requestMIDIAccess", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "requestMIDIAccess", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "requestMediaKeySystemAccess", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "setAppBadge", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "setAppBadge", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitGetUserMedia", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitGetUserMedia", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getInstalledRelatedApps", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getInstalledRelatedApps", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "registerProtocolHandler", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "registerProtocolHandler", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "unregisterProtocolHandler", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "unregisterProtocolHandler", arguments);
        },
    });
})();
(function () { // navigator
    navigator = {};
    Object.setPrototypeOf(navigator, Navigator.prototype);
})();