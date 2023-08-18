(function () { /* Envmt Func Impl */
    v9ng.envmtImpl.Storage_prototype$getItem = function () {
        return null;
    };
    v9ng.envmtImpl.document$location_get = function () {
        return location;
    };
    v9ng.envmtImpl.Document_prototype$createElement = function (tagName) {
        return `<${tagName}></${tagName}>`;
    };
    v9ng.envmtImpl.window$top_get = function () {
        return window;
    }
    v9ng.envmtImpl.window$self_get = function () {
        return window;
    }
})();