
/* Init Framework */
(function () {
    v9ng = {
        "config": {},
        "cache": {},
        "toolsFunc": {},
        "envmtImpl": {},
    };
    v9ng.config.enableProxy = true;
    v9ng.config.printLog = true;
    v9ng.config.saveLog = false;
    v9ng.cache.nativeSymbol = Symbol('native');
    v9ng.cache.proxySymbol = Symbol('proxy');
    v9ng.cache.proxyImmune = [v9ng.cache.proxySymbol, "eval"];
})();

/* Tools Code */
(function () { /* Tools Function */
    (function () { // Base64
        v9ng.toolsFunc.base64 = {};
        v9ng.toolsFunc.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        v9ng.toolsFunc.base64.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        v9ng.toolsFunc.base64.base64encode = function base64encode(str) {
            var out, i, len;
            var c1, c2, c3;

            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                    out += v9ng.toolsFunc.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                    out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += v9ng.toolsFunc.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += v9ng.toolsFunc.base64.base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        };
        v9ng.toolsFunc.base64.base64decode = function base64decode(str) {
            var c1, c2, c3, c4;
            var i, len, out;

            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                /* c1 */
                do {
                    c1 = v9ng.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c1 == -1);
                if (c1 == -1)
                    break;

                /* c2 */
                do {
                    c2 = v9ng.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c2 == -1);
                if (c2 == -1)
                    break;

                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                /* c3 */
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if (c3 == 61)
                        return out;
                    c3 = v9ng.toolsFunc.base64.base64DecodeChars[c3];
                } while (i < len && c3 == -1);
                if (c3 == -1)
                    break;

                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                /* c4 */
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if (c4 == 61)
                        return out;
                    c4 = v9ng.toolsFunc.base64.base64DecodeChars[c4];
                } while (i < len && c4 == -1);
                if (c4 == -1)
                    break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        };
    })();

    (function () { // commToString
        v9ng.toolsFunc.commToString = function (data) {
            if (data === null) {
                return "null";
            }

            const dataType = typeof data;
            if (dataType === 'object' && data instanceof Object) {
                if (Array.isArray(data)) {
                    let result = "[";
                    for (const element of data) {
                        result += v9ng.toolsFunc.commToString(element);
                        result += ",";
                    }
                    result += "]";
                    return result;
                } else if (Object.prototype.toString.call(data) === '[object Arguments]') {
                    let result = [];
                    for (let i = 0; i < data.length; i++) {
                        result.push(v9ng.toolsFunc.commToString(data[i]));
                    }
                    return result.join(' ');
                } else {
                    const propKeys = Reflect.ownKeys(data);
                    let result = "{";
                    for (const prop of propKeys) {
                        result += `${v9ng.toolsFunc.commToString(prop)}:${v9ng.toolsFunc.commToString(data[prop])},`;
                    }
                    result += "}";
                    return result;
                }
            }

            switch (dataType) {
                case 'string':
                    return `"${data}"`;

                case 'function':
                    return `\`${data.toString()}\``;

                case 'undefined':
                    return "undefined";

                default:
                    try {
                        return data.toString();
                    } catch (e) {
                        return "***UNKNOWN***";
                    }
            }
        };
    })();

    (function () { // noopFunc
        v9ng.toolsFunc.noopFunc = function () { };
    })();

    (function () { // objProxy
        v9ng.toolsFunc.objProxy = function (obj, objName) {
            if (!v9ng.config.enableProxy) {
                return obj;
            }

            if (v9ng.cache.proxySymbol in obj) {
                return obj[v9ng.cache.proxySymbol];
            }

            const handler = {
                get: function (target, prop, reciver) {
                    let result = Reflect.get(target, prop, reciver);
                    if (v9ng.cache.proxyImmune.indexOf(prop) !== -1) {
                        return result;
                    }
                    try {
                        if (result instanceof Object) {
                            console.log('\x1b[32m%s\x1b[0m', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(result)}`);
                            result = v9ng.toolsFunc.objProxy(result, `${objName}.${prop.toString()}`);
                        } else {
                            console.log('\x1b[32m%s\x1b[0m', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${result}\``);
                        }
                    } catch (e) {
                        console.log('\x1b[31m%s\x1b[0m', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return result;
                },
                set: function (target, prop, value, reciver) {
                    try {
                        if (value instanceof Object) {
                            console.log('\x1b[33m%s\x1b[0m', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(value)}`);
                            // TODO: detailed value
                        } else {
                            console.log('\x1b[33m%s\x1b[0m', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${value}\``);
                        }
                    } catch (e) {
                        console.log('\x1b[31m%s\x1b[0m', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return Reflect.set(target, prop, value, reciver);
                },
                getOwnPropertyDescriptor: function (target, prop) {
                    let result = Reflect.getOwnPropertyDescriptor(target, prop);
                    try {
                        if (prop !== 'constructor') {
                            console.log('\x1b[35m%s\x1b[0m', `[GET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(result)}`);
                        }
                        // optional
                        // if (typeof result !== "undefined") {
                        //     result = v9ng.toolsFunc.objProxy(result, `${objName}.${prop.toString()}.PropertyDescriptor`);
                        // }
                    } catch (e) {
                        console.log('\x1b[31m%s\x1b[0m', `[GET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return result;
                },
                defineProperty: function (target, prop, descriptor) {
                    try {
                        console.log('\x1b[35m%s\x1b[0m', `[SET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${descriptor.value}\``);
                    } catch (e) {
                        console.log('\x1b[31m%s\x1b[0m', `[SET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return Reflect.defineProperty(target, prop, descriptor);
                },
                apply: function (target, thisArg, args) {
                    let result = Reflect.apply(target, thisArg, args);
                    try {
                        // TODO: add args log
                        if (result instanceof Object) {
                            console.log('\x1b[34m%s\x1b[0m', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT TYPE]: ${Object.prototype.toString.call(result)}`);
                        } else if (typeof result === 'symbol') {
                            console.log('\x1b[34m%s\x1b[0m', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT]: ${result.toString()}`);
                        } else {
                            console.log('\x1b[34m%s\x1b[0m', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT]: ${result}`);
                        }
                    } catch (e) {
                        console.log('\x1b[31m%s\x1b[0m', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[ERROR]: ${e.message}`);
                    }
                    return result;
                },
                construct: function (target, args, newTarget) {
                    let result = Reflect.construct(target, args, newTarget);
                    console.log(`[CONSTRUCTOR EXEC]: \`${objName}\`
[PROTO TYPE]: ${Object.prototype.toString.call(result)}`);
                    return result;
                },
                deleteProperty: function (target, prop) {
                    let result = Reflect.deleteProperty(target, prop);
                    console.log(`[DELETE PROP]: \`${objName}[${prop.toString()}]\`
[RESULT]: \`${result}\``);
                    return result;
                },
                has: function (target, prop) {
                    let result = Reflect.has(target, prop);
                    if (prop !== v9ng.cache.proxySymbol) {
                        console.log(`[PROP EXIST]: \`${objName}[${prop.toString()}]\`
[RESULT]: \`${result}\``);
                    }
                    return result;
                },
                ownKeys: function (target) {
                    let result = Reflect.ownKeys(target);
                    const keys = [];
                    result.forEach(key => {
                        keys.push(key.toString());
                    });
                    console.log(`[GET KEYS]: \`${objName}\`
[RESULT]: \`[${keys}]\``);
                    return result;
                },
                getPrototypeOf: function (target) {
                    let result = Reflect.getPrototypeOf(target);
                    console.log(`[GET PROTO]: \`${objName}\`
[RESULT]: \`${result}\``);
                    return result;
                },
                setPrototypeOf: function (target, proto) {
                    let result = Reflect.setPrototypeOf(target, proto);
                    console.log(`[SET PROTO]: \`${objName}\`
[TYPE]: ${Object.prototype.toString.call(proto)}`);
                    return result;
                },
                preventExtensions: function (target) {
                    let result = Reflect.preventExtensions(target);
                    console.log(`[PREVENT EXTENSIONS]: \`${objName}\`
[RESULT]: \`${result}\``);
                    return result;
                },
                isExtensible: function (target) {
                    let result = Reflect.isExtensible(target);
                    console.log(`[GET EXTENSIBLE]: \`${objName}\`
[RESULT]: \`${result}\``);
                    return result;
                },
            };

            const proxyObj = new Proxy(obj, handler);
            Object.defineProperty(obj, v9ng.cache.proxySymbol, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: proxyObj,
            });
            return proxyObj;
        };
    })();

    (function () { // funcNaturalize
        const originToString = Function.prototype.toString;
        const targetToString = function () {
            return typeof this === 'function' && this[v9ng.cache.nativeSymbol] || originToString.call(this);
        }
        function setProp(func, key, value) {
            Object.defineProperty(func, key, {
                writable: true,
                configurable: true,
                enumerable: false,
                value: value,
            })
        }
        delete Function.prototype.toString;
        setProp(Function.prototype, "toString", targetToString);
        setProp(Function.prototype.toString, v9ng.cache.nativeSymbol, "function toString() { [native code] }");
        v9ng.toolsFunc.funcNaturalize = function (obj, objName) {
            setProp(obj, v9ng.cache.nativeSymbol, `function ${objName || obj.name || ''}() { [native code] }`);
        }
    })();

    (function () { // funcRename
        v9ng.toolsFunc.funcRename = function (func, funcName) {
            Object.defineProperty(func, "name", {
                writable: false,
                configurable: true,
                enumerable: false,
                value: funcName,
            });
        };
    })();

    (function () { // funcGuard
        v9ng.toolsFunc.funcGuard = function (func, funcName) {
            v9ng.toolsFunc.funcNaturalize(func, funcName);
            v9ng.toolsFunc.funcRename(func, funcName);
        };
    })();

    (function () { // protoRename
        v9ng.toolsFunc.protoRename = function (ctor, ctorName) {
            Object.defineProperty(ctor.prototype, Symbol.toStringTag, {
                configurable: true,
                enumerable: false,
                value: ctorName,
                writable: false,
            });
        };
    })();

    (function () { // ctorGuard
        v9ng.toolsFunc.ctorGuard = function (obj, objName) {
            v9ng.toolsFunc.funcNaturalize(obj, objName);
            v9ng.toolsFunc.protoRename(obj, objName);
        };
    })();

    (function () { // throwError
        v9ng.toolsFunc.throwError = function (name, message) {
            let e = new Error();
            e.name = name;
            e.message = message;
            e.stack = `${name}: ${message}
    at snippet://`;
            throw e;
        };
    })();

    (function () { // defineProperty
        v9ng.toolsFunc.defineProperty = function (obj, prop, originDescriptor) {
            let targetDescriptor = {};
            targetDescriptor.configurable = v9ng.config.proxy || originDescriptor.configurable;
            targetDescriptor.enumerable = originDescriptor.enumerable;
            if (Object.hasOwn(originDescriptor, "writable")) {
                targetDescriptor.writable = v9ng.config.proxy || originDescriptor.writable;
            }
            if (Object.hasOwn(originDescriptor, "value")) {
                let value = originDescriptor.value;
                if (typeof value === 'function') {
                    v9ng.toolsFunc.funcGuard(value, prop);
                }
                targetDescriptor.value = value;
            }
            if (Object.hasOwn(originDescriptor, "get")) {
                let get = originDescriptor.get;
                if (typeof get === 'function') {
                    v9ng.toolsFunc.funcGuard(get, `get ${prop}`);
                }
                targetDescriptor.get = get;
            }
            if (Object.hasOwn(originDescriptor, "set")) {
                let set = originDescriptor.set;
                if (typeof set === 'function') {
                    v9ng.toolsFunc.funcGuard(set, `set ${prop}`);
                }
                targetDescriptor.set = set;
            }
            Object.defineProperty(obj, prop, targetDescriptor);
        };
    })();

    (function () { // funcDispatch
        v9ng.toolsFunc.funcDispatch = function (self, objName, funcName, args, defaultRet) {
            if (Object.getOwnPropertyDescriptor(self, "constructor") !== undefined) {
                return v9ng.toolsFunc.throwError('TypeError', 'Illegal invocation');
            }

            const totalName = `${objName}\$${funcName}`.replace('.', '_');
            try {
                return v9ng.envmtImpl[totalName].apply(self, args);
            } catch (e) {
                if (defaultRet === undefined) {
                    console.log('\x1b[31m%s\x1b[0m', `[FUNC DISPATCH]: \`${totalName}\`
[ERROR]: ${e.message}`);
                }
                return defaultRet;
            }
        };
    })();

    (function () { // funcHook
        v9ng.toolsFunc.funcHook = function (originFunc, funcInfo, isDebug, onEnter, onLeave, isExec) {
            if (typeof originFunc !== 'function') {
                return originFunc;
            }
            if (funcInfo === undefined) {
                funcInfo = {};
                funcInfo.objName = "globalThis";
                funcInfo.funcName = originFunc.name || '';
            }
            if (isDebug === undefined) {
                isDebug = false;
            }
            if (!onEnter) {
                onEnter = function (obj) {
                    console.log('\x1b[34m%s\x1b[0m', `[FUNC START]: \`${funcInfo.objName}\`->\`${funcInfo.funcName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(obj.args)}\``);
                }
            }
            if (!onLeave) {
                onLeave = function (obj) {
                    console.log('\x1b[34m%s\x1b[0m', `[FUNC END]: \`${funcInfo.objName}\`->\`${funcInfo.funcName}\`
[RETURN]: \`${v9ng.toolsFunc.commToString(obj.result)}\``);
                }
            }
            if (isExec === undefined) {
                isExec = true;
            }

            let targetFunc = function () {
                if (isDebug) {
                    debugger;
                }
                let obj = {};
                obj.args = arguments;
                onEnter.call(this, obj);
                let result;
                if (isExec) {
                    result = originFunc.apply(this, obj.args);
                }
                obj.result = result;
                onLeave.call(this, obj);
                return obj.result;
            }
            v9ng.toolsFunc.funcNaturalize(targetFunc, funcInfo.funcName);
            v9ng.toolsFunc.funcRename(targetFunc, funcInfo.funcName)
            return targetFunc;
        };
    })();
})();
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

