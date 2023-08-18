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