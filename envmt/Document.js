(function () { // Document
    Document = function () {
    };
    v9ng.toolsFunc.ctorGuard(Document, "Document");
    Object.setPrototypeOf(Document.prototype, Node.prototype);
    v9ng.toolsFunc.defineProperty(Document.prototype, "implementation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "implementation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "URL", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "URL_get", arguments, "chrome://new-tab-page/");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "documentURI", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "documentURI_get", arguments, "chrome://new-tab-page/");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "compatMode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "compatMode_get", arguments, "CSS1Compat");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "characterSet", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "characterSet_get", arguments, "UTF-8");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "charset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "charset_get", arguments, "UTF-8");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "inputEncoding", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "inputEncoding_get", arguments, "UTF-8");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "contentType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "contentType_get", arguments, "text/html");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "doctype", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "doctype_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "documentElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "documentElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "xmlEncoding", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "xmlEncoding_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "xmlVersion", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "xmlVersion_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "xmlVersion_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "xmlStandalone", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "xmlStandalone_get", arguments, false);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "xmlStandalone_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "domain", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "domain_get", arguments, "new-tab-page");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "domain_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "referrer", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "referrer_get", arguments, "");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "cookie", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "cookie_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "cookie_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "lastModified", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "lastModified_get", arguments, "08/18/2023 16:35:18");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "readyState_get", arguments, "complete");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "title", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "title_get", arguments, "新标签页");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "title_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "dir", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "dir_get", arguments, "ltr");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "dir_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "body", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "body_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "body_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "head", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "head_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "images", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "images_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "embeds", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "embeds_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "plugins", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "plugins_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "links", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "links_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "forms", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "forms_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "scripts", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "scripts_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "currentScript", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "currentScript_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "defaultView", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "defaultView_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "designMode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "designMode_get", arguments, "off");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "designMode_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onreadystatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onreadystatechange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onreadystatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "anchors", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "anchors_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "applets", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "applets_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fgColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fgColor_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fgColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "linkColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "linkColor_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "linkColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "vlinkColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "vlinkColor_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "vlinkColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "alinkColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "alinkColor_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "alinkColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "bgColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "bgColor_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "bgColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "all", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "all_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "scrollingElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "scrollingElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerlockchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerlockchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerlockchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerlockerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerlockerror_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerlockerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "hidden", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "hidden_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "visibilityState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "visibilityState_get", arguments, "hidden");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "wasDiscarded", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "wasDiscarded_get", arguments, false);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "prerendering", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "prerendering_get", arguments, false);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "featurePolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "featurePolicy_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitVisibilityState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitVisibilityState_get", arguments, "hidden");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitHidden", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitHidden_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforecopy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforecopy_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforecopy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforecut", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforecut_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforecut_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforepaste", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforepaste_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforepaste_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onfreeze", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfreeze_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfreeze_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onprerenderingchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onprerenderingchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onprerenderingchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onresume", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onresume_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onresume_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onsearch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsearch_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsearch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onvisibilitychange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onvisibilitychange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onvisibilitychange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fullscreenEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreenEnabled_get", arguments, true);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreenEnabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fullscreen", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreen_get", arguments, false);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreen_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onfullscreenchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfullscreenchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfullscreenchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onfullscreenerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfullscreenerror_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfullscreenerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitIsFullScreen", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitIsFullScreen_get", arguments, false);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitCurrentFullScreenElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitFullscreenEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitFullscreenElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitfullscreenchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitfullscreenchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitfullscreenerror_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitfullscreenerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "rootElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "rootElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "pictureInPictureEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "pictureInPictureEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "pictureInPictureElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "pictureInPictureElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforexrselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforexrselect_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforexrselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onabort_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforeinput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforeinput_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforeinput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onblur", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onblur_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onblur_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncancel_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncanplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncanplay_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncanplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncanplaythrough", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncanplaythrough_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncanplaythrough_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onclick_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onclose", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onclose_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onclose_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncontextlost", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextlost_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextlost_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncontextmenu", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextmenu_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextmenu_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncontextrestored", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextrestored_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontextrestored_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncuechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncuechange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncuechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondblclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondblclick_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondblclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondrag", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondrag_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondrag_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondragend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondragenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragenter_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondragleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragleave_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondragover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragover_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondragstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondragstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondrop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondrop_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondrop_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ondurationchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondurationchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ondurationchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onemptied", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onemptied_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onemptied_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onended", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onended_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onended_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onerror_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onfocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfocus_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onfocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onformdata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onformdata_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onformdata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oninput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oninput_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oninput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oninvalid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oninvalid_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oninvalid_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onkeydown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeydown_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeydown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onkeypress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeypress_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeypress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onkeyup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeyup_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onkeyup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onload_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onloadeddata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadeddata_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadeddata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onloadedmetadata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadedmetadata_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadedmetadata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onloadstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onloadstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmousedown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousedown_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousedown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmouseenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseenter_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmouseleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseleave_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmousemove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousemove_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousemove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmouseout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseout_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmouseover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseover_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmouseup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseup_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmouseup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onmousewheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousewheel_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onmousewheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpause", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpause_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpause_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onplay_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onplaying", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onplaying_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onplaying_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onprogress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onprogress_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onprogress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onratechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onratechange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onratechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onreset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onreset_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onreset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onresize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onresize_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onresize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onscroll", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onscroll_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onscroll_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsecuritypolicyviolation_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsecuritypolicyviolation_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onseeked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onseeked_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onseeked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onseeking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onseeking_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onseeking_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselect_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onslotchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onslotchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onslotchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onstalled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onstalled_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onstalled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onsubmit", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsubmit_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsubmit_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onsuspend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsuspend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onsuspend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontimeupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontimeupdate_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontimeupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontoggle_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontoggle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onvolumechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onvolumechange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onvolumechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwaiting", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwaiting_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwaiting_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationiteration_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkitanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwebkittransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkittransitionend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwebkittransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onwheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwheel_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onwheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onauxclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onauxclick_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onauxclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ongotpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ongotpointercapture_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ongotpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onlostpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onlostpointercapture_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onlostpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerdown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerdown_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerdown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointermove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointermove_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointermove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerrawupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerrawupdate_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerrawupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerup_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointercancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointercancel_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointercancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerover_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerout_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerenter_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpointerleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerleave_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpointerleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onselectstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselectstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselectstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onselectionchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselectionchange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onselectionchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationiteration_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontransitionrun", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionrun_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionrun_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontransitionstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionstart_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "ontransitioncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitioncancel_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "ontransitioncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncopy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncopy_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncopy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncut", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncut_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncut_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onpaste", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpaste_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onpaste_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "children", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "children_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "firstElementChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "firstElementChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "lastElementChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "lastElementChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "childElementCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "childElementCount_get", arguments, 1);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "activeElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "activeElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "styleSheets", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "styleSheets_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "pointerLockElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "pointerLockElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fullscreenElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreenElement_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fullscreenElement_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "adoptedStyleSheets", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "adoptedStyleSheets_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "adoptedStyleSheets_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fonts", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fonts_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "adoptNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "adoptNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "append", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "captureEvents", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "captureEvents", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "caretRangeFromPoint", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "caretRangeFromPoint", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "clear", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "clear", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "close", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "close", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createAttributeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createAttributeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createCDATASection", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createCDATASection", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createComment", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createComment", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createDocumentFragment", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createDocumentFragment", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createElement", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createElement", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createElementNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createElementNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createEvent", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createExpression", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createExpression", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createNSResolver", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createNSResolver", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createNodeIterator", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createNodeIterator", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createProcessingInstruction", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createProcessingInstruction", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createRange", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createRange", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createTextNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createTextNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "createTreeWalker", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "createTreeWalker", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "elementFromPoint", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "elementFromPoint", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "elementsFromPoint", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "elementsFromPoint", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "evaluate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "evaluate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "execCommand", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "execCommand", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "exitFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "exitFullscreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "exitPictureInPicture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "exitPictureInPicture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "exitPointerLock", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "exitPointerLock", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getElementById", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getElementById", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getElementsByClassName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getElementsByClassName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getElementsByName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getElementsByName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getElementsByTagName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getElementsByTagName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getElementsByTagNameNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getElementsByTagNameNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getSelection", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getSelection", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "hasFocus", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "hasFocus", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "importNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "importNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "open", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "open", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "prepend", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "queryCommandEnabled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "queryCommandEnabled", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "queryCommandIndeterm", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "queryCommandIndeterm", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "queryCommandState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "queryCommandState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "queryCommandSupported", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "queryCommandSupported", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "queryCommandValue", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "queryCommandValue", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "querySelector", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "querySelector", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "querySelectorAll", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "querySelectorAll", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "releaseEvents", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "releaseEvents", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "replaceChildren", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "replaceChildren", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitCancelFullScreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitCancelFullScreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "webkitExitFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "webkitExitFullscreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "write", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "write", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "writeln", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "writeln", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "fragmentDirective", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "fragmentDirective_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforematch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforematch_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforematch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onbeforetoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforetoggle_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onbeforetoggle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "timeline", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "timeline_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontentvisibilityautostatechange_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "oncontentvisibilityautostatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "onscrollend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onscrollend_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "onscrollend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "getAnimations", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "getAnimations", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Document.prototype, "startViewTransition", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Document.prototype", "startViewTransition", arguments);
        },
    });
})();