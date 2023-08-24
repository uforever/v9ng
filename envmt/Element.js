(function () { // Element
    Element = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Element, "Element");
    Object.setPrototypeOf(Element.prototype, Node.prototype);
    v9ng.toolsFunc.defineProperty(Element.prototype, "namespaceURI", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "namespaceURI_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "prefix", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "prefix_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "localName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "localName_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "tagName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "tagName_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "id", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "id_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "id_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "className", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "className_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "className_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "classList", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "classList_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "classList_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "slot", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "slot_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "slot_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "attributes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "attributes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "shadowRoot", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "shadowRoot_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "part", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "part_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "part_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "assignedSlot", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "assignedSlot_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "innerHTML", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "innerHTML_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "innerHTML_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "outerHTML", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "outerHTML_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "outerHTML_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollTop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollTop_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollTop_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollLeft", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollLeft_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollLeft_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "clientTop", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "clientTop_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "clientLeft", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "clientLeft_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "clientWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "clientWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "clientHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "clientHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onbeforecopy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforecopy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforecopy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onbeforecut", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforecut_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforecut_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onbeforepaste", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforepaste_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onbeforepaste_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onsearch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onsearch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onsearch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "elementTiming", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "elementTiming_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "elementTiming_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onfullscreenchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onfullscreenchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onfullscreenchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onfullscreenerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onfullscreenerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onfullscreenerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onwebkitfullscreenchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onwebkitfullscreenchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onwebkitfullscreenerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "onwebkitfullscreenerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "role", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "role_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "role_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaAtomic", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaAtomic_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaAtomic_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaAutoComplete", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaAutoComplete_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaAutoComplete_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaBusy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBusy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBusy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaBrailleLabel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBrailleLabel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBrailleLabel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBrailleRoleDescription_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaBrailleRoleDescription_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaChecked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaChecked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaChecked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaColCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColCount_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColCount_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaColIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColIndex_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColIndex_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaColSpan", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColSpan_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaColSpan_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaCurrent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaCurrent_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaCurrent_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaDescription", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaDescription_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaDescription_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaDisabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaDisabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaDisabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaExpanded", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaExpanded_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaExpanded_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaHasPopup", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaHasPopup_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaHasPopup_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaHidden", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaHidden_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaHidden_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaInvalid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaInvalid_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaInvalid_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaKeyShortcuts", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaKeyShortcuts_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaKeyShortcuts_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaLabel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLabel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLabel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaLevel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLevel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLevel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaLive", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLive_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaLive_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaModal", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaModal_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaModal_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaMultiLine", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaMultiLine_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaMultiLine_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaMultiSelectable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaMultiSelectable_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaMultiSelectable_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaOrientation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaOrientation_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaOrientation_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaPlaceholder", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPlaceholder_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPlaceholder_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaPosInSet", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPosInSet_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPosInSet_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaPressed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPressed_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaPressed_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaReadOnly", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaReadOnly_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaReadOnly_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRelevant", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRelevant_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRelevant_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRequired", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRequired_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRequired_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRoleDescription", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRoleDescription_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRoleDescription_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRowCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowCount_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowCount_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRowIndex", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowIndex_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowIndex_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaRowSpan", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowSpan_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaRowSpan_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaSelected", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSelected_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSelected_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaSetSize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSetSize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSetSize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaSort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaSort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaValueMax", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueMax_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueMax_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaValueMin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueMin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueMin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaValueNow", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueNow_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueNow_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "ariaValueText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueText_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "ariaValueText_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "children", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "children_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "firstElementChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "firstElementChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "lastElementChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "lastElementChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "childElementCount", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "childElementCount_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "previousElementSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "previousElementSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "nextElementSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "nextElementSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "after", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "after", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "animate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "animate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "append", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "attachShadow", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "attachShadow", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "before", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "closest", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "closest", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "computedStyleMap", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "computedStyleMap", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAttributeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAttributeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAttributeNames", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAttributeNames", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAttributeNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAttributeNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAttributeNodeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAttributeNodeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getBoundingClientRect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getBoundingClientRect", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getClientRects", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getClientRects", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getElementsByClassName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getElementsByClassName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getElementsByTagName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getElementsByTagName", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getElementsByTagNameNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getElementsByTagNameNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getInnerHTML", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getInnerHTML", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "hasAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "hasAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "hasAttributeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "hasAttributeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "hasAttributes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "hasAttributes", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "hasPointerCapture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "hasPointerCapture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "insertAdjacentElement", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "insertAdjacentElement", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "insertAdjacentHTML", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "insertAdjacentHTML", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "insertAdjacentText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "insertAdjacentText", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "matches", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "matches", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "prepend", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "querySelector", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "querySelector", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "querySelectorAll", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "querySelectorAll", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "releasePointerCapture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "releasePointerCapture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "remove", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "removeAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "removeAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "removeAttributeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "removeAttributeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "removeAttributeNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "removeAttributeNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "replaceChildren", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "replaceChildren", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "replaceWith", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "replaceWith", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "requestFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "requestFullscreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "requestPointerLock", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "requestPointerLock", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scroll", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scroll", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollBy", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollBy", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollIntoView", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollIntoView", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollIntoViewIfNeeded", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "scrollTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "scrollTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setAttributeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setAttributeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setAttributeNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setAttributeNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setAttributeNodeNS", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setAttributeNodeNS", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setPointerCapture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setPointerCapture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "toggleAttribute", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "toggleAttribute", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "webkitMatchesSelector", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "webkitMatchesSelector", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullScreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "webkitRequestFullScreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "webkitRequestFullscreen", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "checkVisibility", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "checkVisibility", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "getAnimations", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "getAnimations", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Element.prototype, "setHTML", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Element.prototype", "setHTML", arguments);
        },
    });
})();