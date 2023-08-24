/* Init Framework */
(function () {
    v9ng = {
        "config": {},
        "cache": {},
        "toolsFunc": {},
        "envmtImpl": {},
    };
    v9ng.config.enableProxy = false;
    v9ng.config.printLog = true;
    v9ng.config.saveLog = false;
    v9ng.cache.nativeSymbol = Symbol('native');
    v9ng.cache.proxySymbol = Symbol('proxy');
    v9ng.cache.protoPropSymbol = Symbol('protoProp');
    v9ng.cache.proxyImmune = [
        v9ng.cache.proxySymbol,
        "eval",
    ];
    v9ng.cache.recursiveLogImmune = [
        '[object WebGLBuffer]',
        '[object WebGLProgram]',
        '[object HTMLDivElement]',
    ];
    v9ng.cache.htmlElements = [];
    v9ng.cache.cookie = {};
    v9ng.cache.fontList = [
        "SimHei",
        "SimSun",
        "NSimSun",
        "FangSong",
        "KaiTi",
    ];
    v9ng.cache.timeFuncCursor = 0;
    v9ng.cache.timeoutEvents = [];
    v9ng.cache.promiseEvents = [];
    v9ng.cache.listenEvents = {};
})();
