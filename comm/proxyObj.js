/* Proxy Objects */
(function () {
    sessionStorage = v9ng.toolsFunc.objProxy(sessionStorage, "sessionStorage");
    localStorage = v9ng.toolsFunc.objProxy(localStorage, "localStorage");
    location = v9ng.toolsFunc.objProxy(location, "location");
    document = v9ng.toolsFunc.objProxy(document, "document");
    window = v9ng.toolsFunc.objProxy(window, "window");
})();