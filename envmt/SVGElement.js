(function () { // SVGElement
    SVGElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(SVGElement, "SVGElement");
    Object.setPrototypeOf(SVGElement.prototype, Element.prototype);
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "className", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "className_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ownerSVGElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ownerSVGElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "viewportElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "viewportElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onbeforexrselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforexrselect_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforexrselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onbeforeinput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforeinput_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforeinput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onblur", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onblur_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onblur_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncanplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncanplay_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncanplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncanplaythrough", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncanplaythrough_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncanplaythrough_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onclose", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onclose_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onclose_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncontextlost", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextlost_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextlost_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncontextmenu", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextmenu_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextmenu_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncontextrestored", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextrestored_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontextrestored_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncuechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncuechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncuechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondblclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondblclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondblclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondrag", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondrag_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondrag_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondragend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondragenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondragleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondragover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondragstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondragstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondrop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondrop_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondrop_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ondurationchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondurationchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ondurationchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onemptied", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onemptied_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onemptied_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onended", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onended_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onended_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onfocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onfocus_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onfocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onformdata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onformdata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onformdata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oninput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oninput_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oninput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oninvalid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oninvalid_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oninvalid_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onkeydown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeydown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeydown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onkeypress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeypress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeypress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onkeyup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeyup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onkeyup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onloadeddata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadeddata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadeddata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onloadedmetadata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadedmetadata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadedmetadata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onloadstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onloadstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmousedown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousedown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousedown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmouseenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmouseleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmousemove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousemove_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousemove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmouseout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmouseover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmouseup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmouseup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onmousewheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousewheel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onmousewheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpause", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpause_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpause_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onplay_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onplaying", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onplaying_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onplaying_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onprogress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onprogress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onprogress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onratechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onratechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onratechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onreset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onreset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onreset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onresize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onresize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onresize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onscroll", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onscroll_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onscroll_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onsecuritypolicyviolation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsecuritypolicyviolation_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsecuritypolicyviolation_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onseeked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onseeked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onseeked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onseeking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onseeking_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onseeking_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselect_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onslotchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onslotchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onslotchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onstalled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onstalled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onstalled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onsubmit", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsubmit_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsubmit_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onsuspend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsuspend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onsuspend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontimeupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontimeupdate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontimeupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontoggle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontoggle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onvolumechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onvolumechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onvolumechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwaiting", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwaiting_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwaiting_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationiteration_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkitanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwebkittransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkittransitionend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwebkittransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onwheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwheel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onwheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onauxclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onauxclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onauxclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ongotpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ongotpointercapture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ongotpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onlostpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onlostpointercapture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onlostpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerdown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerdown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerdown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointermove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointermove_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointermove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerrawupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerrawupdate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerrawupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointercancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointercancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointercancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpointerleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpointerleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onselectstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselectstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselectstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onselectionchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselectionchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onselectionchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationiteration_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionrun", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionrun_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionrun_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "ontransitioncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitioncancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "ontransitioncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncopy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncopy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncopy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncut", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncut_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncut_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onpaste", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpaste_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onpaste_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "dataset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "dataset_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "nonce", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "nonce_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "nonce_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "autofocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "autofocus_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "autofocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "tabIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "tabIndex_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "tabIndex_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "style", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "style_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "style_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "attributeStyleMap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "attributeStyleMap_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "blur", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "blur", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "focus", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "focus", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "oncontentvisibilityautostatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontentvisibilityautostatechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "oncontentvisibilityautostatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onscrollend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onscrollend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onscrollend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onbeforematch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforematch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforematch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(SVGElement.prototype, "onbeforetoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforetoggle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "SVGElement.prototype", "onbeforetoggle_set", arguments);
        },
    });
})();