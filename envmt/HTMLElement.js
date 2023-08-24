(function () { // HTMLElement
    HTMLElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLElement, "HTMLElement");
    Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "title", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "title_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "title_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "lang", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "lang_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "lang_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "translate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "translate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "translate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "dir", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "dir_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "dir_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "hidden", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "hidden_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "hidden_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "accessKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "accessKey_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "accessKey_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "draggable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "draggable_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "draggable_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "spellcheck", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "spellcheck_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "spellcheck_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "autocapitalize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "autocapitalize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "autocapitalize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "contentEditable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "contentEditable_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "contentEditable_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "enterKeyHint", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "enterKeyHint_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "enterKeyHint_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "isContentEditable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "isContentEditable_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "inputMode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "inputMode_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "inputMode_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "virtualKeyboardPolicy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "virtualKeyboardPolicy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "offsetParent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "offsetParent_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "offsetTop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "offsetTop_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "offsetLeft", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "offsetLeft_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "offsetWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "offsetHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "offsetHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "innerText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "innerText_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "innerText_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "outerText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "outerText_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "outerText_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforexrselect_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforexrselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforeinput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforeinput_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforeinput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onblur", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onblur_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onblur_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncanplay_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncanplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncanplaythrough_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncanplaythrough_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onclose", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onclose_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onclose_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextlost", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextlost_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextlost_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextmenu", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextmenu_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextmenu_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextrestored", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextrestored_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontextrestored_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncuechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncuechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncuechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondblclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondblclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondblclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondrag", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondrag_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondrag_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondragend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondragenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondragleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondragover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondragstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondragstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondrop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondrop_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondrop_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ondurationchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondurationchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ondurationchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onemptied", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onemptied_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onemptied_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onended", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onended_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onended_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onfocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onfocus_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onfocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onformdata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onformdata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onformdata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oninput", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oninput_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oninput_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oninvalid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oninvalid_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oninvalid_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onkeydown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeydown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeydown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onkeypress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeypress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeypress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onkeyup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeyup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onkeyup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onloadeddata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadeddata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadeddata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadedmetadata_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadedmetadata_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onloadstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onloadstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmousedown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousedown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousedown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmousemove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousemove_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousemove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmouseup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onmousewheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousewheel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onmousewheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpause", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpause_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpause_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onplay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onplay_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onplay_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onplaying", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onplaying_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onplaying_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onprogress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onprogress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onprogress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onratechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onratechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onratechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onreset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onreset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onreset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onresize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onresize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onresize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onscroll", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onscroll_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onscroll_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsecuritypolicyviolation_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsecuritypolicyviolation_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onseeked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onseeked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onseeked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onseeking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onseeking_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onseeking_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onselect", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselect_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselect_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onslotchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onslotchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onslotchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onstalled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onstalled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onstalled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onsubmit", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsubmit_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsubmit_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onsuspend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsuspend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onsuspend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontimeupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontimeupdate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontimeupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontoggle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontoggle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onvolumechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onvolumechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onvolumechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwaiting", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwaiting_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwaiting_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationiteration_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkitanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkittransitionend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwebkittransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onwheel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwheel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onwheel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onauxclick", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onauxclick_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onauxclick_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ongotpointercapture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ongotpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onlostpointercapture_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onlostpointercapture_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerdown", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerdown_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerdown_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointermove", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointermove_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointermove_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerrawupdate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerrawupdate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointercancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointercancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointercancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerenter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerenter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerenter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerleave", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerleave_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpointerleave_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onselectstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselectstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselectstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onselectionchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselectionchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onselectionchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationiteration", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationiteration_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationiteration_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onanimationstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionrun", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionrun_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionrun_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitionend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitioncancel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "ontransitioncancel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncopy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncopy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncopy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncut", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncut_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncut_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onpaste", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpaste_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onpaste_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "dataset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "dataset_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "nonce", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "nonce_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "nonce_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "autofocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "autofocus_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "autofocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "tabIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "tabIndex_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "tabIndex_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "style", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "style_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "style_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "attributeStyleMap_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "attachInternals", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "attachInternals", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "blur", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "blur", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "click", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "click", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "focus", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "focus", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "inert", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "inert_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "inert_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontentvisibilityautostatechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "oncontentvisibilityautostatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onscrollend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onscrollend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onscrollend_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "popover", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "popover_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "popover_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforetoggle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforetoggle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforetoggle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforematch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforematch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "onbeforematch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "hidePopover", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "hidePopover", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "showPopover", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "showPopover", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLElement.prototype, "togglePopover", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLElement.prototype", "togglePopover", arguments);
        },
    });
})();