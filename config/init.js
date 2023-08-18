/* Init Framework */
(function () {
    v9ng = {
        "config": {},
        "cache": {},
        "toolsFunc": {},
        "envmtImpl": {},
    };
    v9ng.config.enableProxy = true;
    v9ng.config.printLog = true;
    v9ng.config.saveLog = false;
    v9ng.cache.nativeSymbol = Symbol('native');
    v9ng.cache.proxySymbol = Symbol('proxy');
    v9ng.cache.proxyImmune = [v9ng.cache.proxySymbol, "eval"];
})();