/* VM Logs Code */
(function () {
    v9ng.toolsFunc.saveLog = function (args) {
        fs.appendFileSync("./output/demoProj.log", `
${v9ng.toolsFunc.commToString(args)}`);
    };
})();

/* Environment Code */
(function () {
(function () { // EventTarget
    EventTarget = function () {
    };
    v9ng.toolsFunc.ctorGuard(EventTarget, "EventTarget");
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "addEventListener", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "addEventListener", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "dispatchEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "dispatchEvent", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(EventTarget.prototype, "removeEventListener", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "EventTarget.prototype", "removeEventListener", arguments);
        },
    });
})();
(function () { // WindowProperties
    WindowProperties = function () {
    };
    v9ng.toolsFunc.ctorGuard(WindowProperties, "WindowProperties");
    delete WindowProperties.prototype.constructor;
    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
})();
(function () { // Window
    Window = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Window, "Window");
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
    v9ng.toolsFunc.defineProperty(Window, "TEMPORARY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Window, "PERSISTENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
})();
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
(function () { // HTMLDocument
    HTMLDocument = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLDocument, "HTMLDocument");
    Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
})();
(function () { // document
    document = {};
    Object.setPrototypeOf(document, HTMLDocument.prototype);
    v9ng.toolsFunc.defineProperty(document, "location", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "document", "location_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "document", "location_set", arguments);
        },
    });
})();
(function () { // Storage
    Storage = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Storage, "Storage");
    v9ng.toolsFunc.defineProperty(Storage.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "clear", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "clear", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "getItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "getItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "key", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "key", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "removeItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "removeItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Storage.prototype, "setItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Storage.prototype", "setItem", arguments);
        },
    });
})();
(function () { // localStorage
    localStorage = {};
    Object.setPrototypeOf(localStorage, Storage.prototype);
})();
(function () { // Navigator
    Navigator = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Navigator, "Navigator");
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vendorSub", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vendorSub_get", arguments, "");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "productSub", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "productSub_get", arguments, "20030107");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vendor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vendor_get", arguments, "Google Inc.");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "maxTouchPoints", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "maxTouchPoints_get", arguments, 0);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "scheduling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "scheduling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userActivation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userActivation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "doNotTrack", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "doNotTrack_get", arguments, null);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "geolocation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "geolocation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "connection", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "connection_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "plugins", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "plugins_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mimeTypes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mimeTypes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "pdfViewerEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitTemporaryStorage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitPersistentStorage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "hardwareConcurrency", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "hardwareConcurrency_get", arguments, 8);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "cookieEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "cookieEnabled_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appCodeName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appCodeName_get", arguments, "Mozilla");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appName_get", arguments, "Netscape");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "appVersion", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "appVersion_get", arguments, "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "platform", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "platform_get", arguments, "Win32");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "product", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "product_get", arguments, "Gecko");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userAgent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userAgent_get", arguments, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "language", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "language_get", arguments, "zh-CN");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "languages", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "languages_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "onLine", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "onLine_get", arguments, true);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webdriver_get", arguments, false);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getGamepads", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getGamepads", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "javaEnabled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "javaEnabled", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "sendBeacon", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "sendBeacon", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "vibrate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "vibrate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "bluetooth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "bluetooth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "clipboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "clipboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "credentials", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "credentials_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "keyboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "keyboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "managed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "managed_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaDevices", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaDevices_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "storage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "storage_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "serviceWorker", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "serviceWorker_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "virtualKeyboard", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "virtualKeyboard_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "wakeLock", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "wakeLock_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "deviceMemory", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "deviceMemory_get", arguments, 8);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "ink", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "ink_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "hid", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "hid_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "locks", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "locks_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaCapabilities", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaCapabilities_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "mediaSession", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "mediaSession_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "permissions", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "permissions_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "presentation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "presentation_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "serial", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "serial_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "gpu", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "gpu_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "usb", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "usb_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "windowControlsOverlay", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "windowControlsOverlay_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "xr", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "xr_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "userAgentData", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "userAgentData_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "canShare", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "canShare", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "share", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "share", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "clearAppBadge", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "clearAppBadge", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getBattery", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getBattery", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getUserMedia", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getUserMedia", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "requestMIDIAccess", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "requestMIDIAccess", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "requestMediaKeySystemAccess", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "setAppBadge", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "setAppBadge", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "webkitGetUserMedia", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "webkitGetUserMedia", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "getInstalledRelatedApps", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "getInstalledRelatedApps", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "registerProtocolHandler", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "registerProtocolHandler", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Navigator.prototype, "unregisterProtocolHandler", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Navigator.prototype", "unregisterProtocolHandler", arguments);
        },
    });
})();
(function () { // navigator
    navigator = {};
    Object.setPrototypeOf(navigator, Navigator.prototype);
})();
(function () { // Location
    Location = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Location, "Location");
})();
(function () { // location
    location = {};
    Object.setPrototypeOf(location, Location.prototype);
    v9ng.toolsFunc.defineProperty(location, "valueOf", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "valueOf", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "ancestorOrigins", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "ancestorOrigins_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(location, "href", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_get", arguments, "chrome://new-tab-page/");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "origin", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "origin_get", arguments, "chrome://new-tab-page");
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(location, "protocol", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_get", arguments, "chrome:");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "host", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_get", arguments, "new-tab-page");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hostname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_get", arguments, "new-tab-page");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "port", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "pathname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_get", arguments, "/");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "search", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hash", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hash_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hash_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "assign", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "assign", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "reload", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "reload", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "replace", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "replace", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "toString", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "toString", arguments);
        },
    });
})();
(function () { // window
    delete global;
    delete Buffer;
    delete WindowProperties;
    window = globalThis;
    Object.setPrototypeOf(window, Window.prototype);
    v9ng.toolsFunc.defineProperty(window, "atob", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (str) {
            return v9ng.toolsFunc.base64.base64decode(str);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "btoa", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (str) {
            return v9ng.toolsFunc.base64.base64encode(str);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "name_get", arguments, "");
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "location", {
        configurable: false,
    });
    v9ng.toolsFunc.defineProperty(window, "top", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "top_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(window, "self", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "self_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "self_set", arguments);
        },
    });
})();
})();

