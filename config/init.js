/* Init Framework */
(function () {
    v9ng = {
        "config": {},
        "cache": {},
        "toolsFunc": {},
        "envmtImpl": {},
    };
    v9ng.config.enableProxy = false;
    v9ng.config.printLog = false;
    v9ng.config.saveLog = false;
    v9ng.cache.fs = fs;
    v9ng.cache.undetectableObj = undetectableObj;
    v9ng.cache.nativeSymbol = Symbol('native');
    v9ng.cache.proxySymbol = Symbol('proxy');
    v9ng.cache.referSymbol = Symbol('dom');
    v9ng.cache.maskSymbol = Symbol('ptr');
    v9ng.cache.protoPropSymbol = Symbol('protoProp');
    v9ng.cache.proxyImmune = [
        "prototype",
        "eval",
        "all",
        Symbol.toPrimitive,
        Symbol.iterator,
        v9ng.cache.nativeSymbol,
        v9ng.cache.proxySymbol,
        v9ng.cache.referSymbol,
        v9ng.cache.maskSymbol,
        v9ng.cache.protoPropSymbol,
    ];
    v9ng.cache.recursiveImmuneObj = [
        '[object HTMLCollection]',
        '[object WebGLBuffer]',
        '[object WebGLProgram]',
        '[object HTMLAnchorElement]',
        '[object HTMLDivElement]',
        '[object HTMLMetaElement]',
        '[object HTMLScriptElement]',
    ];
    v9ng.cache.recursiveImmuneProp = [
        v9ng.cache.nativeSymbol,
        v9ng.cache.proxySymbol,
        v9ng.cache.referSymbol,
        v9ng.cache.maskSymbol,
        v9ng.cache.protoPropSymbol,
    ];
    v9ng.cache.cookie = {};
    v9ng.cache.fontList = ['Arial', 'Courier New', 'FangSong', 'Georgia', 'Helvetica Neue LT Pro 35 Thin', 'KaiTi', 'LG-FZKaTong-M19-V2.2', 'Microsoft Himalaya', 'NSimSun', 'SimHei', 'SimSun', 'Times New Roman', 'Verdana', 'arial', 'courier', 'courier new', 'cursive', 'fantasy', 'georgia', 'helvetica', 'monospace', 'serif', 'tahoma', 'times', 'times new roman', 'verdana'];
    v9ng.cache.asyncEventCursor = 0;
    v9ng.cache.asyncEvents = [];
    v9ng.cache.callbackFuncs = [];
    v9ng.cache.mouseEvents = [];
    v9ng.cache.listenEvents = {};
})();
