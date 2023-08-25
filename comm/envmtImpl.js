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
    v9ng.envmtImpl.document$location_get = function () {
        return location;
    };
    v9ng.envmtImpl.Document_prototype$all_get = function () { // TODO
    };
    v9ng.envmtImpl.Document_prototype$body_get = function () {
        let collection = v9ng.toolsFunc.getElements('[object HTMLBodyElement]');
        return collection[0];
    };
    v9ng.envmtImpl.Document_prototype$cookie_get = function () {
        let result = [];
        for (const cookieKey in v9ng.cache.cookie) {
            if (cookieKey === "") {
                result.push(`${v9ng.cache.cookie[cookieKey]}`);
            } else {
                result.push(`${cookieKey}=${v9ng.cache.cookie[cookieKey]}`);
            }
        }
        return result.join('; ');
    };
    v9ng.envmtImpl.Document_prototype$cookie_set = function (content) {
        content = content.split(';')[0];
        if (content.indexOf('=') === -1) {
            v9ng.cache.cookie[""] = content.trim();
        } else {
            const cookiePair = content.split('=');
            const cookieKey = cookiePair[0].trim();
            const cookieValue = cookiePair[1].trim();
            v9ng.cache.cookie[cookieKey] = cookieValue;
        }
    };
    v9ng.envmtImpl.Document_prototype$createElement = function (tagName) {
        const tagType = tagName.toUpperCase();
        let tag = {};
        switch (tagType) {
            case "A":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLAnchorElement, 'HTMLAnchorElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "BODY":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLBodyElement, 'HTMLBodyElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "CANVAS":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLCanvasElement, 'HTMLCanvasElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "DIV":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLDivElement, 'HTMLDivElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "HEAD":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLHeadElement, 'HTMLHeadElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "INPUT":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLInputElement, 'HTMLInputElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "META":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLMetaElement, 'HTMLMetaElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "SCRIPT":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLScriptElement, 'HTMLScriptElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "SPAN":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLSpanElement, 'HTMLSpanElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            case "I":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLElement, 'HTMLElement');
                v9ng.cache.htmlElements.push(tag);
                break;
            default:
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLElement, 'HTMLElement');
                v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: Document_prototype$createElement("${tagName}")`);
                break;
        }
        v9ng.toolsFunc.setProtoProp.call(tag, "tagName", tagType);
        console.log(tag, tag.tagName);
        return tag;
    };
    v9ng.envmtImpl.Document_prototype$getElementsByTagName = function (tagName) {
        const tagType = tagName.toUpperCase();
        return v9ng.toolsFunc.getElements(tagType);
        // v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: Document_prototype$getElementsByTagName("${tagName}")`);
    };
    v9ng.envmtImpl.Document_prototype$getElementById = function (tagId) {
        for (const tag of v9ng.cache.htmlElements) {
            if (tag.id === tagId) {
                return tag;
            }
        }
        return null;
    };
    v9ng.envmtImpl.Document_prototype$scripts_get = function () {
        return document.getElementsByTagName("script");
    };
    v9ng.envmtImpl.Document_prototype$write = function (content) {
        const singleTag = v9ng.toolsFunc.parseSingleTag(content);
        let tag = document.createElement(singleTag.type);
        for (const key in singleTag.props) {
            const value = singleTag.props[key];
            tag[key] = value;
            if (tag[key] === undefined) {
                v9ng.toolsFunc.setProtoProp.call(tag, key, value);
            }
        }
    };
    v9ng.envmtImpl.Element_prototype$children_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "children");
    };
    v9ng.envmtImpl.Element_prototype$getElementsByTagName = function (tagName) {
        const tagType = tagName.toUpperCase();
        return v9ng.toolsFunc.getElements(tagType, this);
        // v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: Element_prototype$getElementsByTagName("${tagName}")`);

    };
    v9ng.envmtImpl.Element_prototype$id_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "id");
    };
    v9ng.envmtImpl.Element_prototype$id_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "id", value);
    };
    v9ng.envmtImpl.Element_prototype$innerHTML_set = v9ng.toolsFunc.noopFunc;
    v9ng.envmtImpl.Element_prototype$tagName_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "tagName");
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
    v9ng.envmtImpl.HTMLAnchorElement_prototype$hash_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "hash");
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$hostname_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "hostname");
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$href_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "href");
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$href_set = function (value) {
        let urlStr = value;
        if (urlStr.indexOf("http") === -1) {
            urlStr = location.protocol + "//" + location.hostname + urlStr;
        }
        const urlObj = v9ng.toolsFunc.parseUrl(urlStr);
        v9ng.toolsFunc.setProtoProp.call(this, "hash", urlObj["hash"]);
        v9ng.toolsFunc.setProtoProp.call(this, "host", urlObj["host"]);
        v9ng.toolsFunc.setProtoProp.call(this, "hostname", urlObj["hostname"]);
        v9ng.toolsFunc.setProtoProp.call(this, "origin", urlObj["origin"]);
        v9ng.toolsFunc.setProtoProp.call(this, "pathname", urlObj["pathname"]);
        v9ng.toolsFunc.setProtoProp.call(this, "port", urlObj["port"]);
        v9ng.toolsFunc.setProtoProp.call(this, "protocol", urlObj["protocol"]);
        v9ng.toolsFunc.setProtoProp.call(this, "search", urlObj["search"]);
        return v9ng.toolsFunc.setProtoProp.call(this, "href", urlObj["href"]);
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$origin_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "origin");
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$protocol_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "protocol");
    };
    v9ng.envmtImpl.HTMLAnchorElement_prototype$search_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "search");
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$getContext = function (type) {
        let context = {};
        switch (type) {
            case "2d":
                context = v9ng.toolsFunc.createProxyObj(context, CanvasRenderingContext2D, "context_2d");
                v9ng.toolsFunc.setProtoProp.call(context, "canvas", this);
                v9ng.toolsFunc.setProtoProp.call(this, "type", type);
                break;
            case "webgl":
                context = v9ng.toolsFunc.createProxyObj(context, WebGLRenderingContext, "context_webgl");
                v9ng.toolsFunc.setProtoProp.call(context, "canvas", this);
                v9ng.toolsFunc.setProtoProp.call(this, "type", type);
                break;
            default:
                v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: HTMLCanvasElement_prototype$getContext("${type}")`);
                break;
        }
        return context;
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$height_set = v9ng.toolsFunc.noopFunc;
    v9ng.envmtImpl.HTMLCanvasElement_prototype$toDataURL = function () {
        let type = v9ng.toolsFunc.getProtoProp.call(this, "type");
        if (type === "2d") {
            return v9ng.cache.canvas_2d;
        } else if (type === "webgl") {
            return v9ng.cache.canvas_webgl;
        }
    };
    v9ng.envmtImpl.HTMLCanvasElement_prototype$width_set = v9ng.toolsFunc.noopFunc;
    v9ng.envmtImpl.HTMLDivElement_prototype$align_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "align");
    };
    v9ng.envmtImpl.HTMLDivElement_prototype$align_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "align", value);
    };
    v9ng.envmtImpl.HTMLElement_prototype$offsetHeight_get = function () {
        let fontFamily = this.style.fontFamily;
        if (v9ng.cache.fontList.includes(fontFamily)) {
            return 161;
        } else {
            return 211;
        }
    };
    v9ng.envmtImpl.HTMLElement_prototype$offsetWidth_get = function () {
        let fontFamily = this.style.fontFamily;
        if (v9ng.cache.fontList.includes(fontFamily)) {
            return 640;
        } else {
            return 614;
        }
    };
    v9ng.envmtImpl.HTMLElement_prototype$style_get = function () {
        let style = v9ng.toolsFunc.getProtoProp.call(this, "style");
        if (style === undefined) {
            style = v9ng.toolsFunc.createProxyObj({}, CSSStyleDeclaration, "style");
        }
        return style;
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$charset_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "charset");
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$charset_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "charset", value);
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$src_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "src");
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$src_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "src", value);
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$type_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "type");
    };
    v9ng.envmtImpl.HTMLScriptElement_prototype$type_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "type", value);
    };
    v9ng.envmtImpl.HTMLMetaElement_prototype$content_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "content");
    };
    v9ng.envmtImpl.HTMLMetaElement_prototype$content_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "content", value);
    };
    v9ng.envmtImpl.location$hostname_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "hostname");
    };
    v9ng.envmtImpl.location$hostname_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "hostname", value);
    };
    v9ng.envmtImpl.location$protocol_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "protocol");
    };
    v9ng.envmtImpl.location$protocol_set = function (value) {
        return v9ng.toolsFunc.setProtoProp.call(this, "protocol", value);
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
    v9ng.envmtImpl.Navigator_prototype$getBattery = function () {
        let batteryManager = {};
        batteryManager = v9ng.toolsFunc.createProxyObj(batteryManager, BatteryManager, "batteryManager");
        let obj = {
            "then": function (callBack) {
                let _callBack = callBack;
                callBack = function () {
                    return _callBack(batteryManager);
                }
                v9ng.cache.promiseEvents.push(callBack);
            }
        }
        return obj;
    };
    v9ng.envmtImpl.Navigator_prototype$mimeTypes_get = function () {
        return v9ng.cache.mimeTypeArray;
    };
    v9ng.envmtImpl.Navigator_prototype$plugins_get = function () {
        return v9ng.cache.pluginArray;
    };
    v9ng.envmtImpl.Node_prototype$appendChild = function (tag) {
        // TODO: fix and set parentNode
        let collection = [];
        collection.push(tag);
        collection = v9ng.toolsFunc.createProxyObj(collection, HTMLCollection, "HTMLCollection");
        v9ng.toolsFunc.setProtoProp.call(this, "children", collection);
        return tag;
    };
    v9ng.envmtImpl.Node_prototype$parentNode_get = function () {
        return v9ng.toolsFunc.getProtoProp.call(this, "parentNode");
    };
    v9ng.envmtImpl.Node_prototype$removeChild = v9ng.toolsFunc.noopFunc; // TODO
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
        let buffer = {};
        buffer = v9ng.toolsFunc.createProxyObj(buffer, WebGLBuffer, "buffer");
        return buffer;
    };
    v9ng.envmtImpl.WebGLRenderingContext_prototype$createProgram = function () {
        let program = {};
        program = v9ng.toolsFunc.createProxyObj(program, WebGLProgram, "program");
        return program;
    };
    v9ng.envmtImpl.window$clearTimeout = function (timeoutId) {
        for (let i = 0; i < v9ng.cache.timeoutEvents.length; i++) {
            let event = v9ng.cache.timeoutEvents[i];
            if (event.timeoutId === timeoutId) {
                delete v9ng.cache.timeoutEvents[i];
            }
        }
    };
    v9ng.envmtImpl.window$self_get = function () {
        return window;
    };
    v9ng.envmtImpl.window$setTimeout = function () {
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
        v9ng.cache.timeFuncCursor += 1;
        let event = {
            "callback": func,
            "delay": delay,
            "args": args,
            "type": type,
            "timeoutId": v9ng.cache.timeFuncCursor
        }
        v9ng.cache.timeoutEvents.push(event);
        return v9ng.cache.timeFuncCursor;
    };
    v9ng.envmtImpl.window$top_get = function () {
        return window;
    };
    v9ng.envmtImpl.XMLHttpRequest_prototype$open = function (method, url) {
        return url;
    };
})();