/* Global Plugin */
(function () {
    (function () { // Save Log
        if (v9ng.config.saveLog) {
            const onEnterForLog = function (obj) {
                try {
                    v9ng.toolsFunc.saveLog(obj.args);
                } catch (e) {
                    debugger;
                }
            };
            console.log = v9ng.toolsFunc.funcHook(
                console.log,
                undefined,
                false,
                onEnterForLog,
                v9ng.toolsFunc.noopFunc,
                v9ng.config.printLog
            );
        }
    })();
})();
/* Custom Code For Project */
(function () {
    const onLeaveForTime = function (obj) {
        obj.result = 1692273852950;
    };

    const onLeaveForRandom = function (obj) {
        obj.result = 0.3141592653589793;
    };

    Date.now = v9ng.toolsFunc.funcHook(Date.now, undefined, false, v9ng.toolsFunc.noopFunc, onLeaveForTime);
    Date.prototype.getTime = v9ng.toolsFunc.funcHook(Date.prototype.getTime, undefined, false, v9ng.toolsFunc.noopFunc, onLeaveForTime);
    Math.random = v9ng.toolsFunc.funcHook(Math.random, undefined, false, v9ng.toolsFunc.noopFunc, onLeaveForRandom);
})();
/* Proxy Objects */
(function () {
    window = v9ng.toolsFunc.objProxy(window, "window");
    document = v9ng.toolsFunc.objProxy(document, "document");
    location = v9ng.toolsFunc.objProxy(location, "location");
})();
console.log('\x1b[31m%s\x1b[0m', window === top);
console.log('\x1b[31m%s\x1b[0m', self === top);
console.log('\x1b[31m%s\x1b[0m', window.self === top);
console.log('\x1b[31m%s\x1b[0m', top.window === top);
console.log('\x1b[31m%s\x1b[0m', top.window.self.top === self.top.window);

