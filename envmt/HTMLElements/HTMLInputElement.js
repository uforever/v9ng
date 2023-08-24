(function () { // HTMLInputElement
    HTMLInputElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLInputElement, "HTMLInputElement");
    Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "accept", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "accept_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "accept_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "alt", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "alt_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "alt_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "autocomplete", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "autocomplete_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "autocomplete_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultChecked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "defaultChecked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "defaultChecked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "checked", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "checked_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "checked_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "dirName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "dirName_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "dirName_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "disabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "disabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "disabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "form", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "form_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "files", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "files_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "files_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "formAction", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formAction_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formAction_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "formEnctype", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formEnctype_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formEnctype_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "formMethod", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formMethod_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formMethod_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "formNoValidate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formNoValidate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formNoValidate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "formTarget", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formTarget_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "formTarget_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "height_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "indeterminate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "indeterminate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "indeterminate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "list", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "list_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "max", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "max_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "max_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "maxLength", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "maxLength_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "maxLength_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "min", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "min_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "min_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "minLength", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "minLength_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "minLength_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "multiple", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "multiple_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "multiple_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "pattern", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "pattern_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "pattern_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "placeholder", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "placeholder_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "placeholder_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "readOnly", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "readOnly_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "readOnly_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "required", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "required_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "required_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "size", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "size_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "size_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "step", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "step_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "step_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "defaultValue_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "defaultValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "value", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "value_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "value_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsDate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "valueAsDate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "valueAsDate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsNumber", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "valueAsNumber_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "valueAsNumber_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "willValidate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "willValidate_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "validity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "validity_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "validationMessage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "validationMessage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "labels", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "labels_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionStart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionStart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionStart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionEnd", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionEnd_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionEnd_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionDirection", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionDirection_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "selectionDirection_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "align_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "useMap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "useMap_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "useMap_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitdirectory", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "webkitdirectory_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "webkitdirectory_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "incremental", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "incremental_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "incremental_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "checkValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "checkValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "reportValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "reportValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "select", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "select", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "setCustomValidity", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "setCustomValidity", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "setRangeText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "setRangeText", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "setSelectionRange", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "setSelectionRange", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "showPicker", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "showPicker", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepDown", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "stepDown", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepUp", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "stepUp", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitEntries", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "webkitEntries_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "popoverTargetElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "popoverTargetElement_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "popoverTargetElement_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLInputElement.prototype, "popoverTargetAction", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "popoverTargetAction_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLInputElement.prototype", "popoverTargetAction_set", arguments);
        },
    });
})();