(function () { // Location
    Location = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Location, "Location");
})();
(function () { // location
    location = {};
    Object.setPrototypeOf(location, Location.prototype);
    v9ng.toolsFunc.defineProperty(location, "valueOf", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "valueOf", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "ancestorOrigins", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "ancestorOrigins_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(location, "href", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_get", arguments, "chrome://new-tab-page/");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "origin", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "origin_get", arguments, "chrome://new-tab-page");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(location, "protocol", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_get", arguments, "chrome:");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "host", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_get", arguments, "new-tab-page");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hostname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_get", arguments, "new-tab-page");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "port", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "pathname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_get", arguments, "/");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "search", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hash", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hash_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hash_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "assign", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "assign", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "reload", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "reload", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "replace", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "replace", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "toString", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "toString", arguments);
        },
    });
})();