!(function(_0x499145,_0x129c44){function _0x5e8408(_0x5af2bb,_0xe9c4c6,_0x24195e,_0x355044,_0x31c24d){return _0x5595(_0x355044-0x1cb,_0x24195e);}var _0x200725=_0x499145();function _0x57c075(_0x4511d9,_0x19aa02,_0x4d2b92,_0x4901cb,_0x8f76b2){return _0x5595(_0x4d2b92- -0xbb,_0x4901cb);}function _0x1f0bdd(_0x5b7e5c,_0x499281,_0x14e3fa,_0x4fa202,_0xb4c6d5){return _0x5595(_0x5b7e5c- -0x79,_0x14e3fa);}function _0x4f2dd1(_0x9ae254,_0x538260,_0x4c0e29,_0x187984,_0x58eed0){return _0x5595(_0x4c0e29-0x1d6,_0x9ae254);}function _0x28add5(_0xdbbc62,_0x1b7b4a,_0x433417,_0x54b72c,_0x448d7b){return _0x5595(_0x54b72c-0xe7,_0x1b7b4a);}while(!![]){try{var _0x44e87e=parseInt(_0x57c075(-0x26,-0x4c,0x27,'osc1',0x7c))/(-0x145e+0x219c+0x1*-0xd3d)*(parseInt(_0x57c075(0x6,-0x93,-0x3c,'jd5b',-0x53))/(-0x56*0x56+0x1e9d+-0x1*0x1b7))+-parseInt(_0x57c075(-0x66,0x72,0x4,'F@Wa',0x6c))/(0x626+-0x19f4*-0x1+-0x2017)*(-parseInt(_0x5e8408(0x35d,0x31f,'l2G8',0x2f5,0x2eb))/(0x1f22+0x5c5+0x13*-0x1f1))+parseInt(_0x4f2dd1('iDNV',0x31e,0x333,0x395,0x2f0))/(-0xe99+0x1d*0xe5+0xd*-0xdf)+parseInt(_0x28add5(0x1f9,'I5Hz',0x241,0x1fb,0x257))/(0x356+0x2*-0x51c+-0x374*-0x2)*(parseInt(_0x28add5(0x11f,'5nL3',0x1ab,0x16e,0x110))/(0x3*0xad+-0x5*0xe5+0x3*0xd3))+-parseInt(_0x5e8408(0x2f9,0x2a2,'XDs6',0x2d7,0x2af))/(-0x3*-0xcc1+0x1a14+-0x404f*0x1)+parseInt(_0x57c075(-0x4d,-0x85,-0x30,'osc1',0xb))/(0x23fc+0x1a9d+0x38*-0x11e)+-parseInt(_0x5e8408(0x358,0x2d3,'Upf%',0x312,0x34d))/(0x17c+-0x105*-0x25+0x25*-0x10f);if(_0x44e87e===_0x129c44)break;else _0x200725['push'](_0x200725['shift']());}catch(_0xc51be7){_0x200725['push'](_0x200725['shift']());}}}(_0x33af,-0x28*-0x3470+-0xb8d29+0xcb1*0xba),!(function(){function _0x292cd0(_0x188a93,_0xf57741,_0x3af290,_0x52f291,_0x29d11c){return _0x5595(_0xf57741-0x2fe,_0x188a93);}var _0x5aad28={'Tpfhr':function(_0x5b887f,_0x25dec4){return _0x5b887f(_0x25dec4);},'ydXrx':_0x292cd0('eEzp',0x40d,0x44c,0x3e3,0x3f8)+_0x2d051c(-0x1d7,-0x2ae,'Xdza',-0x241,-0x269),'gGsvH':function(_0x237f7a,_0x7a9cdc){return _0x237f7a===_0x7a9cdc;},'kxlUq':_0x180661(-0x1b,-0xb8,'#U#y',-0xb5,-0x61)+_0x180661(-0x19,-0xba,'eEzp',-0xc6,-0x6b)+'9f','qkKeS':_0x180661(0x1c,-0x22,'eEzp',0x41,-0x28)+_0x2d051c(-0x20a,-0x1c9,'W1Q1',-0x234,-0x268)+'4=','RPdqN':_0x2d051c(-0x14e,-0x1b2,'5nL3',-0x1ae,-0x145)+_0x180661(-0x8f,0x3d,'*S9z',-0x85,-0x1d)+'Bl','CDhGb':function(_0x239567,_0x32b0c3){return _0x239567==_0x32b0c3;},'xtwKH':_0x2d051c(-0x1dd,-0x19d,'[QWB',-0x209,-0x223)+_0x2d051c(-0x26d,-0x20e,'MUAu',-0x20d,-0x270),'gxlcY':_0x180661(-0xa7,-0x67,'oyYO',-0xb0,-0x40),'RWBUO':_0x565472(-0xb9,-0xa0,-0x71,-0xe4,'I5Hz'),'fTWDM':function(_0x51048f,_0x3702bc){return _0x51048f!==_0x3702bc;},'cyzZu':_0x565472(-0x10c,-0x130,-0x113,-0xc9,'6LF^'),'gmcXe':_0x180661(-0x2d,-0xb,'F@Wa',0x69,0x38),'TFOdI':_0x2d051c(-0x225,-0x16d,'Oq]1',-0x1ca,-0x225),'oIXzh':_0x565472(-0xb3,-0x91,-0x6f,-0xad,']u2q'),'BeDKP':function(_0x2c7ccf,_0x48dc79){return _0x2c7ccf===_0x48dc79;},'uDpSl':_0x26d6bb('W1Q1',-0xcf,-0xc5,-0x90,-0x11f),'JzLnD':_0x292cd0('jd5b',0x38b,0x319,0x3fa,0x39c),'NKawG':_0x565472(-0x134,-0x152,-0x152,-0xec,'Z#7R'),'TylVo':_0x2d051c(-0x240,-0x208,'eLE&',-0x254,-0x20a)+_0x292cd0('#U#y',0x377,0x322,0x38d,0x35d)+'+$','ALtos':function(_0x555a6a,_0x197631){return _0x555a6a==_0x197631;},'kmyWS':function(_0x32157c,_0x3d16cb){return _0x32157c(_0x3d16cb);},'lYywY':function(_0x2590fd,_0x5f3271,_0x1bf81e){return _0x2590fd(_0x5f3271,_0x1bf81e);},'KiMMJ':function(_0x16f107){return _0x16f107();},'JhePu':function(_0x30732c,_0x356613){return _0x30732c===_0x356613;},'cbhXA':_0x2d051c(-0x24f,-0x22b,'9[yf',-0x211,-0x1f4),'Qgymr':function(_0x5db7de,_0x322a3a){return _0x5db7de(_0x322a3a);},'zctVv':_0x180661(-0x69,0x2a,'nBgy',-0x56,-0x49)+_0x292cd0('TJeu',0x42a,0x460,0x464,0x423)+'Y=','WDnHx':function(_0x5e65a6,_0x160e7a){return _0x5e65a6===_0x160e7a;},'vaazE':_0x26d6bb('PP(U',-0x146,-0x1b3,-0xd2,-0x153)+_0x26d6bb('MUAu',-0xeb,-0xdd,-0xcf,-0x102)+_0x292cd0(')#TO',0x38d,0x3cc,0x3df,0x362)+_0x565472(-0xc6,-0x101,-0x101,-0xf7,'9[yf')+_0x292cd0('YpYO',0x455,0x46d,0x44e,0x449)+_0x292cd0('*S9z',0x439,0x45a,0x499,0x463)+_0x292cd0('Oq]1',0x3a7,0x3eb,0x41a,0x415)+_0x565472(-0xfb,-0xf6,-0xc9,-0x11a,'XDs6')+_0x2d051c(-0x1ce,-0x218,'p0Ua',-0x239,-0x1d8)+_0x292cd0('VFA0',0x3df,0x3c8,0x36e,0x413)+'==','BvNco':function(_0x4f47f4,_0x4f989a){return _0x4f47f4!==_0x4f989a;},'oBmAg':_0x180661(-0x45,0x4,'PP(U',-0x19,0xc),'jOUjG':_0x292cd0('VFA0',0x42d,0x486,0x452,0x470),'mfWPb':function(_0x454084,_0x56c20a){return _0x454084===_0x56c20a;},'jfqKy':function(_0x2cea1e,_0x15ecd4){return _0x2cea1e(_0x15ecd4);},'UGrMr':function(_0xd002ae,_0x1dbc4f){return _0xd002ae===_0x1dbc4f;},'xvxCC':_0x180661(-0x4a,0x37,'7QQq',-0x95,-0x29),'GkNto':_0x26d6bb('TJeu',-0x144,-0x176,-0x188,-0x10b),'MgXbU':function(_0x8011e2,_0x16b22f){return _0x8011e2===_0x16b22f;},'uIwot':_0x26d6bb('5nL3',-0x13c,-0xdc,-0xe8,-0xc7),'oNLQy':function(_0x58da57,_0x5d009a){return _0x58da57(_0x5d009a);},'EoKCJ':_0x292cd0('eVp8',0x406,0x3b6,0x3d6,0x439),'mDdyk':_0x26d6bb('#U#y',-0xde,-0xf6,-0x126,-0xc1),'AaxWv':function(_0xba5415,_0x17a94f){return _0xba5415(_0x17a94f);}};function _0x565472(_0x17aee8,_0x1701bf,_0x18c5d7,_0x25399d,_0x2a01dc){return _0x5595(_0x17aee8- -0x1ca,_0x2a01dc);}var _0x3dc722=(function(){function _0x4c1069(_0x3e44df,_0x3a4a60,_0x16509d,_0x38aa2b,_0x4fef42){return _0x180661(_0x3e44df-0x194,_0x3a4a60-0xbb,_0x3a4a60,_0x38aa2b-0x19e,_0x4fef42- -0x1d7);}function _0x5a0e23(_0x3d6699,_0x17537,_0x4c3b5f,_0x42341e,_0x4fb0e4){return _0x292cd0(_0x17537,_0x42341e- -0x1fe,_0x4c3b5f-0xc7,_0x42341e-0x150,_0x4fb0e4-0xc8);}var _0x4a0166={'MREfx':function(_0xadf9be,_0x5b5a41){function _0x2feaae(_0x441a60,_0x45fc61,_0x422df7,_0x40bf2e,_0x3cb097){return _0x5595(_0x441a60-0x61,_0x40bf2e);}return _0x5aad28[_0x2feaae(0xe1,0xfb,0x7b,'^y!y',0x133)](_0xadf9be,_0x5b5a41);},'lhkKP':_0x5aad28[_0x5b7dfe(-0xdf,-0x13c,-0x186,'l2G8',-0x17f)]};function _0x4a5cb2(_0x275d14,_0x59702f,_0xc377d6,_0x1a7533,_0x2d124f){return _0x292cd0(_0x275d14,_0x2d124f- -0x1ab,_0xc377d6-0x7b,_0x1a7533-0xe7,_0x2d124f-0x33);}function _0x5b7dfe(_0x5165c9,_0x4d2120,_0xf64981,_0x558c41,_0x3a080e){return _0x292cd0(_0x558c41,_0x4d2120- -0x538,_0xf64981-0xb6,_0x558c41-0x1da,_0x3a080e-0x182);}function _0x3aa916(_0x1a8e7f,_0x5c163b,_0x4fef61,_0xcc96e4,_0x133d25){return _0x292cd0(_0x1a8e7f,_0xcc96e4- -0x352,_0x4fef61-0xeb,_0xcc96e4-0xa9,_0x133d25-0x140);}if(_0x5aad28[_0x5b7dfe(-0x169,-0x190,-0x145,'I5Hz',-0x183)](_0x5aad28[_0x5b7dfe(-0xad,-0xed,-0x13d,'B63H',-0x9e)],_0x5aad28[_0x5b7dfe(-0x1bc,-0x1a5,-0x1ec,'W1Q1',-0x1e6)])){var _0x1192af=!![];return function(_0x488e32,_0x8f7fd4){function _0x5b019(_0x47d138,_0x1b6f57,_0x18aae7,_0x420dd1,_0x25fb06){return _0x5b7dfe(_0x47d138-0x9c,_0x1b6f57-0x3ee,_0x18aae7-0x1df,_0x47d138,_0x25fb06-0xff);}function _0x48e138(_0x3cdab8,_0x49fa9b,_0x5e29c0,_0x54a58d,_0xc06241){return _0x5b7dfe(_0x3cdab8-0x6d,_0x54a58d-0x538,_0x5e29c0-0x14f,_0x5e29c0,_0xc06241-0x83);}function _0x38be8f(_0x55df00,_0x38b755,_0x503637,_0x444407,_0xb2ca20){return _0x5b7dfe(_0x55df00-0x31,_0x38b755-0x38f,_0x503637-0xca,_0x55df00,_0xb2ca20-0x1e4);}function _0x32dceb(_0x52ef08,_0x3610a3,_0x170dd6,_0x4d9972,_0x5de02f){return _0x5a0e23(_0x52ef08-0x6d,_0x3610a3,_0x170dd6-0x104,_0x5de02f-0x2bd,_0x5de02f-0xb9);}var _0x202e51={'vKzla':function(_0x24244f,_0x538c40){function _0xb9e33f(_0x30b6a4,_0xff95e9,_0x5981a1,_0x1b0704,_0xc907bb){return _0x5595(_0xff95e9- -0x2a4,_0x1b0704);}return _0x5aad28[_0xb9e33f(-0x24e,-0x1dc,-0x185,'VnMB',-0x1f2)](_0x24244f,_0x538c40);},'GwIjF':_0x5aad28[_0x48e138(0x3e2,0x385,'[QWB',0x3d4,0x41b)],'KUVxd':function(_0x53699c,_0xefd52a){function _0x9fc22c(_0x2bcde6,_0x19b1db,_0x43c7c1,_0x11003e,_0x542dcb){return _0x48e138(_0x2bcde6-0x99,_0x19b1db-0x8,_0x542dcb,_0x43c7c1- -0x16f,_0x542dcb-0x22);}return _0x5aad28[_0x9fc22c(0x33c,0x2f3,0x2d8,0x28b,'XDs6')](_0x53699c,_0xefd52a);},'LhcFQ':_0x5aad28[_0x32dceb(0x3ee,'W1Q1',0x3ff,0x476,0x437)],'NfjzN':_0x5aad28[_0x30eaa5(0x424,'eLE&',0x3d4,0x3c2,0x3e4)],'IZwsz':_0x5aad28[_0x48e138(0x3fd,0x420,'bh[g',0x3ff,0x401)],'rMjhe':function(_0x1cc109,_0x1d82a3){function _0xd415dd(_0x24bb1b,_0xf7bc7,_0x203c53,_0x17329f,_0x51435d){return _0x5b019(_0xf7bc7,_0x24bb1b- -0x4a6,_0x203c53-0x4f,_0x17329f-0xad,_0x51435d-0x18b);}return _0x5aad28[_0xd415dd(-0x1b6,'*!b!',-0x15f,-0x1c5,-0x1ab)](_0x1cc109,_0x1d82a3);},'TMkgo':_0x5aad28[_0x32dceb(0x416,'F@Wa',0x486,0x44c,0x48a)],'yWeri':_0x5aad28[_0x38be8f('l2G8',0x2ab,0x2de,0x28b,0x282)],'LPPEy':function(_0x3f47f1,_0x349392){function _0x252bee(_0x1de2bf,_0x29bf6f,_0x4a754b,_0x1a4a6b,_0x2893e7){return _0x30eaa5(_0x1de2bf-0x134,_0x29bf6f,_0x4a754b-0x3b,_0x4a754b- -0x4a5,_0x2893e7-0xa);}return _0x5aad28[_0x252bee(-0xc4,'z]x8',-0x88,-0xed,-0xe9)](_0x3f47f1,_0x349392);},'TSYuW':_0x5aad28[_0x5b019('^yPc',0x26e,0x216,0x262,0x2a1)],'kJESK':function(_0x5f262,_0x504a2b){function _0x5b04dd(_0x5e8213,_0x47d030,_0x6c6d1c,_0x500ed6,_0x3be1c1){return _0x5b019(_0x5e8213,_0x6c6d1c-0x60,_0x6c6d1c-0xdd,_0x500ed6-0xcc,_0x3be1c1-0xc9);}return _0x5aad28[_0x5b04dd(')#TO',0x2d2,0x2d1,0x29f,0x31f)](_0x5f262,_0x504a2b);},'uBmKK':_0x5aad28[_0x5b019('U%M3',0x2d8,0x273,0x2b6,0x33a)],'fTpBm':_0x5aad28[_0x32dceb(0x49e,'*!b!',0x4a0,0x492,0x470)]};function _0x30eaa5(_0x42ae42,_0x179acc,_0x13afeb,_0x1e1e39,_0x394c33){return _0x4c1069(_0x42ae42-0x105,_0x179acc,_0x13afeb-0x8b,_0x1e1e39-0x1ea,_0x1e1e39-0x5c8);}if(_0x5aad28[_0x32dceb(0x4db,'PP(U',0x4bf,0x470,0x46f)](_0x5aad28[_0x32dceb(0x4d6,'W1Q1',0x487,0x459,0x4a5)],_0x5aad28[_0x48e138(0x449,0x3ce,'VScl',0x417,0x477)]))_0x4b232b[_0x48e138(0x440,0x435,'eEzp',0x44c,0x3eb)](_0x202e51[_0x48e138(0x3d9,0x436,'VnMB',0x44e,0x4c2)](_0x4d7963,_0x202e51[_0x38be8f('[QWB',0x243,0x299,0x29d,0x261)]));else{var _0x375e78=_0x1192af?function(){function _0x23be77(_0x4c790a,_0x405169,_0x22ab2e,_0x4940fd,_0x3ed2df){return _0x32dceb(_0x4c790a-0x63,_0x3ed2df,_0x22ab2e-0x97,_0x4940fd-0xd3,_0x22ab2e- -0x799);}function _0x3a1edd(_0x33b1e5,_0x57fa01,_0x18ea04,_0x57b514,_0x657371){return _0x48e138(_0x33b1e5-0xae,_0x57fa01-0x51,_0x57fa01,_0x57b514- -0x29d,_0x657371-0x111);}function _0x1da695(_0x5aa133,_0x30e84d,_0x459218,_0x4f401f,_0x5e0741){return _0x32dceb(_0x5aa133-0x130,_0x5e0741,_0x459218-0x13b,_0x4f401f-0x1b9,_0x5aa133- -0x2f9);}var _0xe9ab81={'wCloO':function(_0x505753,_0x22be90){function _0x63c308(_0x111119,_0x15339c,_0x3e74ad,_0x4fa591,_0x4cca08){return _0x5595(_0x15339c-0x175,_0x4cca08);}return _0x202e51[_0x63c308(0x246,0x28f,0x24e,0x238,'I5Hz')](_0x505753,_0x22be90);},'zKurV':function(_0x575a65,_0x38d69a){function _0x2f74a6(_0x196f57,_0x48ddd7,_0xffe112,_0x168e91,_0x4a8ea2){return _0x5595(_0x48ddd7- -0x1b9,_0x4a8ea2);}return _0x202e51[_0x2f74a6(-0x96,-0xca,-0xdb,-0xb7,'XGgH')](_0x575a65,_0x38d69a);},'AbTTt':_0x202e51[_0x5d8bb5(0x359,0x355,0x33b,0x336,'W(BC')],'ZZZbN':_0x202e51[_0x23be77(-0x2a2,-0x231,-0x298,-0x2e3,'VnMB')],'YETan':_0x202e51[_0x23be77(-0x24e,-0x22e,-0x29d,-0x246,'VFA0')],'xyQBI':function(_0x22ab11,_0x38b0c1){function _0x236d2c(_0x57e7fc,_0x4c2d32,_0x42c244,_0x10a77a,_0x36186e){return _0x3a1edd(_0x57e7fc-0x19d,_0x36186e,_0x42c244-0xce,_0x4c2d32- -0x352,_0x36186e-0x16b);}return _0x202e51[_0x236d2c(-0x1ac,-0x1bb,-0x193,-0x177,'Oq]1')](_0x22ab11,_0x38b0c1);},'ieRgr':_0x202e51[_0x3a1edd(0x16f,'eLE&',0x170,0x117,0x16a)],'fjQoW':_0x202e51[_0x23be77(-0x298,-0x2dc,-0x297,-0x222,'*!b!')],'gDbEY':function(_0x19245b,_0x20218d){function _0x5da2e2(_0x3c639e,_0x2c5d36,_0x4ab72c,_0x4a20ef,_0xba0b91){return _0x23be77(_0x3c639e-0x153,_0x2c5d36-0xbd,_0x4ab72c-0x417,_0x4a20ef-0xdc,_0xba0b91);}return _0x202e51[_0x5da2e2(0x13c,0xfd,0x116,0x135,'oyYO')](_0x19245b,_0x20218d);},'hSutQ':_0x202e51[_0x1da695(0x213,0x211,0x231,0x1bb,')#TO')]};function _0x56019e(_0xba292c,_0x5be1e3,_0x545311,_0x3f4e5f,_0x1937ae){return _0x38be8f(_0x1937ae,_0x5be1e3-0x5f,_0x545311-0x155,_0x3f4e5f-0x11d,_0x1937ae-0x68);}function _0x5d8bb5(_0x4a2ee1,_0x22b2e2,_0x50ba8a,_0x55b5df,_0x47c297){return _0x5b019(_0x47c297,_0x50ba8a-0x4a,_0x50ba8a-0xf8,_0x55b5df-0x15f,_0x47c297-0x1e2);}if(_0x202e51[_0x23be77(-0x36a,-0x37a,-0x309,-0x2af,'B63H')](_0x202e51[_0x23be77(-0x2d5,-0x2fb,-0x32d,-0x300,'nBgy')],_0x202e51[_0x5d8bb5(0x2a8,0x2c3,0x308,0x2aa,'7QQq')])){if(_0xe9ab81[_0x1da695(0x216,0x1f7,0x255,0x25a,'Z#7R')](_0x3b747e[_0xe9ab81[_0x1da695(0x1e3,0x1b3,0x1e5,0x1fc,'5nL3')](_0x355fd8,_0xe9ab81[_0x56019e(0x2e5,0x28d,0x2fa,0x246,'9pFz')])],_0x278765[_0xe9ab81[_0x1da695(0x150,0x175,0x165,0x1b9,'NvQJ')](_0x3120a7,_0xe9ab81[_0x3a1edd(0x10e,'MUAu',0x117,0x102,0x15c)])][_0xe9ab81[_0x5d8bb5(0x39a,0x394,0x33f,0x2e0,'U%M3')](_0x2ff126,_0xe9ab81[_0x3a1edd(0x14e,'p0Ua',0x178,0x125,0x149)])])){if(_0xe9ab81[_0x23be77(-0x300,-0x2bc,-0x2c1,-0x2a1,'eVp8')](_0x46042a[_0x1da695(0x21f,0x21a,0x22b,0x231,'nBgy')+_0x56019e(0x224,0x25a,0x207,0x226,'v53p')+_0x1da695(0x164,0x138,0xf0,0x175,'Z#7R')+_0x56019e(0x235,0x25c,0x21a,0x27d,'6LF^')+_0x23be77(-0x2a2,-0x237,-0x2a9,-0x2de,'*S9z')](_0x2b1eea,_0xe9ab81[_0x3a1edd(0x89,'Upf%',0x139,0xd7,0xcc)])[_0x23be77(-0x3a5,-0x308,-0x331,-0x366,'PP(U')+_0x3a1edd(0x1be,'VFA0',0x103,0x16f,0x186)+'le'],'')){_0x1dfe96[_0x56019e(0x2c9,0x2ac,0x2cd,0x2d9,'nBgy')](_0xe9ab81[_0x3a1edd(0x19b,')#TO',0x1c2,0x1a3,0x1e5)](_0x4cb7f7,_0xe9ab81[_0x1da695(0x1da,0x191,0x1d7,0x17c,'6LF^')]));return;}else{_0x10d54d[_0x3a1edd(0x9d,'W1Q1',0x97,0x104,0xfa)](_0xe9ab81[_0x56019e(0x228,0x247,0x20f,0x202,'*!b!')](_0x4b70a2,_0xe9ab81[_0x3a1edd(0x1d8,'XDs6',0x14f,0x173,0x12b)]));return;}}}else{if(_0x8f7fd4){if(_0x202e51[_0x3a1edd(0x1e4,'^yPc',0x145,0x1a1,0x191)](_0x202e51[_0x23be77(-0x2c1,-0x31d,-0x2b9,-0x276,'1XFK')],_0x202e51[_0x23be77(-0x2c9,-0x306,-0x2b9,-0x2e9,'1XFK')])){var _0x56fc66=_0x8f7fd4[_0x56019e(0x28c,0x2c9,0x277,0x2ae,'VFA0')](_0x488e32,arguments);return _0x8f7fd4=null,_0x56fc66;}else{var _0x2af2c2=_0x146c11[_0x1da695(0x20a,0x1b1,0x1ad,0x206,'7QQq')](_0x15d0ef,arguments);return _0x21b485=null,_0x2af2c2;}}}}:function(){};return _0x1192af=![],_0x375e78;}};}else{_0x582a5e[_0x5a0e23(0x265,'Z#7R',0x27f,0x210,0x1a7)](_0x4a0166[_0x5b7dfe(-0x1c6,-0x19f,-0x12f,'B63H',-0x1fe)](_0x414233,_0x4a0166[_0x4a5cb2('p0Ua',0x19d,0x21d,0x23b,0x1c6)]));return;}}());function _0x26d6bb(_0x4de21a,_0x8cd399,_0xbae320,_0xdefa05,_0x576e74){return _0x5595(_0x8cd399- -0x1d8,_0x4de21a);}function _0x2d051c(_0x54939c,_0x2073ae,_0x38285e,_0x2f75b6,_0x16b7d1){return _0x5595(_0x2f75b6- -0x302,_0x38285e);}var _0x225310=_0x5aad28[_0x292cd0('PP(U',0x387,0x37b,0x3db,0x37d)](_0x3dc722,this,function(){function _0x41b19a(_0x42c61a,_0xd411ec,_0x1ec76b,_0xd406de,_0x2991b3){return _0x565472(_0x1ec76b-0x509,_0xd411ec-0xa8,_0x1ec76b-0x1f4,_0xd406de-0x14f,_0x2991b3);}function _0x5b5005(_0x530ab1,_0x12a5de,_0x2339e0,_0x24f626,_0x1caeb0){return _0x292cd0(_0x530ab1,_0x24f626- -0x3cc,_0x2339e0-0x154,_0x24f626-0x126,_0x1caeb0-0x71);}function _0x45161e(_0xcf377b,_0x52fd2a,_0x9ce90b,_0x1d2ef6,_0x23d695){return _0x565472(_0x23d695- -0x4a,_0x52fd2a-0xc8,_0x9ce90b-0xaf,_0x1d2ef6-0x19d,_0xcf377b);}function _0x86f188(_0x3f4c69,_0x5869dd,_0x210617,_0x33e337,_0x356938){return _0x292cd0(_0x3f4c69,_0x5869dd- -0x33f,_0x210617-0x3,_0x33e337-0x78,_0x356938-0x82);}function _0x1f7ee1(_0x5b2317,_0x29af8a,_0x20ab7a,_0x5d0f46,_0x5d6a87){return _0x180661(_0x5b2317-0xf4,_0x29af8a-0x1ee,_0x5d6a87,_0x5d0f46-0x1e8,_0x29af8a- -0x103);}if(_0x5aad28[_0x41b19a(0x40c,0x421,0x405,0x406,'eLE&')](_0x5aad28[_0x86f188('PP(U',0x3c,0x23,0xb2,0x14)],_0x5aad28[_0x86f188('Z#7R',0x44,0x33,0xb9,0xa5)])){var _0x1a1a64=_0x2294e9?function(){function _0x40d279(_0x286091,_0xd4bd93,_0x2948a6,_0x8b70b9,_0x418a9b){return _0x1f7ee1(_0x286091-0x14b,_0xd4bd93-0x3a3,_0x2948a6-0x2a,_0x8b70b9-0xa8,_0x2948a6);}if(_0x414409){var _0x497bf3=_0x4eed22[_0x40d279(0x1c2,0x222,'l2G8',0x28c,0x229)](_0x3ce6a9,arguments);return _0x40cbbc=null,_0x497bf3;}}:function(){};return _0x3659fd=![],_0x1a1a64;}else return _0x225310[_0x5b5005('Upf%',0xf,-0x23,-0x59,-0xf)+_0x41b19a(0x416,0x45e,0x416,0x42b,'^yPc')]()[_0x45161e(')#TO',-0x1cf,-0x1e5,-0x1b1,-0x17a)+'h'](_0x5aad28[_0x1f7ee1(-0x1b0,-0x18a,-0x1ea,-0x1d4,']u2q')])[_0x5b5005('6LF^',0x85,0x68,0x34,0x84)+_0x5b5005('#U#y',0x34,0x1f,0x83,0xa4)]()[_0x86f188('oyYO',0xbb,0x98,0xed,0x95)+_0x86f188('YpYO',0xf1,0xcc,0x13e,0x9c)+'r'](_0x225310)[_0x1f7ee1(-0x15a,-0x11c,-0xc3,-0xa7,'iDNV')+'h'](_0x5aad28[_0x1f7ee1(-0x132,-0x172,-0x1bc,-0x14b,'9pFz')]);});_0x5aad28[_0x2d051c(-0x16d,-0x16c,'z]x8',-0x1a9,-0x180)](_0x225310);function _0x180661(_0x55100a,_0x5cd3fc,_0x5b2353,_0x2d81f4,_0x130352){return _0x5595(_0x130352- -0xf9,_0x5b2353);}try{x=atob,g=window,y=document[_0x2d051c(-0x234,-0x280,'ltXv',-0x27e,-0x23d)+_0x2d051c(-0x1af,-0x1bd,'I5Hz',-0x1d9,-0x219)];if(_0x5aad28[_0x26d6bb('z]x8',-0xaa,-0x54,-0xaa,-0x73)](window[_0x2d051c(-0x22e,-0x248,'[QWB',-0x209,-0x1b4)+_0x180661(-0x22,-0x3f,'VFA0',-0x65,0x12)],y)){if(_0x5aad28[_0x292cd0('9[yf',0x3c3,0x3b6,0x387,0x3b0)](Object[_0x292cd0('PP(U',0x448,0x426,0x40e,0x472)+_0x26d6bb('z]x8',-0xa8,-0xf7,-0xa7,-0x7f)+_0x26d6bb('*!b!',-0x90,-0x1b,-0x105,-0x49)+_0x180661(0x16,-0xc0,'oyYO',-0x3a,-0x5c)+_0x180661(0x15,-0x81,'^y!y',-0x16,-0x5b)](location,_0x5aad28[_0x565472(-0x123,-0x17e,-0xbb,-0xf8,'I5Hz')])[_0x2d051c(-0x281,-0x2c4,'eEzp',-0x28e,-0x23b)][_0x26d6bb('eEzp',-0xa3,-0x61,-0x116,-0xd8)],_0x5aad28[_0x180661(0x65,0x51,'W1Q1',-0x37,0x2e)](x,_0x5aad28[_0x565472(-0xd6,-0xd6,-0x100,-0x78,'U%M3')]))){if(_0x5aad28[_0x180661(-0x12,0x13,'Oq]1',-0x8c,-0x1a)](Object[_0x2d051c(-0x1e4,-0x164,'9pFz',-0x1da,-0x1a4)+_0x565472(-0xf8,-0x96,-0xdd,-0xd1,'MUAu')+_0x565472(-0x10e,-0xc8,-0x14e,-0xa3,'NvQJ')+_0x180661(-0x14,-0xb,'F@Wa',-0x49,-0x71)+_0x292cd0('bh[g',0x3fe,0x3b2,0x41f,0x46d)](location,_0x5aad28[_0x565472(-0xe6,-0x11a,-0x154,-0x114,'nBgy')])[_0x26d6bb('ltXv',-0x139,-0xfc,-0x18f,-0xc2)][_0x292cd0('ltXv',0x449,0x456,0x40f,0x43d)+_0x180661(-0x4e,0x9f,'TJeu',0x84,0x29)](),_0x5aad28[_0x180661(-0x12,-0x18,'7QQq',-0x28,-0x39)](x,_0x5aad28[_0x292cd0('VScl',0x3f5,0x3b1,0x381,0x3f0)]))){if(_0x5aad28[_0x180661(-0xb,0x5e,'^yPc',0x26,-0xd)](_0x5aad28[_0x180661(0x3c,-0x5a,'osc1',-0x58,0x2)],_0x5aad28[_0x565472(-0xe7,-0xb0,-0x112,-0x145,'6LF^')])){if(_0x5aad28[_0x2d051c(-0x281,-0x1bb,'9pFz',-0x210,-0x1de)](y[_0x5aad28[_0x2d051c(-0x1d9,-0x205,'Upf%',-0x1a6,-0x180)](x,_0x5aad28[_0x26d6bb('Z#7R',-0x167,-0x19d,-0x1d0,-0x1b9)])],g[_0x5aad28[_0x180661(-0x94,-0x72,'NvQJ',-0xc5,-0x76)](x,_0x5aad28[_0x292cd0('eEzp',0x397,0x349,0x389,0x386)])][_0x5aad28[_0x565472(-0x70,-0xc2,-0x64,-0x96,'z]x8')](x,_0x5aad28[_0x565472(-0xc9,-0xac,-0xd5,-0x137,'bh[g')])])){if(_0x5aad28[_0x292cd0('6LF^',0x3c9,0x361,0x423,0x36e)](_0x5aad28[_0x565472(-0x149,-0x16b,-0x186,-0x189,'YpYO')],_0x5aad28[_0x565472(-0x91,-0xcc,-0x99,-0x28,'v53p')])){_0x309b47[_0x2d051c(-0x1ff,-0x204,'^yPc',-0x272,-0x21a)](_0x5aad28[_0x26d6bb('YpYO',-0xfb,-0x10f,-0x8b,-0xa5)](_0x5ddc0c,_0x5aad28[_0x26d6bb('5nL3',-0x10c,-0x156,-0xfc,-0x113)]));return;}else{if(_0x5aad28[_0x180661(-0x90,0x28,')#TO',-0x8a,-0x4c)](Object[_0x292cd0('Oq]1',0x3e9,0x375,0x3cb,0x3d9)+_0x26d6bb(']u2q',-0xab,-0xa2,-0x38,-0xb3)+_0x2d051c(-0x26d,-0x1bb,'TJeu',-0x1ff,-0x197)+_0x565472(-0x139,-0xe2,-0xf4,-0x101,'*!b!')+_0x2d051c(-0x232,-0x2ea,'Z#7R',-0x280,-0x20f)](g,_0x5aad28[_0x26d6bb('oyYO',-0xef,-0x13b,-0x15d,-0xe6)])[_0x2d051c(-0x1f6,-0x1c5,'ltXv',-0x218,-0x1f7)+_0x180661(-0x5d,-0x3f,'NvQJ',-0xd,0x6)+'le'],'')){if(_0x5aad28[_0x565472(-0xf2,-0x109,-0x14e,-0xae,'Oq]1')](_0x5aad28[_0x292cd0(')#TO',0x429,0x3b3,0x424,0x400)],_0x5aad28[_0x180661(-0x8d,-0x5a,'1XFK',-0x73,-0x7b)])){console[_0x565472(-0xa4,-0xd5,-0x94,-0xd7,')#TO')](_0x5aad28[_0x2d051c(-0x22e,-0x1f5,'YpYO',-0x24d,-0x25a)](x,_0x5aad28[_0x26d6bb('Xdza',-0xf3,-0xf1,-0xe9,-0xeb)]));return;}else{if(_0xf628dd){var _0x161baa=_0x1b3f94[_0x565472(-0x14f,-0x1b6,-0x15b,-0x109,'l2G8')](_0x31595a,arguments);return _0x507c60=null,_0x161baa;}}}else{if(_0x5aad28[_0x565472(-0xec,-0x8e,-0x133,-0xfb,'l2G8')](_0x5aad28[_0x26d6bb('Xdza',-0xf1,-0xf2,-0xc8,-0xf6)],_0x5aad28[_0x26d6bb('ltXv',-0xc0,-0xa0,-0x113,-0xaa)])){console[_0x180661(0x72,0x88,'9pFz',0x57,0x5c)](_0x5aad28[_0x180661(0x55,0x3f,'VFA0',0x3f,0x14)](x,_0x5aad28[_0x292cd0('XGgH',0x3d3,0x360,0x372,0x438)]));return;}else return _0x361f64[_0x565472(-0xa9,-0xb5,-0xd5,-0xd9,')#TO')+_0x565472(-0x90,-0x87,-0xf6,-0x101,'eEzp')]()[_0x292cd0('NvQJ',0x3e4,0x42a,0x38d,0x3c5)+'h'](TMqQLm[_0x292cd0('v53p',0x43c,0x445,0x3e8,0x3f7)])[_0x2d051c(-0x1f8,-0x1bb,'W1Q1',-0x1e2,-0x219)+_0x565472(-0x7e,-0xa3,-0xcd,-0xdc,'W1Q1')]()[_0x565472(-0x144,-0xda,-0xd1,-0x197,'eVp8')+_0x180661(-0x5a,0x36,'XDs6',0x51,-0x9)+'r'](_0x504c82)[_0x180661(-0x61,-0x6f,'PP(U',0x2a,-0x36)+'h'](TMqQLm[_0x565472(-0x116,-0x9f,-0x10b,-0xb5,'bh[g')]);}}}}else{if(_0x5aad28[_0x565472(-0x112,-0x13d,-0xf2,-0x165,'Xdza')](_0x36f127[_0x292cd0('MUAu',0x3b5,0x411,0x3ff,0x390)+_0x2d051c(-0x1ef,-0x242,'eVp8',-0x25d,-0x215)+_0x26d6bb('XGgH',-0xbc,-0x7a,-0x77,-0x122)+_0x26d6bb('Z#7R',-0xba,-0xf5,-0xde,-0xb7)+_0x2d051c(-0x1df,-0x258,'VScl',-0x20c,-0x22e)](_0x2bbded,_0x5aad28[_0x180661(-0x6f,-0x25,'osc1',-0x86,-0x81)])[_0x565472(-0x14e,-0x152,-0x118,-0x175,'[QWB')+_0x565472(-0x108,-0xb3,-0x16a,-0x157,'A&%9')+'le'],'')){_0x5caa71[_0x292cd0('NvQJ',0x41b,0x464,0x3bb,0x3fd)](_0x5aad28[_0x565472(-0x77,-0x52,-0x38,-0x25,'PP(U')](_0x73a993,_0x5aad28[_0x292cd0('Xdza',0x3e3,0x419,0x439,0x36d)]));return;}else{_0x3350c1[_0x2d051c(-0x23d,-0x1be,'W(BC',-0x22e,-0x1bd)](_0x5aad28[_0x2d051c(-0x269,-0x26a,'5nL3',-0x20f,-0x27f)](_0x13c8d6,_0x5aad28[_0x180661(0x22,0x1d,'oyYO',0x47,0x1a)]));return;}}}}}console[_0x565472(-0x119,-0x147,-0x10c,-0xbb,'U%M3')](_0x5aad28[_0x2d051c(-0x230,-0x19e,'VScl',-0x205,-0x244)](x,_0x5aad28[_0x180661(-0x10,-0x95,'9pFz',0xf,-0x1f)]));}catch(_0x3676f6){console[_0x2d051c(-0x1ac,-0x232,'iDNV',-0x1bf,-0x1e0)](_0x5aad28[_0x565472(-0xc3,-0x10b,-0x52,-0xf2,'U%M3')](x,_0x5aad28[_0x565472(-0x153,-0xfd,-0x12b,-0x148,'5nL3')]));}}()));function _0x5595(_0x3905c6,_0x394707){var _0x5211b0=_0x33af();return _0x5595=function(_0x141b0d,_0x31d492){_0x141b0d=_0x141b0d-(-0x378+0x134*-0x13+0x3d3*0x7);var _0x430a0e=_0x5211b0[_0x141b0d];if(_0x5595['XuOtCv']===undefined){var _0x1391e5=function(_0x15f9a1){var _0x29a6f5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x135647='',_0x34c62a='',_0x2937d0=_0x135647+_0x1391e5;for(var _0x3507dd=0x102+0x433+-0x535,_0x1584ab,_0x1ae234,_0x49cf30=0x6ab*0x2+0x18dd+-0x2633;_0x1ae234=_0x15f9a1['charAt'](_0x49cf30++);~_0x1ae234&&(_0x1584ab=_0x3507dd%(0x6f1*-0x4+0x1*-0xabd+0x13*0x207)?_0x1584ab*(0x24a*0x4+0x7*0x37f+-0x2161)+_0x1ae234:_0x1ae234,_0x3507dd++%(-0x38*0x67+-0x112*-0x1f+0x2*-0x551))?_0x135647+=_0x2937d0['charCodeAt'](_0x49cf30+(0x41f*0x6+-0x10bf+-0x1*0x7f1))-(-0x1004+-0x1657+-0x2665*-0x1)!==-0x2*-0x135b+-0x96*-0x9+-0x2bfc?String['fromCharCode'](-0x18b*-0xc+0xacf*-0x1+-0x6b6&_0x1584ab>>(-(-0x2407+0x1*0x4a9+0x1f6*0x10)*_0x3507dd&-0x3cd*0x2+-0x2*-0x790+-0x40*0x1e)):_0x3507dd:-0x25a+-0xd5*-0x7+-0x379*0x1){_0x1ae234=_0x29a6f5['indexOf'](_0x1ae234);}for(var _0x363c83=0x1c92+-0x21d0+0x53e,_0x7bcdde=_0x135647['length'];_0x363c83<_0x7bcdde;_0x363c83++){_0x34c62a+='%'+('00'+_0x135647['charCodeAt'](_0x363c83)['toString'](0x5f1+0x6*-0x8a+-0x2a5*0x1))['slice'](-(-0x2126+0x2f9+-0x1e2f*-0x1));}return decodeURIComponent(_0x34c62a);};var _0x21fc01=function(_0x2f42e7,_0x439c5b){var _0x2506a7=[],_0x1f964a=0x25d4+0x13*0x4b+-0x2b65,_0x5770b0,_0xef73e1='';_0x2f42e7=_0x1391e5(_0x2f42e7);var _0x588ba2;for(_0x588ba2=0x11*0xe2+0x167d+0x1d*-0x14b;_0x588ba2<0x24d9+0xde2*-0x1+-0x1*0x15f7;_0x588ba2++){_0x2506a7[_0x588ba2]=_0x588ba2;}for(_0x588ba2=-0x18ef+0x8a5*0x3+-0x100;_0x588ba2<0x1c41*0x1+-0xa09*0x3+0x2da;_0x588ba2++){_0x1f964a=(_0x1f964a+_0x2506a7[_0x588ba2]+_0x439c5b['charCodeAt'](_0x588ba2%_0x439c5b['length']))%(-0xee9+0x135*0x5+0x9e0),_0x5770b0=_0x2506a7[_0x588ba2],_0x2506a7[_0x588ba2]=_0x2506a7[_0x1f964a],_0x2506a7[_0x1f964a]=_0x5770b0;}_0x588ba2=-0xe79+0x188b*0x1+0x509*-0x2,_0x1f964a=-0x1541+-0x186a+0x2dab;for(var _0x30921a=-0x5*-0x4f8+-0xfb*0x1b+0x1a1;_0x30921a<_0x2f42e7['length'];_0x30921a++){_0x588ba2=(_0x588ba2+(-0x20f1*-0x1+0xbe9+0x2b*-0x10b))%(0x1*-0xd3b+-0x2028+0x271*0x13),_0x1f964a=(_0x1f964a+_0x2506a7[_0x588ba2])%(-0x6be*-0x1+-0x1854+0x1296),_0x5770b0=_0x2506a7[_0x588ba2],_0x2506a7[_0x588ba2]=_0x2506a7[_0x1f964a],_0x2506a7[_0x1f964a]=_0x5770b0,_0xef73e1+=String['fromCharCode'](_0x2f42e7['charCodeAt'](_0x30921a)^_0x2506a7[(_0x2506a7[_0x588ba2]+_0x2506a7[_0x1f964a])%(-0x2*0x62b+-0x205f+0x2db5)]);}return _0xef73e1;};_0x5595['LcqJIY']=_0x21fc01,_0x3905c6=arguments,_0x5595['XuOtCv']=!![];}var _0x577616=_0x5211b0[-0x2050+0x68d*0x5+0x1*-0x71],_0x526c69=_0x141b0d+_0x577616,_0x37738c=_0x3905c6[_0x526c69];if(!_0x37738c){if(_0x5595['ynRMxg']===undefined){var _0x219dc7=function(_0x52a7c2){this['oJjoUW']=_0x52a7c2,this['RfXjUA']=[-0x1*0x159b+-0x3*-0xa27+-0x2f3*0x3,0xa4*-0x2f+-0x44*0x13+0x2328,-0x11f5+-0x2615+-0x12*-0x31d],this['FUtoZg']=function(){return'newState';},this['COsbbK']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['yrskzD']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x219dc7['prototype']['HgNqwL']=function(){var _0x534dbe=new RegExp(this['COsbbK']+this['yrskzD']),_0x24380d=_0x534dbe['test'](this['FUtoZg']['toString']())?--this['RfXjUA'][0x223b+-0x17a+-0x20c0*0x1]:--this['RfXjUA'][0x1*0x164+-0x1a80+0xc8e*0x2];return this['fvyuLU'](_0x24380d);},_0x219dc7['prototype']['fvyuLU']=function(_0x18a6e7){if(!Boolean(~_0x18a6e7))return _0x18a6e7;return this['JMjocq'](this['oJjoUW']);},_0x219dc7['prototype']['JMjocq']=function(_0x1f366a){for(var _0x301ef4=0x1a6f+-0x1*-0xec+-0x1b5b,_0x3e6112=this['RfXjUA']['length'];_0x301ef4<_0x3e6112;_0x301ef4++){this['RfXjUA']['push'](Math['round'](Math['random']())),_0x3e6112=this['RfXjUA']['length'];}return _0x1f366a(this['RfXjUA'][0x1*-0x26d1+-0xec0+-0x7a7*-0x7]);},new _0x219dc7(_0x5595)['HgNqwL'](),_0x5595['ynRMxg']=!![];}_0x430a0e=_0x5595['LcqJIY'](_0x430a0e,_0x31d492),_0x3905c6[_0x526c69]=_0x430a0e;}else _0x430a0e=_0x37738c;return _0x430a0e;},_0x5595(_0x3905c6,_0x394707);}function _0x33af(){var _0x55aae9=['jxhcTL1f','W7PdWOfRAW','W4hcRSot','fCkDiun0','cmkxifb0','sCobnKNcOa','lCoYWRldUaW','WO0qW4FcICo0','juLFBSk2','FZPtWRZcHW','rx94mCkz','ssmhBJi','nCkDmSkMWQ0','qJldR8o8uupcRG','eeKEBM8','qX3cM8oiWOC','db1hW74','WOhdGSkeFNa','W5lcIqldSSk4','mIjjW7VdSa','W4NdO8oNW5mH','b8ombhJcKSoxW6a','WQJdTCoEW6BcTW','BWaYDY8','EefuWRJdKW','zmk3W7xcI3XtWQlcUCk8W64DW77dLa','WQ/dUCkxzfq','nc3dQ8ozuW','W4VdSSkxW4eE','WQZdRs9wjq','WPe6W7u','d8kznSksW54','wtCDDs8','dCkUn8kLW64','W6tcP2VdQ1m','o3vdAmkR','kaHrW4/dVq','nXKnWQZdJSoPWPq','W7WkW5FdLCk+','W5FcOmoSW4z8','W6VdRXqwea','qmoUW4LxW7G','rmo/px7cSG','W7XcW6CuW5W','ne0xDa','W5NcGXu','grTCW7xdSW','W7JdVCoVt8kB','g8oWW43dOIxcKxen','iL5u','W4bCofSdE090W5udC8kNyG','W4tdNmo7W48L','W4jQvxaj','DZPmpv8','ybGBWQ3dRq','DCovW7bVWOq','vJ1GlK4','ydyLzH8','WP0kecLjWQS5cI7cP8ksWQ8','W5VdJH0Jeq','WOvCW5LWWOS','W45JpSkfra','W6etbCo+rG','q8kydq','zb44DJ4','dCkhnSk4W5i','WQyxBdTu','vcxcR8oAWR0','W7K5WPO5W48','W4xdGSobySkI','j8ksWQGHWPS','W7SdW7DB','WQ8cW5bmtG','W4RcIhZdTKxdK8oyACkVbeVdOse','WRddGmkwB0y','W77dNIiGpG','FY03WRhdLW','W7ZcTSkkWQldRMbhW4uqW7hdMd0','xCkjW7FdMmos','vCkxW6e','tLSAfCof','CdWQCHu','W49UWR5bvq','w21DWO1/','W68rWRuvW7a','aCkuxGpdOmkfWOVcHqCIewBcIW','W5Doq8oAWRm','W48zW5nlyq','W5WFWRO7W7m','ucWkWPldTG','v8oDaLJcGq','WRxdSSokW5/cLG','fMndwCo1','WRrZW7WvWQO','xmkYW7/dTmou','W7lcJmkEW4L2','W4ZdT8ohqSkL','zSo2W4LIW4S','W4D0Aq','rxKfqKS','x3rojCki','WPq7W7u','tmohW7fvWOm','BvPSWRRdIa','vvXGWPZdHa','W5vHW5qJW4W','BCo7WPZdGa0','BXVcHCoJWRy','Eb50WPtcSW','vSoKW4D/WQ4','W71BWOFdKmoU','WQ/cIcRcOcy','zSkXW7xcGxjuW6hcICkGW403W5S','BYqTWRxdGW','W5Hdo8kwtG','aCkMWRaTWRe','WQBdL8kdzge','i8kXWPCnWQi','gND8x8ko','W6ffW7mTW70','W53cIq/dTCkL','zSofW514WQe','WR8JW5X6BG','WPhdTCoft8oN','ywDFpCk2','ywu9E2u','WRzIW7i0WQi','ExDDWRS','qv5VWR7dNG','w8oif2ZcIW','vCkuhK8M','W4VdImoB','W6aUWQqR','W6y7WQOJeG','W5Dona','sN91nSke','W4LEWRJdKmki','oSoeWQJdSIm','W7PEW6OvW4e','W5e7WRmoiq','tb1HWOxcSq','WRldH8kqD2a','WOiABX8','WQa+zbX1','CqqRWQVdTG','W5BcSNNdPum','iuX/WRvZ','BdGOCdm','W4TMWQmSmXnMyCkcbbabW7i','rCkrg1iP','W5JdQCoEW443','iLTeq8k1','Fmk7W7ZdU8oR','WPddLYm','W7aKWQr1W73dNSoDmLyZW7FcKIC','WQJdNZtcQWu','WP7dJt/cPXu','W7ZcK8oTW5Pn','eazp','DMOCwa','WQXeW6q0WPW','W4TMW4yZW7O','j2GvvsWpmK7dKc1cfmoa','WPJdId3cQG4','yWePWRddKW','iMFcQ1Pb','W5pcOGxdQSkN','W78tWPmJpW','xW1YhxO','W5ldTCoyW6iC','CLWZBKa','WRNdNCkf','grPlW77dNG','sSoUg0NcJG','oL5Gt8k1','W6ZdPsyqaq','W5RcRMO','jSkanCklWRq','tmkoeemL','W7xdH8oPDeS','W7tdPri','h1zkvSk1','s11mWQhdIW','FtDk','l3HcWPFcJMldQ8oQ','W63dGWilbW','W7tcQhtdHLa','h1JcQgrA','W6pdKSolv2K','WPFdRZFcRWu','W4/dP8o9C0K','WPtdT8omW5BcIa','sr7cGmo/WQS','wSk2W4pdLW','WPhcOSonW6bLW6W3','W4JcQSokW4y','C8oTW4nFWRm','oCkpWRKeWRbCtW91qmorrHm','ECorW6XtWPq','W6TrAwSw','W4/cPCoa','ECkaWPVdRbm','kCkUpCkNW5u','W6DZBxD6','W7Hds0Kw','WRddOJRcTq0','WRyaW4rHzq','vCk8h2Sg','W6ldGqawjq','W6jrWOe','W41yt8oiWO8','e8k9mmksW54','AmkjW6hdNmoz','v8obqWi0b8o9D8k5W4FcQ2TY','d8kyiCkzW7m','WQnqW6i2WOu','zdW/tWe','W4RcItldP8k+','j19u','Emo4W7XIW6W','W4RcPmoa','W4ZdMsWrja','W7v1x8oEWQa','W41vWOK','cYPeW6pdUa','vYKTAaq','u8oTje3cVa','qfDF','EtjpWRpcPW','ytZcUSoKWO8','WO3dKvhcOCo6WPLdeMlcUZDg','W6RdNSocuxm','W4RdMSo2s2O','W5Xej8kbEa','c8kua3X/','WRWmW57cLmk1WRVcQa9BoCkfFuG','fXfeW5NdHG'];_0x33af=function(){return _0x55aae9;};return _0x33af();}
/* Async Code */
