/* Proxy Objects */
(function () {
    window = v9ng.toolsFunc.objProxy(window, "window");
    document = v9ng.toolsFunc.objProxy(document, "document");
    location = v9ng.toolsFunc.objProxy(location, "location");
})();