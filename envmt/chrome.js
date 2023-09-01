(function () { // chrome
    chrome = {};
    v9ng.toolsFunc.defineProperty(chrome, "loadTimes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "chrome", "loadTimes", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(chrome, "csi", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "chrome", "csi", arguments);
        },
    });
    const app = {};
    v9ng.toolsFunc.defineProperty(app, "isInstalled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: false,
    });
    v9ng.toolsFunc.defineProperty(app, "getDetails", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "app", "getDetails", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(app, "getIsInstalled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "app", "getIsInstalled", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(app, "installState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "app", "installState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(app, "runningState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "app", "runningState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(app, "InstallState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {},
    });
    v9ng.toolsFunc.defineProperty(app, "RunningState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {},
    });
    v9ng.toolsFunc.defineProperty(chrome, "app", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: app,
    });
})();