(function () { /* Envmt Func Impl */
    v9ng.envmtImpl.BatteryManager_prototype$charging_get = function () {
        return true;
    };
    v9ng.envmtImpl.BatteryManager_prototype$chargingTime_get = function () {
        return 0;
    };
    v9ng.envmtImpl.BatteryManager_prototype$level_get = function () {
        return 1;
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
        this[v9ng.cache.referSymbol].arc(x, y, radius, startAngle, endAngle, anticlockwise);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$beginPath = function () {
        this[v9ng.cache.referSymbol].beginPath();
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$closePath = function () {
        this[v9ng.cache.referSymbol].closePath();
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$fill = function () {
        return this[v9ng.cache.referSymbol].fill.apply(this[v9ng.cache.referSymbol], arguments);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$fillRect = function (x, y, width, height) {
        this[v9ng.cache.referSymbol].fillRect(x, y, width, height);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$fillStyle_set = function (value) {
        return (this[v9ng.cache.referSymbol].fillStyle = value);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$fillText = function (text, x, y, maxWidth) {
        this[v9ng.cache.referSymbol].fillText(text, x, y, maxWidth);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$font_set = function (value) {
        return (this[v9ng.cache.referSymbol].font = value);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$globalCompositeOperation_set = function (value) {
        return (this[v9ng.cache.referSymbol].globalCompositeOperation = value);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$isPointInPath = function () {
        return this[v9ng.cache.referSymbol].isPointInPath.apply(this[v9ng.cache.referSymbol], arguments);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$rect = function (x, y, width, height) {
        this[v9ng.cache.referSymbol].rect(x, y, width, height);
    };
    v9ng.envmtImpl.CanvasRenderingContext2D_prototype$textBaseline_set = function (value) {
        return (this[v9ng.cache.referSymbol].textBaseline = value);
    };
    v9ng.envmtImpl.document$location_get = function () {
        return location;
    };
    v9ng.envmtImpl.Document_prototype$all_get = function () {
        return v9ng.cache.undetectableObj;
        // const elementsDom = document[v9ng.cache.referSymbol].getElementsByTagName('*');
        // let result = [];
        // for (const elementDom of elementsDom) {
        //     if (elementDom[v9ng.cache.maskSymbol]) {
        //         result.push(elementDom[v9ng.cache.maskSymbol]);
        //     } else {
        //         result.push(v9ng.toolsFunc.genMaskObj(elementDom));
        //     }
        // }
        // result = v9ng.toolsFunc.createProxyObj(result, HTMLAllCollection, "HTMLAllCollection");
        // return result;
    };
    v9ng.envmtImpl.Document_prototype$body_get = function () {
        const domObj = document[v9ng.cache.referSymbol].body;
        if (domObj[v9ng.cache.maskSymbol]) {
            return domObj[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(domObj);
        }
    };
    v9ng.envmtImpl.Document_prototype$cookie_get = function () {
        return document[v9ng.cache.referSymbol].cookie;
    };
    v9ng.envmtImpl.Document_prototype$cookie_set = function (value) {
        return (document[v9ng.cache.referSymbol].cookie = value);
    };
    v9ng.envmtImpl.Document_prototype$createElement = function (tagName) {
        const domObj = document[v9ng.cache.referSymbol].createElement(tagName);
        return v9ng.toolsFunc.genMaskObj(domObj);
    };
    v9ng.envmtImpl.Document_prototype$createEvent = function (type) {
        if (type === 'TouchEvent') {
            // v9ng.toolsFunc.throwError('DOMException', "Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.");
            return undefined;
        } else {
            v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: Document_prototype$createEvent()
[TYPE]: \`${type}\``);
        }
    };
    v9ng.envmtImpl.Document_prototype$createExpression = function (xpathText, namespaceURLMapper) {
        const referObj = document[v9ng.cache.referSymbol].createExpression(xpathText, namespaceURLMapper);
        return v9ng.toolsFunc.genMaskObj(referObj);
    };
    v9ng.envmtImpl.Document_prototype$documentElement_get = function () {
        const domObj = document[v9ng.cache.referSymbol].documentElement;
        if (domObj[v9ng.cache.maskSymbol]) {
            return domObj[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(domObj);
        }
    };
    v9ng.envmtImpl.Document_prototype$getElementsByTagName = function (tagName) {
        const elementsDom = document[v9ng.cache.referSymbol].getElementsByTagName(tagName);
        let result = [];
        for (const elementDom of elementsDom) {
            if (elementDom[v9ng.cache.maskSymbol]) {
                result.push(elementDom[v9ng.cache.maskSymbol]);
            } else {
                result.push(v9ng.toolsFunc.genMaskObj(elementDom));
            }
        }
        result = v9ng.toolsFunc.createProxyObj(result, HTMLCollection, "htmlCollection");
        return result;
    };
    v9ng.envmtImpl.Document_prototype$getElementById = function (tagId) {
        const elementDom = document[v9ng.cache.referSymbol].getElementById(tagId);
        if (elementDom === null) {
            return null;
        }
        if (elementDom[v9ng.cache.maskSymbol]) {
            return elementDom[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(elementDom);
        }
    };
    v9ng.envmtImpl.Document_prototype$scripts_get = function () {
        const elementsDom = document[v9ng.cache.referSymbol].scripts;
        let result = [];
        for (const elementDom of elementsDom) {
            if (elementDom[v9ng.cache.maskSymbol]) {
                result.push(elementDom[v9ng.cache.maskSymbol]);
            } else {
                result.push(v9ng.toolsFunc.genMaskObj(elementDom));
            }
        }
        result = v9ng.toolsFunc.createProxyObj(result, HTMLCollection, "htmlCollection");
        return result;
    };
    v9ng.envmtImpl.Document_prototype$scrollingElement_get = function () {
        return document.documentElement;
    };
    v9ng.envmtImpl.Document_prototype$write = function (content) {
        document[v9ng.cache.referSymbol].write(content);
    };
    v9ng.envmtImpl.Element_prototype$children_get = function () {
        const childrenDom = this[v9ng.cache.referSymbol]["children"];
        let result = [];
        for (const childDom of childrenDom) {
            if (childDom[v9ng.cache.maskSymbol]) {
                result.push(childDom[v9ng.cache.maskSymbol]);
            } else {
                result.push(v9ng.toolsFunc.genMaskObj(childDom));
            }
        }
        result = v9ng.toolsFunc.createProxyObj(result, HTMLCollection, "htmlCollection");
        return result;
    };
    v9ng.envmtImpl.Element_prototype$getAttribute = function (attributeName) {
        return this[v9ng.cache.referSymbol].getAttribute(attributeName);
    };
    v9ng.envmtImpl.Element_prototype$getElementsByTagName = function (tagName) {
        const elementsDom = this[v9ng.cache.referSymbol].getElementsByTagName(tagName);
        let result = [];
        for (const elementDom of elementsDom) {
            if (elementDom[v9ng.cache.maskSymbol]) {
                result.push(elementDom[v9ng.cache.maskSymbol]);
            } else {
                result.push(v9ng.toolsFunc.genMaskObj(elementDom));
            }
        }
        result = v9ng.toolsFunc.createProxyObj(result, HTMLCollection, "htmlCollection");
        return result;
    };
    v9ng.envmtImpl.Element_prototype$id_get = function () {
        return this[v9ng.cache.referSymbol].id;
    };
    v9ng.envmtImpl.Element_prototype$id_set = function (value) {
        return (this[v9ng.cache.referSymbol].id = value);
    };
    v9ng.envmtImpl.Element_prototype$innerHTML_get = function () {
        return this[v9ng.cache.referSymbol].innerHTML;
    };
    v9ng.envmtImpl.Element_prototype$innerHTML_set = function (htmlCode) {
        return (this[v9ng.cache.referSymbol].innerHTML = htmlCode);
    };
    v9ng.envmtImpl.Element_prototype$setAttribute = function (name, value) {
        return this[v9ng.cache.referSymbol].setAttribute(name, value);
    };
    v9ng.envmtImpl.Element_prototype$tagName_get = function () {
        return this[v9ng.cache.referSymbol].tagName;
    };
    v9ng.envmtImpl.Event_prototype$timeStamp_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "timeStamp");
    };
    v9ng.envmtImpl.EventTarget_prototype$addEventListener = function (type, listener, options) {
        let event = {
            "self": this,
            "type": type,
            "listener": listener,
            "options": options
        }
        if (v9ng.cache.listenEvents[type] === undefined) {
            v9ng.cache.listenEvents[type] = [];
        }
        v9ng.cache.listenEvents[type].push(event);
    };
    v9ng.envmtImpl.HTMLAllCollection_prototype$length_get = function () {
        return document[v9ng.cache.referSymbol].getElementsByTagName('*').length;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$hash_get = function () {
        return this[v9ng.cache.referSymbol].hash;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$hostname_get = function () {
        return this[v9ng.cache.referSymbol].hostname;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$href_get = function () {
        return this[v9ng.cache.referSymbol].href;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$href_set = function (value) {
        return (this[v9ng.cache.referSymbol].href = value);
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$origin_get = function () {
        return this[v9ng.cache.referSymbol].origin;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$pathname_get = function () {
        return this[v9ng.cache.referSymbol].pathname;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$port_get = function () {
        return this[v9ng.cache.referSymbol].port;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$protocol_get = function () {
        return this[v9ng.cache.referSymbol].protocol;
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$search_get = function () {
        return this[v9ng.cache.referSymbol].search;
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$getContext = function (type) {
        const domObj = this[v9ng.cache.referSymbol].getContext(type);
        if (domObj === null) {
            return null;
        }
        if (domObj[v9ng.cache.maskSymbol]) {
            return domObj[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(domObj);
        }
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$height_set = function (value) {
        return (this[v9ng.cache.referSymbol].height = value);
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$toDataURL = function () {
        return this[v9ng.cache.referSymbol].toDataURL();
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$width_set = function (value) {
        return (this[v9ng.cache.referSymbol].width = value);
    };
    v9ng.envmtImpl.HTMLDivElement_prototype$align_get = function () {
        return this[v9ng.cache.referSymbol].align;
    };
    v9ng.envmtImpl.HTMLDivElement_prototype$align_set = function (value) {
        return (this[v9ng.cache.referSymbol].align = value);
    };
    v9ng.envmtImpl.HTMLElement_prototype$offsetHeight_get = function () {
        let fontFamily = this[v9ng.cache.referSymbol].style.fontFamily;
        if (v9ng.cache.fontList.includes(fontFamily)) {
            return 161;
        } else {
            return 211;
        }
    };
    v9ng.envmtImpl.HTMLElement_prototype$offsetWidth_get = function () {
        let fontFamily = this[v9ng.cache.referSymbol].style.fontFamily;
        if (v9ng.cache.fontList.includes(fontFamily)) {
            return 640;
        } else {
            return 614;
        }
    };
    v9ng.envmtImpl.HTMLElement_prototype$onclick_set = function (value) {
        return (this[v9ng.cache.referSymbol].onclick = value);
    };
    v9ng.envmtImpl.HTMLElement_prototype$onmouseenter_get = function () {
        return this[v9ng.cache.referSymbol].onmouseenter;
    };
    v9ng.envmtImpl.HTMLElement_prototype$onresize_get = function () {
        return this[v9ng.cache.referSymbol].onresize;
    };
    v9ng.envmtImpl.HTMLElement_prototype$style_get = function () {
        return this[v9ng.cache.referSymbol].style;
    };
    v9ng.envmtImpl.HTMLFormElement_prototype$action_get = function () {
        return this[v9ng.cache.referSymbol].action;
    };
    v9ng.envmtImpl.HTMLFormElement_prototype$action_set = function (value) {
        return (this[v9ng.cache.referSymbol].action = value);
    };
    v9ng.envmtImpl.HTMLInputElement_prototype$name_set = function (value) {
        return (this[v9ng.cache.referSymbol].name = value);
    };
    v9ng.envmtImpl.HTMLInputElement_prototype$type_get = function () {
        return this[v9ng.cache.referSymbol].type;
    };
    v9ng.envmtImpl.HTMLInputElement_prototype$type_set = function (value) {
        return (this[v9ng.cache.referSymbol].type = value);
    };
    v9ng.envmtImpl.HTMLMediaElement_prototype$canPlayType = function (mediaType) {
        return this[v9ng.cache.referSymbol].canPlayType(mediaType);
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$charset_get = function () {
        return this[v9ng.cache.referSymbol].charset;
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$charset_set = function (value) {
        return (this[v9ng.cache.referSymbol].charset = value);
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$src_get = function () {
        return this[v9ng.cache.referSymbol].src;
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$src_set = function (value) {
        return (this[v9ng.cache.referSymbol].src = value);
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$type_get = function () {
        return this[v9ng.cache.referSymbol].type;
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$type_set = function (value) {
        return (this[v9ng.cache.referSymbol].type = value);
    };
    v9ng.envmtImpl.HTMLMetaElement_prototype$content_get = function () {
        return this[v9ng.cache.referSymbol].content;
    };
    v9ng.envmtImpl.HTMLMetaElement_prototype$content_set = function (value) {
        return (this[v9ng.cache.referSymbol].content = value);
    };
    v9ng.envmtImpl.IDBDatabase_prototype$name_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "name");
    };
    v9ng.envmtImpl.IDBDatabase_prototype$version_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "version");
    };
    v9ng.envmtImpl.IDBOpenDBRequest_prototype$onupgradeneeded_set = function (callback) {
        return v9ng.toolsFunc.setProtoProp.call(this, "onupgradeneeded", callback);
    };
    v9ng.envmtImpl.IDBRequest_prototype$onerror_set = function (callback) {
        return v9ng.toolsFunc.setProtoProp.call(this, "onerror", callback);
    };
    v9ng.envmtImpl.IDBRequest_prototype$onsuccess_set = function (callback) {
        return v9ng.toolsFunc.setProtoProp.call(this, "onsuccess", callback);
    };
    v9ng.envmtImpl.IDBFactory_prototype$open = function (name, version) {
        const idbOpenDBRequest = v9ng.toolsFunc.createProxyObj({}, IDBOpenDBRequest, "IDBOpenDBRequest");
        v9ng.toolsFunc.setProtoProp.call(idbOpenDBRequest, "readyState", "done");
        const idbDatabase = v9ng.toolsFunc.createProxyObj({}, IDBDatabase, "IDBDatabase");
        v9ng.toolsFunc.setProtoProp.call(idbDatabase, "name", name);
        v9ng.toolsFunc.setProtoProp.call(idbDatabase, "version", version);
        v9ng.toolsFunc.setProtoProp.call(idbOpenDBRequest, "result", idbDatabase);
        return idbOpenDBRequest;
    };
    v9ng.envmtImpl.IDBRequest_prototype$result_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "result");
    };
    v9ng.envmtImpl.location$hash_get = function () {
        return document[v9ng.cache.referSymbol].location.hash;
    };
    v9ng.envmtImpl.location$host_get = function () {
        return document[v9ng.cache.referSymbol].location.host;
    };
    v9ng.envmtImpl.location$hostname_get = function () {
        return document[v9ng.cache.referSymbol].location.hostname;
    };
    v9ng.envmtImpl.location$hostname_set = function (value) {
        return (document[v9ng.cache.referSymbol].location.hostname = value);
    };
    v9ng.envmtImpl.location$href_get = function () {
        return document[v9ng.cache.referSymbol].location.href;
    };
    v9ng.envmtImpl.location$origin_get = function () {
        return document[v9ng.cache.referSymbol].location.origin;
    };
    v9ng.envmtImpl.location$pathname_get = function () {
        return document[v9ng.cache.referSymbol].location.pathname;
    };
    v9ng.envmtImpl.location$port_get = function () {
        return document[v9ng.cache.referSymbol].location.port;
    };
    v9ng.envmtImpl.location$protocol_get = function () {
        return document[v9ng.cache.referSymbol].location.protocol;
    };
    v9ng.envmtImpl.location$protocol_set = function (value) {
        return (document[v9ng.cache.referSymbol].location.protocol = value);
    };
    v9ng.envmtImpl.location$replace = function (url) {
        // return document[v9ng.cache.referSymbol].location.replace(url);
        return undefined;
    };
    v9ng.envmtImpl.location$search_get = function () {
        return document[v9ng.cache.referSymbol].location.search;
    };
    v9ng.envmtImpl.MimeType_prototype$description_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "description");
    };
    v9ng.envmtImpl.MimeType_prototype$enabledPlugin_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "enabledPlugin");
    };
    v9ng.envmtImpl.MimeType_prototype$suffixes_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "suffixes");
    };
    v9ng.envmtImpl.MimeType_prototype$type_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "type");
    };
    v9ng.envmtImpl.MimeTypeArray_prototype$item = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.MimeTypeArray_prototype$length_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "length");
    };
    v9ng.envmtImpl.MimeTypeArray_prototype$namedItem = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.MouseEvent_prototype$clientX_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "clientX");
    };
    v9ng.envmtImpl.MouseEvent_prototype$clientY_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "clientY");
    };
    v9ng.envmtImpl.Navigator_prototype$connection_get = function () {
        return v9ng.toolsFunc.createProxyObj({}, NetworkInformation, "NetworkInformation");
    };
    v9ng.envmtImpl.Navigator_prototype$getBattery = function () {
        const batteryManager = v9ng.toolsFunc.createProxyObj({}, BatteryManager, "BatteryManager");
        const obj = {
            "then": function (callBack) {
                v9ng.cache.callbackFuncs.push(function () {
                    return callBack(batteryManager);
                });
            },
        };
        return obj;
        // return new Promise(function (resolve) {
        //     let batteryManager = {};
        //     batteryManager = v9ng.toolsFunc.createProxyObj(batteryManager, BatteryManager, "batteryManager");
        //     return resolve(batteryManager);
        // });
    };
    v9ng.envmtImpl.Navigator_prototype$languages_get = function () {
        return ['zh-CN', 'zh'];
    };
    v9ng.envmtImpl.Navigator_prototype$locks_get = function () {
        return v9ng.toolsFunc.createProxyObj({}, LockManager, "LockManager");
    };
    v9ng.envmtImpl.Navigator_prototype$mimeTypes_get = function () {
        return v9ng.cache.mimeTypeArray;
    };
    v9ng.envmtImpl.Navigator_prototype$plugins_get = function () {
        return v9ng.cache.pluginArray;
    };
    v9ng.envmtImpl.Navigator_prototype$webkitPersistentStorage_get = function () {
        const DeprecatedStorageQuota = function () { };
        v9ng.toolsFunc.ctorGuard(DeprecatedStorageQuota, "DeprecatedStorageQuota");
        v9ng.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype, "queryUsageAndQuota", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function () {
                return v9ng.toolsFunc.funcDispatch(this, "DeprecatedStorageQuota.prototype", "queryUsageAndQuota", arguments);
            },
        });
        v9ng.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype, "requestQuota", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function () {
                return v9ng.toolsFunc.funcDispatch(this, "DeprecatedStorageQuota.prototype", "requestQuota", arguments);
            },
        });
        delete DeprecatedStorageQuota.prototype.constructor;
        return v9ng.toolsFunc.createProxyObj({}, DeprecatedStorageQuota, "DeprecatedStorageQuota");
    };
    v9ng.envmtImpl.Node_prototype$appendChild = function (tag) {
        return this[v9ng.cache.referSymbol].appendChild(tag[v9ng.cache.referSymbol])[v9ng.cache.maskSymbol];
    };
    v9ng.envmtImpl.Node_prototype$firstChild_get = function () {
        // TODO: Text Node
        const firstChildDom = this[v9ng.cache.referSymbol].firstChild;
        if (firstChildDom === null) {
            return null;
        }
        if (firstChildDom[v9ng.cache.maskSymbol]) {
            return firstChildDom[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(firstChildDom);
        }
    };
    v9ng.envmtImpl.Node_prototype$nextSibling_get = function () {
        // TODO: Text Node
        const nextSiblingDom = this[v9ng.cache.referSymbol].nextSibling;
        if (nextSiblingDom === null) {
            return null;
        }
        if (nextSiblingDom[v9ng.cache.maskSymbol]) {
            return nextSiblingDom[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(nextSiblingDom);
        }
    };
    v9ng.envmtImpl.Node_prototype$nodeType_get = function () {
        return this[v9ng.cache.referSymbol].nodeType;
    };
    v9ng.envmtImpl.Node_prototype$parentElement_get = function () {
        const parentNodeDom = this[v9ng.cache.referSymbol].parentElement;
        if (parentNodeDom === null) {
            return null;
        }
        if (parentNodeDom[v9ng.cache.maskSymbol]) {
            return parentNodeDom[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(parentNodeDom);
        }
    };
    v9ng.envmtImpl.Node_prototype$parentNode_get = function () {
        const parentNodeDom = this[v9ng.cache.referSymbol].parentNode;
        if (parentNodeDom === null) {
            return null;
        }
        if (parentNodeDom[v9ng.cache.maskSymbol]) {
            return parentNodeDom[v9ng.cache.maskSymbol];
        } else {
            return v9ng.toolsFunc.genMaskObj(parentNodeDom);
        }
    };
    v9ng.envmtImpl.Node_prototype$removeChild = function (tag) {
        return this[v9ng.cache.referSymbol].removeChild(tag[v9ng.cache.referSymbol])[v9ng.cache.maskSymbol];
    };
    v9ng.envmtImpl.Node_prototype$textContent_get = function () {
        return this[v9ng.cache.referSymbol].textContent;
    };
    v9ng.envmtImpl.Plugin_prototype$description_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "description");
    };
    v9ng.envmtImpl.Plugin_prototype$filename_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "filename");
    };
    v9ng.envmtImpl.Plugin_prototype$item = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.Plugin_prototype$length_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "length");
    };
    v9ng.envmtImpl.Plugin_prototype$name_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "name");
    };
    v9ng.envmtImpl.Plugin_prototype$namedItem = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.PluginArray_prototype$item = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.PluginArray_prototype$length_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "length");
    };
    v9ng.envmtImpl.PluginArray_prototype$namedItem = function (index) {
        return this[index];
    };
    v9ng.envmtImpl.Storage_prototype$clear = function () {
        for (const key in this) {
            delete this[key];
        }
    };
    v9ng.envmtImpl.Storage_prototype$getItem = function (key) {
        if (key in this) {
            return this[key];
        } else {
            return null;
        }
    };
    v9ng.envmtImpl.Storage_prototype$key = function (index) {
        const keys = Object.keys(this).sort();
        if (index >= keys.length) {
            return null;
        } else {
            return keys[index];
        }
    };
    v9ng.envmtImpl.Storage_prototype$length_get = function () {
        return Object.keys(this).length;
    };
    v9ng.envmtImpl.Storage_prototype$removeItem = function (key) {
        delete this[key];
    };
    v9ng.envmtImpl.Storage_prototype$setItem = function (key, value) {
        this[key] = value;
    };
    v9ng.envmtImpl.WebGLRenderingContext_prototype$canvas_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "canvas");
    };
    v9ng.envmtImpl.WebGLRenderingContext_prototype$createBuffer = function () {
        return v9ng.toolsFunc.createProxyObj({}, WebGLBuffer, "WebGLBuffer");
    };
    v9ng.envmtImpl.WebGLRenderingContext_prototype$createProgram = function () {
        return v9ng.toolsFunc.createProxyObj({}, WebGLProgram, "WebGLProgram");
    };
    v9ng.envmtImpl.window$clearInterval = function (timeoutId) {
        for (let i = 0; i < v9ng.cache.asyncEvents.length; i++) {
            let event = v9ng.cache.asyncEvents[i];
            if (event.timeoutId === timeoutId) {
                delete v9ng.cache.asyncEvents[i];
            }
        }
    };
    v9ng.envmtImpl.window$clearTimeout = v9ng.envmtImpl.window$clearInterval;
    v9ng.envmtImpl.window$clientInformation_get = function () {
        return navigator;
    };
    v9ng.envmtImpl.window$openDatabase = function (name, version, description, size) {
        const Database = function () { };
        v9ng.toolsFunc.ctorGuard(Database, "Database");
        v9ng.toolsFunc.defineProperty(Database, "version", {
            configurable: true,
            enumerable: true,
            get: function () {
                return v9ng.toolsFunc.funcDispatch(this, "Database", "version_get", arguments, version);
            },
            set: undefined,
        });
        v9ng.toolsFunc.defineProperty(Database, "changeVersion", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function () {
                return v9ng.toolsFunc.funcDispatch(this, "Database", "changeVersion", arguments);
            },
        });
        v9ng.toolsFunc.defineProperty(Database, "readTransaction", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function () {
                return v9ng.toolsFunc.funcDispatch(this, "Database", "readTransaction", arguments);
            },
        });
        v9ng.toolsFunc.defineProperty(Database, "transaction", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function () {
                return v9ng.toolsFunc.funcDispatch(this, "Database", "transaction", arguments);
            },
        });
        delete Database.prototype.constructor;
        return v9ng.toolsFunc.createProxyObj({}, Database, "Database");
    };
    v9ng.envmtImpl.window$self_get = function () {
        return window;
    };
    v9ng.envmtImpl.window$setInterval = function () {
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let args = [];
        for (let i = 2; i < length; i++) {
            args.push(arguments[i]);
        }
        let type = 1; // normal func
        if (typeof func !== "function") {
            type = 0; // eval code
        }
        v9ng.cache.asyncEventCursor += 1;
        let event = {
            "callback": func,
            "delay": delay,
            "args": args,
            "type": type,
            "timeoutId": v9ng.cache.asyncEventCursor
        }
        v9ng.cache.asyncEvents.push(event);
        return v9ng.cache.asyncEventCursor;
    };
    v9ng.envmtImpl.window$setTimeout = v9ng.envmtImpl.window$setInterval;
    v9ng.envmtImpl.window$top_get = function () {
        return window;
    };
    v9ng.envmtImpl.window$webkitRequestFileSystem = function (type, size, successCallback, errorCallback) {
        v9ng.cache.callbackFuncs.push(successCallback);
    };
    v9ng.envmtImpl.XMLHttpRequest_prototype$open = function (method, url) {
        return url;
    };
})();