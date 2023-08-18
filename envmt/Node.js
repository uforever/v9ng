(function () { // Node
    Node = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Node, "Node");
    Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(Node, "ELEMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Node, "ATTRIBUTE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Node, "TEXT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Node, "CDATA_SECTION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5,
    });
    v9ng.toolsFunc.defineProperty(Node, "ENTITY_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6,
    });
    v9ng.toolsFunc.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7,
    });
    v9ng.toolsFunc.defineProperty(Node, "COMMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 8,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 11,
    });
    v9ng.toolsFunc.defineProperty(Node, "NOTATION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 12,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 8,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 16,
    });
    v9ng.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nodeType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeType_get", arguments, 9);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nodeName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeName_get", arguments, "#document");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "baseURI", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "baseURI_get", arguments, "chrome://new-tab-page/");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "isConnected", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "isConnected_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "ownerDocument_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "parentNode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "parentNode_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "parentElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "parentElement_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "childNodes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "childNodes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "firstChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "firstChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "lastChild", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "lastChild_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "previousSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "previousSibling_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nextSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nextSibling_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nodeValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeValue_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "textContent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "textContent_get", arguments, null);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "textContent_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ELEMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "TEXT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ENTITY_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "COMMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 8,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 11,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "NOTATION_NODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 12,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 8,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 16,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "appendChild", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "appendChild", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "cloneNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "cloneNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "compareDocumentPosition", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "compareDocumentPosition", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "contains", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "contains", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "getRootNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "getRootNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "hasChildNodes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "hasChildNodes", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "insertBefore", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "insertBefore", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "isDefaultNamespace", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "isDefaultNamespace", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "isEqualNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "isEqualNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "isSameNode", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "isSameNode", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "lookupNamespaceURI", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "lookupNamespaceURI", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "lookupPrefix", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "lookupPrefix", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "normalize", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "normalize", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "removeChild", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "removeChild", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "replaceChild", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "replaceChild", arguments);
        },
    });
})();