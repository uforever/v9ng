
/* Init Framework */
(function () {
    v9ng = {
        "config": {},
        "cache": {},
        "toolsFunc": {},
        "envmtImpl": {},
    };
    v9ng.config.enableProxy = false;
    v9ng.config.printLog = true;
    v9ng.config.saveLog = true;    
    v9ng.cache.nativeSymbol = Symbol('native');
    v9ng.cache.proxySymbol = Symbol('proxy');
    v9ng.cache.referSymbol = Symbol('dom');
    v9ng.cache.maskSymbol = Symbol('ptr');
    v9ng.cache.protoPropSymbol = Symbol('protoProp');
    v9ng.cache.proxyImmune = [
        v9ng.cache.proxySymbol,
        "eval",
    ];
    v9ng.cache.recursiveImmuneObj = [
        '[object WebGLBuffer]',
        '[object WebGLProgram]',
        '[object HTMLDivElement]',
        '[object HTMLMetaElement]',
    ];
    v9ng.cache.recursiveImmuneProp = [
        v9ng.cache.referSymbol,
        v9ng.cache.maskSymbol,
    ];
    // v9ng.cache.htmlElements = [];
    v9ng.cache.cookie = {};
    v9ng.cache.fontList = [
        "SimHei",
        "SimSun",
        "NSimSun",
        "FangSong",
        "KaiTi",
    ];
    v9ng.cache.asyncEventCursor = 0;
    v9ng.cache.asyncEvents = [];
    v9ng.cache.callbackFuncs = [];
    v9ng.cache.listenEvents = {};
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
            const dataProto = Object.prototype.toString.call(data);
            if (dataType === 'object' && data instanceof Object) {
                if (Array.isArray(data)) {
                    let result = [];
                    for (const element of data) {
                        result.push(v9ng.toolsFunc.commToString(element));
                    }
                    return '[' + result.join(',') + ']';
                } else if (dataProto === '[object Arguments]') {
                    let result = [];
                    for (let i = 0; i < data.length; i++) {
                        result.push(v9ng.toolsFunc.commToString(data[i]));
                    }
                    return result.join(' ');
                } else if (v9ng.cache.recursiveImmuneObj.includes(dataProto)) {
                    return `{${dataProto}}`;
                } else {
                    const propKeys = Reflect.ownKeys(data);
                    let result = [];
                    for (const prop of propKeys) {
                        if (v9ng.cache.recursiveImmuneProp.includes(prop)) {
                            result.push(`${v9ng.toolsFunc.commToString(prop)}:{${v9ng.toolsFunc.commToString(Object.prototype.toString.call(data[prop]))}}`);
                        } else {
                            result.push(`${v9ng.toolsFunc.commToString(prop)}:${v9ng.toolsFunc.commToString(data[prop])}`);
                        }
                    }
                    return '{' + result.join(',') + '}';
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

    (function () { // styleLog
        v9ng.toolsFunc.styleLog = function (styleName, message) {
            const styles = {
                // text color
                'black': '\x1b[30m',
                'red': '\x1b[31m',
                'green': '\x1b[32m',
                'yellow': '\x1b[33m',
                'blue': '\x1b[34m',
                'magenta': '\x1b[35m',
                'cyan': '\x1b[36m',
                'white': '\x1b[37m',
                'gray': '\x1b[90m',
                'brightRed': '\x1b[91m',
                'brightGreen': '\x1b[92m',
                'brightYellow': '\x1b[93m',
                'brightBlue': '\x1b[94m',
                'brightMagenta': '\x1b[95m',
                'brightCyan': '\x1b[96m',
                'brightWhite': '\x1b[97m',

                // background color
                'bgBlack': '\x1b[40m',
                'bgRed': '\x1b[41m',
                'bgGreen': '\x1b[42m',
                'bgYellow': '\x1b[43m',
                'bgBlue': '\x1b[44m',
                'bgMagenta': '\x1b[45m',
                'bgCyan': '\x1b[46m',
                'bgWhite': '\x1b[47m',
                'bgGray': '\x1b[100m',
                'bgBrightRed': '\x1b[101m',
                'bgBrightGreen': '\x1b[102m',
                'bgBrightYellow': '\x1b[103m',
                'bgBrightBlue': '\x1b[104m',
                'bgBrightMagenta': '\x1b[105m',
                'bgBrightCyan': '\x1b[106m',
                'bgBrightWhite': '\x1b[107m',

                // other style
                'reset': '\x1b[0m',         // reset / default
                'bold': '\x1b[1m',          // bold
                'dim': '\x1b[2m',           // dim
                'italic': '\x1b[3m',        // italic
                'underline': '\x1b[4m',     // underline
                'inverse': '\x1b[7m',       // inverse
                'hidden': '\x1b[8m',        // hidden
                'strikethrough': '\x1b[9m',  // strikethrough
            };
            if (!styles[styleName]) {
                v9ng.toolsFunc.throwError('StyleError', 'Illegal style');
            }
            console.log(`${styles[styleName]}${message}${styles.reset}`);
        };
    })();

    (function () { // noopFunc
        v9ng.toolsFunc.noopFunc = function () { };
    })();

    (function () { // objProxy
        v9ng.toolsFunc.objProxy = function (obj, objName) { // objName is used only for logging
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
                            v9ng.toolsFunc.styleLog('green', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(result)}`);
                            result = v9ng.toolsFunc.objProxy(result, `${objName}.${prop.toString()}`);
                        } else {
                            v9ng.toolsFunc.styleLog('green', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${result}\``);
                        }
                    } catch (e) {
                        v9ng.toolsFunc.styleLog('red', `[GET PROP]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return result;
                },
                set: function (target, prop, value, reciver) {
                    try {
                        if (value instanceof Object) {
                            v9ng.toolsFunc.styleLog('yellow', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(value)}`);
                        } else {
                            v9ng.toolsFunc.styleLog('yellow', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${value}\``);
                        }
                    } catch (e) {
                        v9ng.toolsFunc.styleLog('red', `[SET PROP]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return Reflect.set(target, prop, value, reciver);
                },
                getOwnPropertyDescriptor: function (target, prop) {
                    let result = Reflect.getOwnPropertyDescriptor(target, prop);
                    try {
                        if (prop !== 'constructor') {
                            v9ng.toolsFunc.styleLog('magenta', `[GET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[TYPE]: ${Object.prototype.toString.call(result)}`);
                        }
                        // optional
                        // if (typeof result !== "undefined") {
                        //     result = v9ng.toolsFunc.objProxy(result, `${objName}.${prop.toString()}.PropertyDescriptor`);
                        // }
                    } catch (e) {
                        v9ng.toolsFunc.styleLog('red', `[GET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return result;
                },
                defineProperty: function (target, prop, descriptor) {
                    try {
                        v9ng.toolsFunc.styleLog('magenta', `[SET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[VALUE]: \`${descriptor.value}\``);
                    } catch (e) {
                        v9ng.toolsFunc.styleLog('red', `[SET DESCRIPTOR]: \`${objName}[${prop.toString()}]\`
[ERROR]: ${e.message}`);
                    }
                    return Reflect.defineProperty(target, prop, descriptor);
                },
                apply: function (target, thisArg, args) {
                    let result = Reflect.apply(target, thisArg, args);
                    try {
                        if (typeof result === 'symbol') {
                            v9ng.toolsFunc.styleLog('blue', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT]: ${result.toString()}`);
                        } else if (typeof result === 'object') {
                            v9ng.toolsFunc.styleLog('blue', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT TYPE]: ${Object.prototype.toString.call(result)}`);
                        } else {
                            v9ng.toolsFunc.styleLog('blue', `[FUNC APPLY]: \`${objName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(args)}\`
[RESULT]: ${result}`);
                        }
                    } catch (e) {
                        v9ng.toolsFunc.styleLog('red', `[FUNC APPLY]: \`${objName}\`
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
                    v9ng.toolsFunc.styleLog('red', `[FUNC DISPATCH]: \`${totalName}\`
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
                    v9ng.toolsFunc.styleLog('blue', `[FUNC START]: \`${funcInfo.objName}\`->\`${funcInfo.funcName}\`
[ARGS]: \`${v9ng.toolsFunc.commToString(obj.args)}\``);
                }
            }
            if (!onLeave) {
                onLeave = function (obj) {
                    v9ng.toolsFunc.styleLog('blue', `[FUNC END]: \`${funcInfo.objName}\`->\`${funcInfo.funcName}\`
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

    (function () { // createProxyObj
        v9ng.toolsFunc.createProxyObj = function (obj, ctor, name) {
            Object.setPrototypeOf(obj, ctor.prototype);
            return v9ng.toolsFunc.objProxy(obj, name);
        };
    })();

    (function () { // setProtoProp
        v9ng.toolsFunc.setProtoProp = function (key, value) {
            if (!(v9ng.cache.protoPropSymbol in this)) {
                Object.defineProperty(this, v9ng.cache.protoPropSymbol, {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: {},
                });
            }
            this[v9ng.cache.protoPropSymbol][key] = value;
            return value;
        };
    })();

    (function () { // getProtoProp
        v9ng.toolsFunc.getProtoProp = function (key) {
            return this[v9ng.cache.protoPropSymbol] && this[v9ng.cache.protoPropSymbol][key];
        };
    })();

    (function () { // getElements
        v9ng.toolsFunc.getElements = function (tagType, rootNode) {
            let result = [];
            for (const tag of v9ng.cache.htmlElements) {
                if (tag.tagName === tagType) {
                    if (rootNode === undefined) {
                        result.push(tag);
                    } else {
                        let parentTag = tag.parentNode;
                        while(parentTag) {
                            if (parentTag === rootNode) {
                                result.push(tag);
                            }
                            parentTag = parentTag.parentNode;
                        }
                    }
                }
            }
            result = v9ng.toolsFunc.createProxyObj(result, HTMLCollection, "HTMLCollection");
            return result;
        };
    })();

    (function () { // parseSingleTag
        v9ng.toolsFunc.parseSingleTag = function (tagStr) {
            let arrList = tagStr.match("<(.*?)>")[1].split(" ");
            let tagJson = {};
            tagJson["type"] = arrList[0];
            tagJson["props"] = {};
            for (let i = 1; i < arrList.length; i++) {
                let item = arrList[i].split("=");
                let key = item[0];
                let value = item[1].replaceAll("\"", "").replaceAll("'", "");
                tagJson["props"][key] = value;
            }
            return tagJson;
        };
    })();

    (function () { // parseUrl
        v9ng.toolsFunc.parseUrl = function (str) {
            const options = {
                strictMode: false,
                key: ["href", "protocol", "host", "userInfo", "user", "password", "hostname", "port", "relative", "pathname", "directory", "file", "search", "hash"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };
            if (!str) {
                return '';
            }
            var o = options,
                m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                urlJson = {},
                i = 14;
            while (i--) urlJson[o.key[i]] = m[i] || "";
            urlJson[o.q.name] = {};
            urlJson[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
                if ($1) urlJson[o.q.name][$1] = $2;
            });
            delete urlJson["queryKey"];
            delete urlJson["userInfo"];
            delete urlJson["user"];
            delete urlJson["password"];
            delete urlJson["relative"];
            delete urlJson["directory"];
            delete urlJson["file"];
            urlJson["protocol"] += ":";
            urlJson["origin"] = urlJson["protocol"] + "//" + urlJson["host"];
            urlJson["search"] = urlJson["search"] && "?" + urlJson["search"];
            urlJson["hash"] = urlJson["hash"] && "#" + urlJson["hash"];
            return urlJson;
        };
    })();

    (function () { // createMimeTypeArray
        v9ng.toolsFunc.createMimeTypeArray = function () {
            let mimeTypeArray = {};
            mimeTypeArray = v9ng.toolsFunc.createProxyObj(mimeTypeArray, MimeTypeArray, "mimeTypeArray");
            v9ng.toolsFunc.setProtoProp.call(mimeTypeArray, "length", 0);
            return mimeTypeArray;
        };
    })();

    (function () { // addMimeType
        v9ng.toolsFunc.addMimeType = function (mimeType) {
            let mimeTypeArray = v9ng.cache.mimeTypeArray;
            if (mimeTypeArray === undefined) {
                mimeTypeArray = v9ng.toolsFunc.createMimeTypeArray();
            }
            const currentIndex = mimeTypeArray.length;
            let flag = true;
            for (let i = 0; i < currentIndex; i++) {
                if (mimeTypeArray[i].type === mimeType.type) {
                    flag = false;
                }
            }
            if (flag) {
                mimeTypeArray[currentIndex] = mimeType;
                Object.defineProperty(mimeTypeArray, mimeType.type, {
                    configurable: true,
                    enumerable: false,
                    writable: false,
                    value: mimeType,
                });
                v9ng.toolsFunc.setProtoProp.call(mimeTypeArray, "length", currentIndex + 1);
            }
            v9ng.cache.mimeTypeArray = mimeTypeArray;
            return mimeTypeArray;
        };
    })();

    (function () { // createMimeType
        v9ng.toolsFunc.createMimeType = function (mimeTypeJson, plugin) {
            let mimeType = {};
            mimeType = v9ng.toolsFunc.createProxyObj(mimeType, MimeType, "mimeType");
            v9ng.toolsFunc.setProtoProp.call(mimeType, "description", mimeTypeJson.description);
            v9ng.toolsFunc.setProtoProp.call(mimeType, "suffixes", mimeTypeJson.suffixes);
            v9ng.toolsFunc.setProtoProp.call(mimeType, "type", mimeTypeJson.type);
            v9ng.toolsFunc.setProtoProp.call(mimeType, "enabledPlugin", plugin);
            v9ng.toolsFunc.addMimeType(mimeType);
            return mimeType;
        };
    })();

    (function () { // createPluginArray
        v9ng.toolsFunc.createPluginArray = function () {
            let pluginArray = {};
            pluginArray = v9ng.toolsFunc.createProxyObj(pluginArray, PluginArray, "pluginArray");
            v9ng.toolsFunc.setProtoProp.call(pluginArray, "length", 0);
            return pluginArray;
        };
    })();

    (function () { // addPlugin
        v9ng.toolsFunc.addPlugin = function (plugin) {
            let pluginArray = v9ng.cache.pluginArray;
            if (pluginArray === undefined) {
                pluginArray = v9ng.toolsFunc.createPluginArray();
            }
            const currentIndex = pluginArray.length;
            pluginArray[currentIndex] = plugin;
            Object.defineProperty(pluginArray, plugin.name, {
                configurable: true,
                enumerable: false,
                writable: false,
                value: plugin,
            });
            v9ng.toolsFunc.setProtoProp.call(pluginArray, "length", currentIndex + 1);
            v9ng.cache.pluginArray = pluginArray;
            return pluginArray;
        };
    })();

    (function () { // createPlugin
        v9ng.toolsFunc.createPlugin = function (data) {
            const mimeTypes = data.mimeTypes;
            let plugin = {};
            plugin = v9ng.toolsFunc.createProxyObj(plugin, Plugin, "plugin");
            v9ng.toolsFunc.setProtoProp.call(plugin, "description", data.description);
            v9ng.toolsFunc.setProtoProp.call(plugin, "filename", data.filename);
            v9ng.toolsFunc.setProtoProp.call(plugin, "name", data.name);
            v9ng.toolsFunc.setProtoProp.call(plugin, "length", mimeTypes.length);
            for (let i = 0; i < mimeTypes.length; i++) {
                let mimeType = v9ng.toolsFunc.createMimeType(mimeTypes[i], plugin);
                plugin[i] = mimeType;
                Object.defineProperty(plugin, mimeTypes[i].type, {
                    configurable: true,
                    enumerable: false,
                    writable: false,
                    value: mimeType,
                });
            }
            v9ng.toolsFunc.addPlugin(plugin);
            return plugin;
        };
    })();
})();
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
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "BODY":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLBodyElement, 'HTMLBodyElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "CANVAS":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLCanvasElement, 'HTMLCanvasElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "DIV":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLDivElement, 'HTMLDivElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "HEAD":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLHeadElement, 'HTMLHeadElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "INPUT":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLInputElement, 'HTMLInputElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "META":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLMetaElement, 'HTMLMetaElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "SCRIPT":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLScriptElement, 'HTMLScriptElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "SPAN":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLSpanElement, 'HTMLSpanElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            case "I":
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLElement, 'HTMLElement');
                // v9ng.cache.htmlElements.push(tag);
                break;
            default:
                tag = v9ng.toolsFunc.createProxyObj(tag, HTMLElement, 'HTMLElement');
                v9ng.toolsFunc.styleLog('red', `[NOT IMPL]: Document_prototype$createElement("${tagName}")`);
                break;
        }
        const tagDocument = document[v9ng.cache.referSymbol].createElement(tagName);
        Object.defineProperty(tag, v9ng.cache.referSymbol, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: tagDocument,
        });
        v9ng.toolsFunc.setProtoProp.call(tag, "tagName", tagType);
        // console.log(tag, tag.tagName);
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
                v9ng.cache.callbackFuncs.push(callBack);
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
        // let collection = [];
        // collection.push(tag);
        // collection = v9ng.toolsFunc.createProxyObj(collection, HTMLCollection, "HTMLCollection");
        // v9ng.toolsFunc.setProtoProp.call(this, "children", collection);
        this[v9ng.cache.referSymbol].appendChild(tag[v9ng.cache.referSymbol]);
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
        for (let i = 0; i < v9ng.cache.asyncEvents.length; i++) {
            let event = v9ng.cache.asyncEvents[i];
            if (event.timeoutId === timeoutId) {
                delete v9ng.cache.asyncEvents[i];
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
    v9ng.envmtImpl.window$top_get = function () {
        return window;
    };
    v9ng.envmtImpl.XMLHttpRequest_prototype$open = function (method, url) {
        return url;
    };
})();

/* VM Logs Code */
(function () {
    v9ng.toolsFunc.saveLog = function (args) {
        if (args.length === 1 && typeof args[0] === 'string') {
            fs.appendFileSync("./output/demoProj.log", `
${(args[0])}`);
        } else {
            fs.appendFileSync("./output/demoProj.log", `
${v9ng.toolsFunc.commToString(args)}`);
        }
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
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeType_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nodeName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeName_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "baseURI", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "baseURI_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "isConnected", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "isConnected_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "ownerDocument_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "parentNode", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "parentNode_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "parentElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "parentElement_get", arguments);
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
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "previousSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nextSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nextSibling_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "nodeValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeValue_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "nodeValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Node.prototype, "textContent", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Node.prototype", "textContent_get", arguments);
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
// ---- HTMLElements BEGIN ----
(function () { // HTMLAnchorElement
    HTMLAnchorElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLAnchorElement, "HTMLAnchorElement");
    Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "target", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "target_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "target_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "download", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "download_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "download_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "ping", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "ping_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "ping_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rel", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "rel_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "rel_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "relList", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "relList_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "relList_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hreflang_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hreflang_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "referrerPolicy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "referrerPolicy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "text_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "coords", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "coords_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "coords_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "charset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "charset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "charset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rev", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "rev_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "rev_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "shape", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "shape_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "shape_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "origin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "origin_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "protocol", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "protocol_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "protocol_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "username", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "username_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "username_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "password", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "password_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "password_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "host", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "host_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "host_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hostname", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hostname_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hostname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "port", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "port_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "port_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "pathname", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "pathname_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "pathname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "search", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "search_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "search_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hash", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hash_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hash_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "href", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "href_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "href_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "toString", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "toString", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hrefTranslate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLAnchorElement.prototype", "hrefTranslate_set", arguments);
        },
    });
})();
(function () { // HTMLBodyElement
    HTMLBodyElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLBodyElement, "HTMLBodyElement");
    Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "text_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "link", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "link_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "link_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "vLink", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "vLink_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "vLink_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "aLink", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "aLink_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "aLink_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "bgColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "bgColor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "bgColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "background", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "background_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "background_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onblur", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onblur_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onblur_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onfocus", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onfocus_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onfocus_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onresize", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onresize_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onresize_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onscroll", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onscroll_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onscroll_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onafterprint", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onafterprint_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onafterprint_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onbeforeprint_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onbeforeprint_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onbeforeunload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onbeforeunload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onhashchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onhashchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onhashchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onlanguagechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onlanguagechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onmessage_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onmessage_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onmessageerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onmessageerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onoffline", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onoffline_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onoffline_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "ononline", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "ononline_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "ononline_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpagehide", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpagehide_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpagehide_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpageshow", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpageshow_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpageshow_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpopstate", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpopstate_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onpopstate_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onrejectionhandled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onrejectionhandled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onstorage", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onstorage_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onstorage_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onunhandledrejection_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onunhandledrejection_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onunload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLBodyElement.prototype", "onunload_set", arguments);
        },
    });
})();
(function () { // HTMLCanvasElement
    HTMLCanvasElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLCanvasElement, "HTMLCanvasElement");
    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "width", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "width_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "width_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "height", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "height_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "height_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "captureStream", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "getContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "getContext", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "toBlob", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "toDataURL", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCanvasElement.prototype", "transferControlToOffscreen", arguments);
        },
    });
})();
(function () { // HTMLDivElement
    HTMLDivElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLDivElement, "HTMLDivElement");
    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDivElement.prototype", "align_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLDivElement.prototype", "align_set", arguments);
        },
    });
})();
(function () { // HTMLHeadElement
    HTMLHeadElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLHeadElement, "HTMLHeadElement");
    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
})();
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
(function () { // HTMLMetaElement
    HTMLMetaElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLMetaElement, "HTMLMetaElement");
    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "name_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "name_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "httpEquiv_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "httpEquiv_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "content", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "content_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "content_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "media", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "media_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "media_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLMetaElement.prototype, "scheme", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "scheme_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLMetaElement.prototype", "scheme_set", arguments);
        },
    });
})();
(function () { // HTMLScriptElement
    HTMLScriptElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLScriptElement, "HTMLScriptElement");
    Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
    v9ng.toolsFunc.defineProperty(HTMLScriptElement, "supports", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement", "supports", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "src_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "src_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "type_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "type_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "noModule", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "noModule_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "noModule_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "charset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "charset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "charset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "async", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "async_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "async_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "defer", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "defer_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "defer_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "crossOrigin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "crossOrigin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "text", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "text_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "text_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "referrerPolicy_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "referrerPolicy_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "event", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "event_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "event_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "htmlFor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "htmlFor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "htmlFor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "integrity", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "integrity_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "integrity_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "fetchPriority_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "fetchPriority_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLScriptElement.prototype, "blocking", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "blocking_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLScriptElement.prototype", "blocking_set", arguments);
        },
    });
})();
(function () { // HTMLSpanElement
    HTMLSpanElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLSpanElement, "HTMLSpanElement");
    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
})();
// ---- HTMLElements END ----
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
    Object.defineProperty(document, v9ng.cache.referSymbol, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: jsDocument,
    });
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
(function () { // sessionStorage
    sessionStorage = {};
    Object.setPrototypeOf(sessionStorage, Storage.prototype);
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
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "href_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "origin", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "origin_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(location, "protocol", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "protocol_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "host", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "host_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hostname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hostname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "port", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "port_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "pathname", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "pathname_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "search", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "search_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(location, "hash", {
        configurable: false,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "location", "hash_get", arguments);
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
(function () { // HTMLCollection
    HTMLCollection = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(HTMLCollection, "HTMLCollection");
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(HTMLCollection.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "HTMLCollection.prototype", "namedItem", arguments);
        },
    });
})();
(function () { // MimeType
    MimeType = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(MimeType, "MimeType");
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "suffixes_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "description", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "description_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeType.prototype", "enabledPlugin_get", arguments);
        },
        set: undefined,
    });
})();
(function () { // MimeTypeArray
    MimeTypeArray = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(MimeTypeArray, "MimeTypeArray");
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MimeTypeArray.prototype", "namedItem", arguments);
        },
    });
})();
(function () { // Plugin
    Plugin = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(Plugin, "Plugin");
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "name", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "name_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "filename", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "filename_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "description", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "description_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Plugin.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Plugin.prototype", "namedItem", arguments);
        },
    });
})();
(function () { // PluginArray
    PluginArray = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(PluginArray, "PluginArray");
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "namedItem", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PluginArray.prototype", "refresh", arguments);
        },
    });
})();
(function () { // CSSStyleDeclaration
    CSSStyleDeclaration = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(CSSStyleDeclaration, "CSSStyleDeclaration");
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssText_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssText_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "length_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "parentRule_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssFloat_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "cssFloat_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "getPropertyPriority", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "getPropertyValue", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "item", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "removeProperty", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CSSStyleDeclaration.prototype", "setProperty", arguments);
        },
    });
})();
(function () { // CanvasRenderingContext2D
    CanvasRenderingContext2D = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(CanvasRenderingContext2D, "CanvasRenderingContext2D");
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "canvas_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "globalAlpha_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "globalAlpha_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "globalCompositeOperation_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "globalCompositeOperation_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "filter_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "filter_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "imageSmoothingEnabled_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "imageSmoothingEnabled_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "imageSmoothingQuality_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "imageSmoothingQuality_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "strokeStyle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "strokeStyle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fillStyle_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fillStyle_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowOffsetX_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowOffsetX_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowOffsetY_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowOffsetY_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowBlur_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowBlur_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowColor_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "shadowColor_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineWidth_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineWidth_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineCap_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineCap_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineJoin_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineJoin_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "miterLimit_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "miterLimit_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineDashOffset_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineDashOffset_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "font", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "font_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "font_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textAlign_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textAlign_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textBaseline_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textBaseline_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "direction_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "direction_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontKerning_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontKerning_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontStretch_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontStretch_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontVariantCaps_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fontVariantCaps_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "letterSpacing_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "letterSpacing_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textRendering_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "textRendering_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "wordSpacing_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "wordSpacing_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clip", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "clip", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createConicGradient", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "createConicGradient", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createImageData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "createImageData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createLinearGradient", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "createLinearGradient", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createPattern", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "createPattern", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createRadialGradient", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "createRadialGradient", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "drawFocusIfNeeded", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawImage", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "drawImage", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fill", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fill", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fillText", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getContextAttributes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "getContextAttributes", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "getImageData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getLineDash", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "getLineDash", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getTransform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "getTransform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isContextLost", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "isContextLost", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInPath", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "isPointInPath", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInStroke", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "isPointInStroke", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "measureText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "measureText", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "putImageData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "putImageData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "reset", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "reset", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "roundRect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "roundRect", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "save", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "save", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "scale", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "scale", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setLineDash", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "setLineDash", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setTransform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "setTransform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "stroke", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "stroke", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeText", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "strokeText", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "transform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "transform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "translate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "translate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arc", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "arc", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arcTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "arcTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "beginPath", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "beginPath", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "bezierCurveTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "bezierCurveTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clearRect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "clearRect", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "closePath", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "closePath", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "ellipse", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "ellipse", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillRect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "fillRect", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "lineTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "moveTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "moveTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "quadraticCurveTo", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "quadraticCurveTo", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "rect", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "resetTransform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "resetTransform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "restore", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "restore", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rotate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "rotate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeRect", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "CanvasRenderingContext2D.prototype", "strokeRect", arguments);
        },
    });
})();
(function () { // WebGLRenderingContext
    WebGLRenderingContext = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(WebGLRenderingContext, "WebGLRenderingContext");
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 256,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 16384,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "POINTS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_LOOP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_STRIP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_STRIP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_FAN", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ZERO", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 768,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 769,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 770,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 771,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 772,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 773,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DST_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 774,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 775,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA_SATURATE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 776,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_ADD", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32774,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32777,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32777,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34877,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_SUBTRACT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32778,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_REVERSE_SUBTRACT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32779,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32968,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32969,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32970,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32971,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32769,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32770,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32771,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32772,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32773,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34962,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34963,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34964,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34965,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STREAM_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35040,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STATIC_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35044,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DYNAMIC_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35048,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34660,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_USAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34661,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_VERTEX_ATTRIB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34342,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1028,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BACK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1029,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_AND_BACK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1032,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3553,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2884,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3042,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DITHER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2960,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2929,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3089,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FILL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32823,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_ALPHA_TO_COVERAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32926,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32928,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NO_ERROR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_ENUM", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1280,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1281,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_OPERATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1282,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "OUT_OF_MEMORY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1285,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2304,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CCW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2305,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_WIDTH", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2849,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_POINT_SIZE_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33901,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_LINE_WIDTH_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33902,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE_MODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2885,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2886,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2928,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2930,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2931,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2932,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2961,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2962,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2964,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2965,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_PASS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2966,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_REF", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2967,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_VALUE_MASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2963,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2968,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34816,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34817,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34818,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_PASS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34819,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_REF", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36003,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_VALUE_MASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36004,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36005,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VIEWPORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2978,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_BOX", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3088,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3106,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3107,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_ALIGNMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3317,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "PACK_ALIGNMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3333,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3379,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VIEWPORT_DIMS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3386,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SUBPIXEL_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3408,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RED_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3410,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "GREEN_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3411,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BLUE_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3412,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3413,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3414,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3415,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10752,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FACTOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32824,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32873,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_BUFFERS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32936,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32937,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32938,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_INVERT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32939,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COMPRESSED_TEXTURE_FORMATS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34467,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DONT_CARE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4352,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FASTEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4353,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NICEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4354,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "GENERATE_MIPMAP_HINT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33170,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BYTE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5120,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_BYTE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5121,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SHORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5122,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5123,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5124,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5125,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5126,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6402,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6406,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6407,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6408,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6409,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6410,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_4_4_4_4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32819,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_5_5_1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32820,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_6_5", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33635,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAGMENT_SHADER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35632,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_SHADER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35633,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_ATTRIBS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34921,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_UNIFORM_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36347,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VARYING_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36348,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35661,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35660,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34930,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_FRAGMENT_UNIFORM_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36349,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SHADER_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35663,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DELETE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35712,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINK_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35714,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VALIDATE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35715,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ATTACHED_SHADERS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35717,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_UNIFORMS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35718,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_ATTRIBUTES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35721,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SHADING_LANGUAGE_VERSION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35724,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_PROGRAM", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35725,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NEVER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 512,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LESS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 513,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "EQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 514,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 515,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "GREATER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 516,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NOTEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 517,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "GEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 518,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ALWAYS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 519,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "KEEP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7680,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "REPLACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7681,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INCR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7682,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DECR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7683,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INVERT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5386,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INCR_WRAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34055,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DECR_WRAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34056,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VENDOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7936,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7937,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERSION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7938,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9728,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9729,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9984,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9985,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9986,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9987,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MAG_FILTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10240,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MIN_FILTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10241,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_S", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10242,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_T", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10243,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5890,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34067,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_CUBE_MAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34068,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_X", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34069,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34070,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34071,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34072,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34073,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34074,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_CUBE_MAP_TEXTURE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34076,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE0", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33984,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33985,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33986,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33987,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33988,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE5", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33989,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE6", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33990,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE7", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33991,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE8", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33992,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE9", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33993,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE10", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33994,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE11", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33995,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE12", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33996,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE13", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33997,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE14", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33998,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE15", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33999,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE16", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34000,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE17", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34001,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE18", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34002,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE19", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34003,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE20", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34004,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE21", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34005,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE22", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34006,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE23", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34007,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE24", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34008,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE25", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34009,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE26", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34010,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE27", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34011,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE28", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34012,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE29", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34013,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE30", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34014,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE31", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34015,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_TEXTURE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34016,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "REPEAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10497,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CLAMP_TO_EDGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33071,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MIRRORED_REPEAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33648,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35664,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35665,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35666,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35667,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35668,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35669,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35670,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35671,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35672,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35673,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35674,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35675,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35676,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35678,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_CUBE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35680,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_ENABLED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34338,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34339,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_STRIDE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34340,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34341,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34922,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_POINTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34373,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34975,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35738,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_FORMAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35739,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COMPILE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35713,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36336,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36337,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36338,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36339,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36340,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36341,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36160,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36161,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32854,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RGB5_A1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32855,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RGB565", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36194,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT16", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33189,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_INDEX8", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36168,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34041,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_WIDTH", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36162,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_HEIGHT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36163,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_INTERNAL_FORMAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36164,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_RED_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36176,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_GREEN_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36177,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BLUE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36178,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_ALPHA_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36179,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_DEPTH_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36180,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_STENCIL_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36181,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36048,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36049,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36050,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36051,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_ATTACHMENT0", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36064,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36096,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36128,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33306,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_COMPLETE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36053,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36054,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36055,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36057,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_UNSUPPORTED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36061,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36006,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36007,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_RENDERBUFFER_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_FRAMEBUFFER_OPERATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1286,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_FLIP_Y_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37440,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37441,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "CONTEXT_LOST_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37442,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37443,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext, "BROWSER_DEFAULT_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37444,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "canvas", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "canvas_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferWidth", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawingBufferWidth_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferHeight", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawingBufferHeight_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferColorSpace", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawingBufferColorSpace_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawingBufferColorSpace_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "unpackColorSpace", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "unpackColorSpace_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "unpackColorSpace_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 256,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_BUFFER_BIT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 16384,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POINTS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_LOOP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_STRIP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_STRIP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_FAN", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ZERO", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 768,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 769,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 770,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 771,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 772,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 773,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 774,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 775,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA_SATURATE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 776,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_ADD", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32774,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32777,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32777,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34877,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_SUBTRACT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32778,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_REVERSE_SUBTRACT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32779,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32968,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32969,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32970,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32971,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32769,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32770,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32771,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32772,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_COLOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32773,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34962,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34963,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34964,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34965,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STREAM_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35040,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STATIC_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35044,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DYNAMIC_DRAW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35048,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34660,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_USAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34661,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_VERTEX_ATTRIB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34342,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1028,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BACK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1029,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_AND_BACK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1032,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3553,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2884,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3042,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DITHER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2960,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2929,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_TEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3089,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FILL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32823,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32926,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32928,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NO_ERROR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_ENUM", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1280,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1281,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_OPERATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1282,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "OUT_OF_MEMORY", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1285,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2304,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CCW", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2305,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_WIDTH", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2849,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_POINT_SIZE_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33901,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_LINE_WIDTH_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33902,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE_MODE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2885,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2886,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_RANGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2928,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2930,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2931,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2932,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2961,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2962,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2964,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2965,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_PASS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2966,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_REF", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2967,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_VALUE_MASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2963,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2968,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FUNC", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34816,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34817,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34818,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34819,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_REF", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36003,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_VALUE_MASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36004,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36005,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VIEWPORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2978,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_BOX", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3088,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_CLEAR_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3106,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_WRITEMASK", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3107,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_ALIGNMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3317,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "PACK_ALIGNMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3333,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3379,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VIEWPORT_DIMS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3386,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SUBPIXEL_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3408,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RED_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3410,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREEN_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3411,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLUE_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3412,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3413,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3414,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3415,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10752,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FACTOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32824,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32873,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_BUFFERS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32936,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32937,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_VALUE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32938,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_INVERT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32939,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPRESSED_TEXTURE_FORMATS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34467,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DONT_CARE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4352,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FASTEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4353,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NICEST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4354,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GENERATE_MIPMAP_HINT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33170,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BYTE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5120,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_BYTE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5121,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5122,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5123,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5124,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5125,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5126,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6402,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6406,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6407,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6408,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6409,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE_ALPHA", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 6410,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_4_4_4_4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32819,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_5_5_1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32820,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_6_5", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33635,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAGMENT_SHADER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35632,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_SHADER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35633,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_ATTRIBS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34921,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36347,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VARYING_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36348,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35661,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35660,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_IMAGE_UNITS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34930,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36349,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADER_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35663,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DELETE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35712,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINK_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35714,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VALIDATE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35715,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ATTACHED_SHADERS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35717,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_UNIFORMS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35718,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_ATTRIBUTES", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35721,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADING_LANGUAGE_VERSION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35724,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_PROGRAM", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35725,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEVER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 512,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LESS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 513,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "EQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 514,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 515,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREATER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 516,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NOTEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 517,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GEQUAL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 518,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALWAYS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 519,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "KEEP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7680,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPLACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7681,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7682,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7683,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVERT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5386,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR_WRAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34055,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR_WRAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34056,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VENDOR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7936,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7937,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERSION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 7938,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9728,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9729,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9984,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_NEAREST", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9985,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9986,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_LINEAR", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 9987,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MAG_FILTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10240,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MIN_FILTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10241,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_S", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10242,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_T", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10243,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 5890,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34067,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_CUBE_MAP", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34068,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34069,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34070,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34071,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34072,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34073,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34074,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34076,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE0", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33984,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33985,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33986,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33987,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33988,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE5", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33989,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE6", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33990,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE7", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33991,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE8", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33992,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE9", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33993,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE10", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33994,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE11", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33995,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE12", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33996,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE13", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33997,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE14", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33998,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE15", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33999,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE16", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34000,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE17", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34001,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE18", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34002,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE19", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34003,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE20", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34004,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE21", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34005,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE22", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34006,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE23", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34007,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE24", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34008,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE25", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34009,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE26", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34010,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE27", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34011,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE28", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34012,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE29", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34013,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE30", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34014,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE31", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34015,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_TEXTURE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34016,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPEAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 10497,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CLAMP_TO_EDGE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33071,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MIRRORED_REPEAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33648,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35664,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35665,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35666,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35667,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35668,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35669,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35670,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35671,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35672,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35673,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT2", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35674,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT3", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35675,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35676,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_2D", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35678,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_CUBE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35680,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34338,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34339,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34340,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34341,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34922,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34373,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34975,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35738,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35739,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPILE_STATUS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 35713,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36336,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36337,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_FLOAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36338,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36339,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36340,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_INT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36341,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36160,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36161,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA4", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32854,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB5_A1", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 32855,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB565", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36194,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT16", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33189,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_INDEX8", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36168,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34041,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_WIDTH", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36162,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_HEIGHT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36163,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36164,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_RED_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36176,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_GREEN_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36177,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BLUE_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36178,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_ALPHA_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36179,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_DEPTH_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36180,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_STENCIL_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36181,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36048,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36049,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36050,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36051,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_ATTACHMENT0", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36064,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36096,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36128,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 33306,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_COMPLETE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36053,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36054,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36055,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36057,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_UNSUPPORTED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36061,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36006,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BINDING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 36007,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_RENDERBUFFER_SIZE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 34024,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_FRAMEBUFFER_OPERATION", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1286,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_FLIP_Y_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37440,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37441,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONTEXT_LOST_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37442,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37443,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BROWSER_DEFAULT_WEBGL", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 37444,
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "activeTexture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "activeTexture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "attachShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "attachShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindAttribLocation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bindAttribLocation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindRenderbuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bindRenderbuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendColor", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "blendColor", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "blendEquation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquationSeparate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "blendEquationSeparate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFunc", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "blendFunc", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFuncSeparate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "blendFuncSeparate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bufferData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferSubData", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bufferSubData", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "checkFramebufferStatus", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "checkFramebufferStatus", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compileShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "compileShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "compressedTexImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexSubImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "compressedTexSubImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "copyTexImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexSubImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "copyTexSubImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createFramebuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createFramebuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createRenderbuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createRenderbuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createTexture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "createTexture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "cullFace", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "cullFace", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteFramebuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteFramebuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteRenderbuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteRenderbuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteTexture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "deleteTexture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthFunc", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "depthFunc", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthMask", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "depthMask", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthRange", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "depthRange", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "detachShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "detachShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disable", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "disable", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enable", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "enable", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "finish", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "finish", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "flush", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "flush", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferRenderbuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "framebufferRenderbuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferTexture2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "framebufferTexture2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "frontFace", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "frontFace", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "generateMipmap", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "generateMipmap", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveAttrib", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getActiveAttrib", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveUniform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getActiveUniform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttachedShaders", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getAttachedShaders", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttribLocation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getAttribLocation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getBufferParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getBufferParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getContextAttributes", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getContextAttributes", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getError", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getError", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getExtension", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getExtension", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getFramebufferAttachmentParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getFramebufferAttachmentParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramInfoLog", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getProgramInfoLog", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getProgramParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getRenderbufferParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getRenderbufferParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderInfoLog", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getShaderInfoLog", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getShaderParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderPrecisionFormat", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getShaderPrecisionFormat", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderSource", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getShaderSource", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getSupportedExtensions", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getSupportedExtensions", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getTexParameter", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getTexParameter", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniform", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getUniform", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniformLocation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getUniformLocation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttrib", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getVertexAttrib", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttribOffset", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "getVertexAttribOffset", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "hint", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "hint", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isContextLost", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isContextLost", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isEnabled", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isEnabled", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isFramebuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isFramebuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isRenderbuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isRenderbuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isShader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isShader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isTexture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "isTexture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "lineWidth", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "lineWidth", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "linkProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "linkProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "pixelStorei", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "pixelStorei", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "polygonOffset", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "polygonOffset", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "readPixels", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "readPixels", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "renderbufferStorage", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "renderbufferStorage", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "sampleCoverage", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "sampleCoverage", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "shaderSource", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "shaderSource", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFunc", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilFunc", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFuncSeparate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilFuncSeparate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMask", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilMask", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMaskSeparate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilMaskSeparate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOp", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilOp", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOpSeparate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "stencilOpSeparate", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "texImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameterf", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "texParameterf", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameteri", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "texParameteri", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texSubImage2D", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "texSubImage2D", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "useProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "useProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "validateProgram", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "validateProgram", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindBuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bindBuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindFramebuffer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bindFramebuffer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindTexture", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "bindTexture", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clear", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "clear", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearColor", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "clearColor", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearDepth", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "clearDepth", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearStencil", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "clearStencil", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "colorMask", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "colorMask", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disableVertexAttribArray", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "disableVertexAttribArray", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawArrays", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawArrays", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawElements", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "drawElements", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enableVertexAttribArray", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "enableVertexAttribArray", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "scissor", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "scissor", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform1f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform1fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1i", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform1i", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1iv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform1iv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform2f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform2fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2i", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform2i", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2iv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform2iv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform3f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform3fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3i", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform3i", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3iv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform3iv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform4f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform4fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4i", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform4i", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4iv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniform4iv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix2fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniformMatrix2fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix3fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniformMatrix3fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix4fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "uniformMatrix4fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib1f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib1fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib2f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib2fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib3f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib3fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4f", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib4f", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4fv", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttrib4fv", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttribPointer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "vertexAttribPointer", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "viewport", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "viewport", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "makeXRCompatible", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "WebGLRenderingContext.prototype", "makeXRCompatible", arguments);
        },
    });
})();
(function () { // WebGLBuffer
    WebGLBuffer = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(WebGLBuffer, "WebGLBuffer");
})();
(function () { // WebGLProgram
    WebGLProgram = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(WebGLProgram, "WebGLProgram");
})();
(function () { // XMLHttpRequestEventTarget
    XMLHttpRequestEventTarget = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
    Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadstart_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadstart_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onprogress_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onprogress_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onabort_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onabort_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onerror_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onerror_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onload_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onload_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "ontimeout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "ontimeout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadend_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequestEventTarget.prototype", "onloadend_set", arguments);
        },
    });
})();
(function () { // XMLHttpRequest
    XMLHttpRequest = function () {
    };
    v9ng.toolsFunc.ctorGuard(XMLHttpRequest, "XMLHttpRequest");
    Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "onreadystatechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "onreadystatechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "readyState_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "timeout_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "timeout_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "withCredentials_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "withCredentials_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "upload_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseURL_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "status_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "statusText_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseType_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseType_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "response_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseText_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "responseXML_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 4,
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "abort", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "getAllResponseHeaders", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "getResponseHeader", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "open", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "overrideMimeType", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "send", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "XMLHttpRequest.prototype", "setRequestHeader", arguments);
        },
    });
})();
(function () { // BatteryManager
    BatteryManager = function () {
        return v9ng.toolsFunc.throwError('TypeError', 'Illegal constructor');
    };
    v9ng.toolsFunc.ctorGuard(BatteryManager, "BatteryManager");
    Object.setPrototypeOf(BatteryManager.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "charging", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "charging_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "chargingTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "chargingTime_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "dischargingTime", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "dischargingTime_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "level", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "level_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingtimechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingtimechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onchargingtimechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "ondischargingtimechange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "ondischargingtimechange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(BatteryManager.prototype, "onlevelchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onlevelchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "BatteryManager.prototype", "onlevelchange_set", arguments);
        },
    });
})();
(function () { // Event
    Event = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'Event': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(Event, "Event");
    v9ng.toolsFunc.defineProperty(Event, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Event, "CAPTURING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Event, "AT_TARGET", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Event, "BUBBLING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "type", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "type_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "target", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "target_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "currentTarget", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "currentTarget_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "eventPhase", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "eventPhase_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "bubbles", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "bubbles_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "cancelable", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelable_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "defaultPrevented", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "defaultPrevented_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "composed", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "composed_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "timeStamp", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "timeStamp_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "srcElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "srcElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "returnValue", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "returnValue_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "returnValue_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "cancelBubble", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelBubble_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "cancelBubble_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "NONE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 0,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "CAPTURING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 1,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "AT_TARGET", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 2,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "BUBBLING_PHASE", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: 3,
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "composedPath", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "composedPath", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "initEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "initEvent", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "preventDefault", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "preventDefault", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "stopImmediatePropagation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "stopImmediatePropagation", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(Event.prototype, "stopPropagation", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "Event.prototype", "stopPropagation", arguments);
        },
    });
})();
(function () { // UIEvent
    UIEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'UIEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(UIEvent, "UIEvent");
    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "view", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "view_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "detail", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "detail_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "sourceCapabilities", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "sourceCapabilities_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "which", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "which_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(UIEvent.prototype, "initUIEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "UIEvent.prototype", "initUIEvent", arguments);
        },
    });
})();
(function () { // MouseEvent
    MouseEvent = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Failed to construct 'MouseEvent': 1 argument required, but only 0 present.");
    };
    v9ng.toolsFunc.ctorGuard(MouseEvent, "MouseEvent");
    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "screenX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "screenX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "screenY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "screenY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "clientX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "clientX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "clientY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "clientY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "ctrlKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "ctrlKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "shiftKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "shiftKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "altKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "altKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "metaKey", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "metaKey_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "button", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "button_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "buttons", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "buttons_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "relatedTarget", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "relatedTarget_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "pageX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "pageX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "pageY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "pageY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "x", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "x_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "y", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "y_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "offsetX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "offsetX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "offsetY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "offsetY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "movementX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "movementX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "movementY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "movementY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "fromElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "fromElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "toElement", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "toElement_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "layerX", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "layerX_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "layerY", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "layerY_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "getModifierState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "getModifierState", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(MouseEvent.prototype, "initMouseEvent", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "MouseEvent.prototype", "initMouseEvent", arguments);
        },
    });
})();
(function () { // window
    delete global;
    delete Buffer;
    delete process;
    delete clearImmediate;
    delete setImmediate;
    delete SharedArrayBuffer;
    delete $jsDebugIsRegistered;
    delete fs;
    // delete VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL;
    delete globalThis[Symbol.toStringTag];
    delete WindowProperties;
    delete jsDocument;
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
    v9ng.toolsFunc.defineProperty(window, "setTimeout", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "setTimeout", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(window, "clearTimeout", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "window", "clearTimeout", arguments);
        },
    });
    eval = v9ng.toolsFunc.funcHook(eval, undefined, false, v9ng.toolsFunc.noopFunc, v9ng.toolsFunc.noopFunc);
})();
})();

/* Global Plugin */
(function () {
    (function () { // Save Log
        if (v9ng.config.saveLog) {
            const onEnterForLog = function (obj) {
                try {
                    v9ng.toolsFunc.saveLog(obj.args);
                } catch (e) { }
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
    (function () { // Plugins
        v9ng.toolsFunc.createPlugin({
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "PDF Viewer",
            "mimeTypes": [{
                "type": 'application/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }, {
                "type": 'text/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }]
        });
        v9ng.toolsFunc.createPlugin({
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Chrome PDF Viewer",
            "mimeTypes": [{
                "type": 'application/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }, {
                "type": 'text/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }]
        });
        v9ng.toolsFunc.createPlugin({
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Chromium PDF Viewer",
            "mimeTypes": [{
                "type": 'application/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }, {
                "type": 'text/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }]
        });
        v9ng.toolsFunc.createPlugin({
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Microsoft Edge PDF Viewer",
            "mimeTypes": [{
                "type": 'application/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }, {
                "type": 'text/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }]
        });
        v9ng.toolsFunc.createPlugin({
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "WebKit built-in PDF",
            "mimeTypes": [{
                "type": 'application/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }, {
                "type": 'text/pdf',
                "suffixes": 'pdf',
                "description": 'Portable Document Format'
            }]
        });
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

    let metaTag = document.createElement("meta");
    metaTag.content = "---- CONTENT ----";
    let headTag = document.createElement("head");
    v9ng.toolsFunc.setProtoProp.call(metaTag, "parentNode", headTag);
    // let bodyTag = document.createElement("body");
    document.createElement("body");

    location.protocol = 'https:';
    location.hostname = '10.26.20.10';

    v9ng.envmtImpl.Element_prototype$innerHTML_set = function (htmlStr) {
        // <span lang="zh" style="font-family:mmll;font-size:160px">fontTest</span>
        let style = {
            "font-size": "160px",
            "font-family": "mmll",
        };
        style = v9ng.toolsFunc.createProxyObj(style, CSSStyleDeclaration, "style");
        let tagJson = {
            "type": "span",
            "prop": {
                "lang": "zh",
                "style": style,
                "textContent": "fontTest",
            }
        }
        let span = document.createElement(tagJson["type"]);
        for (const key in tagJson["prop"]) {
            v9ng.toolsFunc.setProtoProp.call(span, key, tagJson["prop"][key]);
        }
        let collection = [];
        collection.push(span);
        collection = v9ng.toolsFunc.createProxyObj(collection, HTMLCollection, "HTMLCollection");
        v9ng.toolsFunc.setProtoProp.call(this, "children", collection);
    };

    v9ng.cache.canvas_2d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3VGIbddZB/BvT4TEtkSJkd4HKVKLBBT7IhWs6EUCiXkSLblgY8XY3N4rmKSUIAhitSKUIk3ykEwm6aWapHKDlvoSEggSS/viQ2mhpXmIhQYfErgIlqQmYGbLOmf2OXv2nJk5c9fZZ85a8ztP957Za+21ft+eefnvtVYTPgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEA0DM6eQHsx2rM364hmx/N+FutuzgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSWFRCgLytV0XUC9IqKaSoECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECKxMoLwA/b6dx6NpL0XEK/Fu89dxQ/tP0TZ3xpMXX1yZSr+jdL/0efLi5fjU9oejbV6KtrlntPule/3hP743bnr7uYh4bXLfVX32xv9CPHrrHfG9lfT6nfi5uD0+Hc/ElVhVnysZ2IJOTmUF+sUn7o+Iv4ymvT2euPSdseamXwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE8gUWB+iffPL9sbX7ckTcNrvFmCH1svOYhpGXY3frfDx13xtx384d0bQvCNCXBBSgr/+FEQH6kg+nywgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAicvsDBQHEa+D1yIJSersT+2qgrr4/zmI7hA/H2TXfH059467jLV/JzK9CPZCxuBfr0pYtnrAhfyW+HTggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUJbA/QN/0cFGAnvfwWYHe7O1aIEDPe5K0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFClwDxA787dbtoXY+dTjy6c7aKzubvt3tvm5dl53fPvHoyt3df3zg1/KJr2z2fbwqct4dvm24Ot4h9YeO/FW8pvx9bu9oEzyefzuKs3h3m//TmkC6bnqU9/3p1xHnHrpG3bbM/62H8GempzbzTt9B5t8/y+VfEHx/vKbNv5/v2b9vuT1f7Tz+JrujPQ52e/LzZKPSw5/nQG+rn4n4Vnl6cV5RfiYlyNnXg9firuiXsn55s/GHfHK3FuMtBL8fV4PJ6d/Ltbgb4dz8aV+Gg8H7984Jr0xeX4eGzHb05+dld8N56LnXhvvLPvMXsrboy742J8IP571n+64I24Oc7HZ+Jy/HvcH/82+383nq6/N+PGyXUfjGuz/ru26bvn41eeitj9ZO+m145ciT43n9anbR6Mpn0kmvbC5DzztFtD29yxr/ZdDdrmnsluDf2XUt694fUDRyNMB3P0OKr802NSBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBDZPYB6gD4O/w8Y6DA3noe21WUg8/e6x2N36vbjh3XOTkDuFhN3Z5d028f3gcJmzoocr0IdjPjrMnwb8/YC9f677fB6fm4X48+3stydt59ek4P32SYg6v+cPZkHqxSf+Ina3vjQ5p30emMfk5+lz09vP7YXv0zB8OO7hiwqHbavfr9EJxp8C9N+IVxeG1Snofi1umQTQ34gPxZ1xf9wWr8fL8ffx/vjRLDD/WHxrEnJ3AXoaykvxxfhw/Fe8GL80afdCPBp3xPfi0fjteDx+a18fKSz/9fjPA0/Z8Np0QeovBfhpDK/HzfuC/y50T9elMb8aP7vv5/3+zu38aPkV6NPw/PzsmZ2/FHHrrPYnDdDT89L/zPt8/NCXVjbvb4YRESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhWYBigX52trj1sytOgdn5dFyI27U9H0/7pgZW57/nxhw6sEl8U9vZXraeVu4s+xwXo06D58iz07ProrwL+8XtenQTY6dM/S33R9vDDIHvRuFM/x219P/35w5NxvXPjm3v3f222Yj/10R97/5p07nzTvnDgTPqhzwnGnwL0RcF2t1r74XhuEnwPg/Dulv1Qehhop2uGK8n7ofxw1flwGovOVE/t0ycF9v1/d23TONNK+S7AT9e8HL8YaR4PxIXJavoU7Dc7sVyAftjLJMM65wTowxcrnv7EW9X+lTExAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAoUInDxA72/1/r8/+aW9MPjK3pbm0+3fp6t3v79vW/RuS+sEsygsX2Y17nEB+vTnsS+YTv/vB6Jv3/SNAwH2UdvX9/scvjzQFXkYuC7eRn66Tfc8wD8+QG/aX4iIn4m+3aIH62Tjf6kL0BcF5t1K77TavL/yO/2/+/QD6/Td7fHpyTbvKXRPn2GA3gXx6WfdqvSjfj/6IXl/jN2q+W6b+H4ft8abswC9a5O2eH8krk62fU+fpQP0/gsPaReB/XU++PJI/0WMo7Zw769AX2bHhUL+iBgmAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgVoE5gH6MgF2N+suVG6bz0bTXom2uTe2di9MzoP+if/7s3j3hqdnq9EXreatOUCfn/n+H7MV7otXwJ8kQP/nAy8F9J/A6wzQUxdHre5eVYDeDbV/DvpRQXr/vlfjVydBftqePX3SGekpqO9C8UW/iF2An4L2jQzQlz0uoZa/MuZBgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBCBeYCeBjw89/mwSXQrdNvm8xHxa73zwR+LtvmbiPijePum+yJtS73OAP3oLdwP30J9uFV7N+/h2eSHBZ/9+6YXCYbbyPdXG59kBXrEa7G1u723Bf7hIfoJx9+tQE/T7MLqq/FkXI4/iMfiK5Ptzruf9bdG71j6W7IPzxxP1wxXoPcfo6N+1l3XrSD/2/jXuBIf3ReYL7MdfNpiPs3r3vhmXIqPz1amn3AF+jOzs867gQ1XjS963o5bgX5YrQr5g2GYBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBGoW2B+gz1cyf+RAeDhddf61SOeTT4Plr+5tL/7A5Luu7dbuLbG79e3Ziul1BujDwDtVbriy/rAAc/pSwAsR8cBk6/n0mb5QcCnaZrv3ksBLEXFtds76fH7TgHt4Tvb83PQ48RbuKUCf95nOQZ+OY9HnBOPvB+j9QPu1uGWy0rs7p7zbev2u+O7s++G56IvOLB+G5H8XvxN/Et+MtA38MgF6ml4Xgqd/X4l/mLRNn+7+/ZXlaQxfiY/E5+OrB85t7wfu79t5p1n4QsfQc9H55MM6pu3Y5999bvLM9Lfub5s7J78Xi85NH75gUfNfGHMjQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUJDA/gC9G/g8jJ1PpQsE59ekcPn8LEhO309X5D4S/WvXGaCnMSw6f7w/nqNWAA/nndpF/O5kyim4ngemD0fEgxFx6x7HPHRPX3TBe/p32zw/yYCbdvu6A/Rpn9OAP/XXP3O7/7AtOf5+gJ6ap7D6gbiwb7vz9H131vkX4l/iofj9uBbvm9ytv/36MgF6d03X/lJ8PR6PZ4/8NenafCy+deDaYX9dwN+thu+36fezvfPs9Hmf12d6Ln3/bPJuVAefo1eibR6Mpn0kmvbCrE33zE/bXYu2eSia9guzc+v7Afru1rm9lzQOzn34+1XQHxFDJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCLwOIAvZTZTQPtq/sCzVLGvo5xHvKyQHsx2v7tlznrvNvWfR3DHuseky3ccz6etxw9bQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsvEBeoHja0+vOYt/dOh9P3ffGaQ9n4+4/3L5+b4DDAD1tc54+w1Xh3Qr0l+KLs3PRN26OJxiQAP0EWC4lQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcAYFyg3Qj9qK/QwWcrLFe9puvjsjfb4F+Qf3bbOfdpXvrUBPW5xfiItxNXYOhOQC9MGDZAX6WfzNMmcCBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEzJFBegD5fVX3bkeeBn6Eizqa6/zzu6fnrC85LTwH6G3FznI/PxCtxbt+Z5n02AboA/Sz+GpkzAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDA2RUoL0A/u7Va2cyHW7ivrOMN7yh7C/cNn5/hESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQJyBAz/MrsrUAvciyGTQBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkeOso3259c4jaXu1UTz8hrH5FYECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDIFhCgZxOutoM22r+KiM+utte19/bHTTRfXvtd3ZAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIZAgL0DLyxmhYeogvPx3ow9EuAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwKgCAvRRea+/80JDdOH59ZdcSwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIETllAgH7KBTjq9oWF6MLzDX6WDI0AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgeMFBOjHG53qFYWE6MLzU31K3JwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgVUICNBXoThyHxseogvPR66/7gkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWI+AAH09ztl32dAQXXieXVkdECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwKQIC9E2pxBLj2LAQXXi+RM1cQoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAOQIC9HJqNRnphoTowvPCnhvDJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEDgeAEB+vFGG3fFKYfowvONeyIMiAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBVQgI0FeheAp9nFKILjw/hVq7JQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC6xEQoK/HeZS7rDlEF56PUkWdEiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwKQIC9E2pxHWOY00huvD8OuujGQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC5QgI0Mup1aEjHTlEF55X8IyYAgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECxwsI0I83KuKKkUJ04XkR1TdIAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRWISBAX4XihvSx4hBdeL4hdTUMAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTWIyBAX4/z2u6yohBdeL62irkRAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbIiBA35RKrHAcmSG68HyFtdAVAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLlCAjQy6nViUZ6nSG68PxEyi4mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAmAQF6TdUczOWEIbrwvOJnwdQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEDheQIB+vFHRVywZogvPi66ywRMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsAoBAfoqFDe8j2NCdOH5htfP8AgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWI+AAH09zqd+l0NCdOH5qVfGAAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2BQBAfqmVGIN4xiE6MLzNZi7BQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC5QgI0Mup1UpGuhei/7CJ5ssr6VAnBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAib2gA8AAAI0UlEQVQQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoR+H9KYytBPX057AAAAABJRU5ErkJggg==";
    v9ng.cache.canvas_webgl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3VGIbddZB/BvT4TEtkSJkd4HKVKLBBT7IhWs6EUCiXkSLblgY8XY3N4rmKSUIAhitSKUIk3ykEwm6aWapHKDlvoSEggSS/viQ2mhpXmIhQYfErgIlqQmYGbLOmf2OXv2nJk5c9fZZ85a8ztP957Za+21ft+eefnvtVYTPgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEA0DM6eQHsx2rM364hmx/N+FutuzgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSWFRCgLytV0XUC9IqKaSoECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECKxMoLwA/b6dx6NpL0XEK/Fu89dxQ/tP0TZ3xpMXX1yZSr+jdL/0efLi5fjU9oejbV6KtrlntPule/3hP743bnr7uYh4bXLfVX32xv9CPHrrHfG9lfT6nfi5uD0+Hc/ElVhVnysZ2IJOTmUF+sUn7o+Iv4ymvT2euPSdseamXwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE8gUWB+iffPL9sbX7ckTcNrvFmCH1svOYhpGXY3frfDx13xtx384d0bQvCNCXBBSgr/+FEQH6kg+nywgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAicvsDBQHEa+D1yIJSersT+2qgrr4/zmI7hA/H2TXfH059467jLV/JzK9CPZCxuBfr0pYtnrAhfyW+HTggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUJbA/QN/0cFGAnvfwWYHe7O1aIEDPe5K0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFClwDxA787dbtoXY+dTjy6c7aKzubvt3tvm5dl53fPvHoyt3df3zg1/KJr2z2fbwqct4dvm24Ot4h9YeO/FW8pvx9bu9oEzyefzuKs3h3m//TmkC6bnqU9/3p1xHnHrpG3bbM/62H8GempzbzTt9B5t8/y+VfEHx/vKbNv5/v2b9vuT1f7Tz+JrujPQ52e/LzZKPSw5/nQG+rn4n4Vnl6cV5RfiYlyNnXg9firuiXsn55s/GHfHK3FuMtBL8fV4PJ6d/Ltbgb4dz8aV+Gg8H7984Jr0xeX4eGzHb05+dld8N56LnXhvvLPvMXsrboy742J8IP571n+64I24Oc7HZ+Jy/HvcH/82+383nq6/N+PGyXUfjGuz/ru26bvn41eeitj9ZO+m145ciT43n9anbR6Mpn0kmvbC5DzztFtD29yxr/ZdDdrmnsluDf2XUt694fUDRyNMB3P0OKr802NSBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBDZPYB6gD4O/w8Y6DA3noe21WUg8/e6x2N36vbjh3XOTkDuFhN3Z5d028f3gcJmzoocr0IdjPjrMnwb8/YC9f677fB6fm4X48+3stydt59ek4P32SYg6v+cPZkHqxSf+Ina3vjQ5p30emMfk5+lz09vP7YXv0zB8OO7hiwqHbavfr9EJxp8C9N+IVxeG1Snofi1umQTQ34gPxZ1xf9wWr8fL8ffx/vjRLDD/WHxrEnJ3AXoaykvxxfhw/Fe8GL80afdCPBp3xPfi0fjteDx+a18fKSz/9fjPA0/Z8Np0QeovBfhpDK/HzfuC/y50T9elMb8aP7vv5/3+zu38aPkV6NPw/PzsmZ2/FHHrrPYnDdDT89L/zPt8/NCXVjbvb4YRESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhWYBigX52trj1sytOgdn5dFyI27U9H0/7pgZW57/nxhw6sEl8U9vZXraeVu4s+xwXo06D58iz07ProrwL+8XtenQTY6dM/S33R9vDDIHvRuFM/x219P/35w5NxvXPjm3v3f222Yj/10R97/5p07nzTvnDgTPqhzwnGnwL0RcF2t1r74XhuEnwPg/Dulv1Qehhop2uGK8n7ofxw1flwGovOVE/t0ycF9v1/d23TONNK+S7AT9e8HL8YaR4PxIXJavoU7Dc7sVyAftjLJMM65wTowxcrnv7EW9X+lTExAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAoUInDxA72/1/r8/+aW9MPjK3pbm0+3fp6t3v79vW/RuS+sEsygsX2Y17nEB+vTnsS+YTv/vB6Jv3/SNAwH2UdvX9/scvjzQFXkYuC7eRn66Tfc8wD8+QG/aX4iIn4m+3aIH62Tjf6kL0BcF5t1K77TavL/yO/2/+/QD6/Td7fHpyTbvKXRPn2GA3gXx6WfdqvSjfj/6IXl/jN2q+W6b+H4ft8abswC9a5O2eH8krk62fU+fpQP0/gsPaReB/XU++PJI/0WMo7Zw769AX2bHhUL+iBgmAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgVoE5gH6MgF2N+suVG6bz0bTXom2uTe2di9MzoP+if/7s3j3hqdnq9EXreatOUCfn/n+H7MV7otXwJ8kQP/nAy8F9J/A6wzQUxdHre5eVYDeDbV/DvpRQXr/vlfjVydBftqePX3SGekpqO9C8UW/iF2An4L2jQzQlz0uoZa/MuZBgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBCBeYCeBjw89/mwSXQrdNvm8xHxa73zwR+LtvmbiPijePum+yJtS73OAP3oLdwP30J9uFV7N+/h2eSHBZ/9+6YXCYbbyPdXG59kBXrEa7G1u723Bf7hIfoJx9+tQE/T7MLqq/FkXI4/iMfiK5Ptzruf9bdG71j6W7IPzxxP1wxXoPcfo6N+1l3XrSD/2/jXuBIf3ReYL7MdfNpiPs3r3vhmXIqPz1amn3AF+jOzs867gQ1XjS963o5bgX5YrQr5g2GYBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBGoW2B+gz1cyf+RAeDhddf61SOeTT4Plr+5tL/7A5Luu7dbuLbG79e3Ziul1BujDwDtVbriy/rAAc/pSwAsR8cBk6/n0mb5QcCnaZrv3ksBLEXFtds76fH7TgHt4Tvb83PQ48RbuKUCf95nOQZ+OY9HnBOPvB+j9QPu1uGWy0rs7p7zbev2u+O7s++G56IvOLB+G5H8XvxN/Et+MtA38MgF6ml4Xgqd/X4l/mLRNn+7+/ZXlaQxfiY/E5+OrB85t7wfu79t5p1n4QsfQc9H55MM6pu3Y5999bvLM9Lfub5s7J78Xi85NH75gUfNfGHMjQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUJDA/gC9G/g8jJ1PpQsE59ekcPn8LEhO309X5D4S/WvXGaCnMSw6f7w/nqNWAA/nndpF/O5kyim4ngemD0fEgxFx6x7HPHRPX3TBe/p32zw/yYCbdvu6A/Rpn9OAP/XXP3O7/7AtOf5+gJ6ap7D6gbiwb7vz9H131vkX4l/iofj9uBbvm9ytv/36MgF6d03X/lJ8PR6PZ4/8NenafCy+deDaYX9dwN+thu+36fezvfPs9Hmf12d6Ln3/bPJuVAefo1eibR6Mpn0kmvbCrE33zE/bXYu2eSia9guzc+v7Afru1rm9lzQOzn34+1XQHxFDJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCLwOIAvZTZTQPtq/sCzVLGvo5xHvKyQHsx2v7tlznrvNvWfR3DHuseky3ccz6etxw9bQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsvEBeoHja0+vOYt/dOh9P3ffGaQ9n4+4/3L5+b4DDAD1tc54+w1Xh3Qr0l+KLs3PRN26OJxiQAP0EWC4lQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcAYFyg3Qj9qK/QwWcrLFe9puvjsjfb4F+Qf3bbOfdpXvrUBPW5xfiItxNXYOhOQC9MGDZAX6WfzNMmcCBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEzJFBegD5fVX3bkeeBn6Eizqa6/zzu6fnrC85LTwH6G3FznI/PxCtxbt+Z5n02AboA/Sz+GpkzAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDA2RUoL0A/u7Va2cyHW7ivrOMN7yh7C/cNn5/hESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQJyBAz/MrsrUAvciyGTQBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkZJgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiMLCNBHBtY9AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQhIEAvo05GSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIjCwjQRwbWPQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUISBAL6NORkmAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIwsI0EcG1j0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlCEgQC+jTkeOso3259c4jaXu1UTz8hrH5FYECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDIFhCgZxOutoM22r+KiM+utte19/bHTTRfXvtd3ZAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIZAgL0DLyxmhYeogvPx3ow9EuAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwKgCAvRRea+/80JDdOH59ZdcSwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIETllAgH7KBTjq9oWF6MLzDX6WDI0AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgeMFBOjHG53qFYWE6MLzU31K3JwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgVUICNBXoThyHxseogvPR66/7gkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWI+AAH09ztl32dAQXXieXVkdECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwKQIC9E2pxBLj2LAQXXi+RM1cQoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAOQIC9HJqNRnphoTowvPCnhvDJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEDgeAEB+vFGG3fFKYfowvONeyIMiAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBVQgI0FeheAp9nFKILjw/hVq7JQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC6xEQoK/HeZS7rDlEF56PUkWdEiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwKQIC9E2pxHWOY00huvD8OuujGQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC5QgI0Mup1aEjHTlEF55X8IyYAgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECxwsI0I83KuKKkUJ04XkR1TdIAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRWISBAX4XihvSx4hBdeL4hdTUMAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTWIyBAX4/z2u6yohBdeL62irkRAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbIiBA35RKrHAcmSG68HyFtdAVAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLlCAjQy6nViUZ6nSG68PxEyi4mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAmAQF6TdUczOWEIbrwvOJnwdQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEDheQIB+vFHRVywZogvPi66ywRMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsAoBAfoqFDe8j2NCdOH5htfP8AgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWI+AAH09zqd+l0NCdOH5qVfGAAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2BQBAfqmVGIN4xiE6MLzNZi7BQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC5QgI0Mup1UpGuhei/7CJ5ssr6VAnBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAib2gA8AAAI0UlEQVQQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoREKBXUkjTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE8AQF6np/WBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCJgAC9kkKaBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjkCQjQ8/y0JkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFKBATolRTSNAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgT0CAnuenNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIiBAr6SQpkGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECeQIC9Dw/rQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgEgEBeiWFNA0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyBMQoOf5aU2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEClQgI0CsppGkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJ6AAD3PT2sCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqERAgF5JIU2DAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIEBOh5floTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCUCAvRKCmkaBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAnIEDP89OaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoR+H9KYytBPX057AAAAABJRU5ErkJggg==";
    v9ng.cache.mouseEvents = [{ "clientX": 145, "clientY": 0, "timeStamp": 119.60000002384186, "type": "mousemove" }, { "clientX": 145, "clientY": 0, "timeStamp": 119.60000002384186, "type": "mousemove" }, { "clientX": 147, "clientY": 0, "timeStamp": 120.40000000596046, "type": "mousemove" }, { "clientX": 150, "clientY": 1, "timeStamp": 121.40000000596046, "type": "mousemove" }, { "clientX": 152, "clientY": 2, "timeStamp": 122.5, "type": "mousemove" }, { "clientX": 154, "clientY": 3, "timeStamp": 123.5, "type": "mousemove" }, { "clientX": 156, "clientY": 4, "timeStamp": 124.5, "type": "mousemove" }, { "clientX": 158, "clientY": 5, "timeStamp": 125.40000000596046, "type": "mousemove" }, { "clientX": 161, "clientY": 5, "timeStamp": 126.30000001192093, "type": "mousemove" }, { "clientX": 163, "clientY": 6, "timeStamp": 127.40000000596046, "type": "mousemove" }, { "clientX": 166, "clientY": 7, "timeStamp": 128.5, "type": "mousemove" }, { "clientX": 168, "clientY": 8, "timeStamp": 129.5, "type": "mousemove" }, { "clientX": 170, "clientY": 9, "timeStamp": 130.40000000596046, "type": "mousemove" }, { "clientX": 173, "clientY": 10, "timeStamp": 131.5, "type": "mousemove" }, { "clientX": 176, "clientY": 11, "timeStamp": 132.5, "type": "mousemove" }, { "clientX": 179, "clientY": 11, "timeStamp": 133.40000000596046, "type": "mousemove" }, { "clientX": 181, "clientY": 13, "timeStamp": 134.40000000596046, "type": "mousemove" }, { "clientX": 184, "clientY": 14, "timeStamp": 135.40000000596046, "type": "mousemove" }, { "clientX": 186, "clientY": 14, "timeStamp": 136.40000000596046, "type": "mousemove" }, { "clientX": 189, "clientY": 15, "timeStamp": 137.7000000178814, "type": "mousemove" }, { "clientX": 191, "clientY": 16, "timeStamp": 138.5, "type": "mousemove" }, { "clientX": 195, "clientY": 18, "timeStamp": 139.40000000596046, "type": "mousemove" }, { "clientX": 197, "clientY": 18, "timeStamp": 140.5, "type": "mousemove" }, { "clientX": 199, "clientY": 19, "timeStamp": 141.5, "type": "mousemove" }, { "clientX": 202, "clientY": 20, "timeStamp": 142.40000000596046, "type": "mousemove" }, { "clientX": 204, "clientY": 21, "timeStamp": 143.40000000596046, "type": "mousemove" }, { "clientX": 207, "clientY": 22, "timeStamp": 144.5, "type": "mousemove" }, { "clientX": 211, "clientY": 23, "timeStamp": 145.40000000596046, "type": "mousemove" }, { "clientX": 213, "clientY": 24, "timeStamp": 146.5, "type": "mousemove" }, { "clientX": 217, "clientY": 25, "timeStamp": 147.40000000596046, "type": "mousemove" }, { "clientX": 219, "clientY": 26, "timeStamp": 148.40000000596046, "type": "mousemove" }, { "clientX": 221, "clientY": 27, "timeStamp": 149.40000000596046, "type": "mousemove" }, { "clientX": 224, "clientY": 28, "timeStamp": 150.40000000596046, "type": "mousemove" }, { "clientX": 227, "clientY": 29, "timeStamp": 151.40000000596046, "type": "mousemove" }, { "clientX": 230, "clientY": 30, "timeStamp": 152.5, "type": "mousemove" }, { "clientX": 232, "clientY": 31, "timeStamp": 153.40000000596046, "type": "mousemove" }, { "clientX": 235, "clientY": 32, "timeStamp": 154.5, "type": "mousemove" }, { "clientX": 238, "clientY": 33, "timeStamp": 155.5, "type": "mousemove" }, { "clientX": 240, "clientY": 34, "timeStamp": 156.5, "type": "mousemove" }, { "clientX": 243, "clientY": 35, "timeStamp": 158.5, "type": "mousemove" }, { "clientX": 246, "clientY": 36, "timeStamp": 159.40000000596046, "type": "mousemove" }, { "clientX": 248, "clientY": 36, "timeStamp": 160.5, "type": "mousemove" }, { "clientX": 252, "clientY": 37, "timeStamp": 161.5, "type": "mousemove" }, { "clientX": 254, "clientY": 39, "timeStamp": 162.5, "type": "mousemove" }, { "clientX": 256, "clientY": 39, "timeStamp": 163.5, "type": "mousemove" }, { "clientX": 259, "clientY": 40, "timeStamp": 164.40000000596046, "type": "mousemove" }, { "clientX": 262, "clientY": 42, "timeStamp": 165.40000000596046, "type": "mousemove" }, { "clientX": 265, "clientY": 42, "timeStamp": 166.40000000596046, "type": "mousemove" }, { "clientX": 267, "clientY": 43, "timeStamp": 167.5, "type": "mousemove" }, { "clientX": 270, "clientY": 44, "timeStamp": 168.5, "type": "mousemove" }, { "clientX": 272, "clientY": 45, "timeStamp": 169.5, "type": "mousemove" }, { "clientX": 274, "clientY": 46, "timeStamp": 170.90000000596046, "type": "mousemove" }, { "clientX": 277, "clientY": 47, "timeStamp": 171.5, "type": "mousemove" }, { "clientX": 280, "clientY": 48, "timeStamp": 172.40000000596046, "type": "mousemove" }, { "clientX": 282, "clientY": 48, "timeStamp": 173.5, "type": "mousemove" }, { "clientX": 285, "clientY": 50, "timeStamp": 174.40000000596046, "type": "mousemove" }, { "clientX": 287, "clientY": 51, "timeStamp": 175.40000000596046, "type": "mousemove" }, { "clientX": 290, "clientY": 52, "timeStamp": 176.40000000596046, "type": "mousemove" }, { "clientX": 293, "clientY": 53, "timeStamp": 177.5, "type": "mousemove" }, { "clientX": 295, "clientY": 54, "timeStamp": 178.5, "type": "mousemove" }, { "clientX": 298, "clientY": 55, "timeStamp": 179.5, "type": "mousemove" }, { "clientX": 300, "clientY": 56, "timeStamp": 180.40000000596046, "type": "mousemove" }, { "clientX": 302, "clientY": 56, "timeStamp": 181.5, "type": "mousemove" }, { "clientX": 305, "clientY": 58, "timeStamp": 182.5, "type": "mousemove" }, { "clientX": 308, "clientY": 58, "timeStamp": 183.5, "type": "mousemove" }, { "clientX": 310, "clientY": 59, "timeStamp": 184.5, "type": "mousemove" }, { "clientX": 312, "clientY": 60, "timeStamp": 185.5, "type": "mousemove" }, { "clientX": 315, "clientY": 61, "timeStamp": 186.5, "type": "mousemove" }, { "clientX": 317, "clientY": 61, "timeStamp": 187.5, "type": "mousemove" }, { "clientX": 320, "clientY": 63, "timeStamp": 188.40000000596046, "type": "mousemove" }, { "clientX": 322, "clientY": 64, "timeStamp": 189.5, "type": "mousemove" }, { "clientX": 324, "clientY": 64, "timeStamp": 190.5, "type": "mousemove" }, { "clientX": 326, "clientY": 65, "timeStamp": 191.5, "type": "mousemove" }, { "clientX": 328, "clientY": 67, "timeStamp": 192.5, "type": "mousemove" }, { "clientX": 331, "clientY": 67, "timeStamp": 193.5, "type": "mousemove" }, { "clientX": 333, "clientY": 68, "timeStamp": 194.40000000596046, "type": "mousemove" }, { "clientX": 335, "clientY": 69, "timeStamp": 195.5, "type": "mousemove" }, { "clientX": 337, "clientY": 69, "timeStamp": 196.40000000596046, "type": "mousemove" }, { "clientX": 339, "clientY": 70, "timeStamp": 197.5, "type": "mousemove" }, { "clientX": 341, "clientY": 71, "timeStamp": 198.40000000596046, "type": "mousemove" }, { "clientX": 343, "clientY": 72, "timeStamp": 199.5, "type": "mousemove" }, { "clientX": 344, "clientY": 72, "timeStamp": 200.5, "type": "mousemove" }, { "clientX": 348, "clientY": 74, "timeStamp": 201.5, "type": "mousemove" }, { "clientX": 349, "clientY": 75, "timeStamp": 202.40000000596046, "type": "mousemove" }, { "clientX": 351, "clientY": 75, "timeStamp": 203.40000000596046, "type": "mousemove" }, { "clientX": 352, "clientY": 76, "timeStamp": 204.30000001192093, "type": "mousemove" }, { "clientX": 355, "clientY": 77, "timeStamp": 205.40000000596046, "type": "mousemove" }, { "clientX": 356, "clientY": 77, "timeStamp": 206.40000000596046, "type": "mousemove" }, { "clientX": 357, "clientY": 78, "timeStamp": 207.5, "type": "mousemove" }, { "clientX": 360, "clientY": 79, "timeStamp": 208.40000000596046, "type": "mousemove" }, { "clientX": 361, "clientY": 80, "timeStamp": 209.5, "type": "mousemove" }, { "clientX": 362, "clientY": 80, "timeStamp": 210.40000000596046, "type": "mousemove" }, { "clientX": 364, "clientY": 81, "timeStamp": 211.5, "type": "mousemove" }, { "clientX": 365, "clientY": 82, "timeStamp": 212.5, "type": "mousemove" }, { "clientX": 367, "clientY": 82, "timeStamp": 213.5, "type": "mousemove" }, { "clientX": 368, "clientY": 83, "timeStamp": 214.5, "type": "mousemove" }, { "clientX": 370, "clientY": 84, "timeStamp": 215.40000000596046, "type": "mousemove" }, { "clientX": 372, "clientY": 84, "timeStamp": 217.5, "type": "mousemove" }, { "clientX": 373, "clientY": 85, "timeStamp": 218.5, "type": "mousemove" }, { "clientX": 374, "clientY": 85, "timeStamp": 219.40000000596046, "type": "mousemove" }, { "clientX": 375, "clientY": 86, "timeStamp": 220.60000002384186, "type": "mousemove" }, { "clientX": 376, "clientY": 87, "timeStamp": 221.40000000596046, "type": "mousemove" }, { "clientX": 377, "clientY": 87, "timeStamp": 222.40000000596046, "type": "mousemove" }, { "clientX": 379, "clientY": 87, "timeStamp": 223.5, "type": "mousemove" }, { "clientX": 379, "clientY": 88, "timeStamp": 224.5, "type": "mousemove" }, { "clientX": 380, "clientY": 89, "timeStamp": 225.5, "type": "mousemove" }, { "clientX": 382, "clientY": 89, "timeStamp": 226.40000000596046, "type": "mousemove" }, { "clientX": 384, "clientY": 90, "timeStamp": 228.5, "type": "mousemove" }, { "clientX": 385, "clientY": 90, "timeStamp": 230.60000002384186, "type": "mousemove" }, { "clientX": 386, "clientY": 91, "timeStamp": 231.40000000596046, "type": "mousemove" }, { "clientX": 387, "clientY": 92, "timeStamp": 232.5, "type": "mousemove" }, { "clientX": 388, "clientY": 92, "timeStamp": 234.60000002384186, "type": "mousemove" }, { "clientX": 390, "clientY": 93, "timeStamp": 235.5, "type": "mousemove" }, { "clientX": 391, "clientY": 93, "timeStamp": 237.5, "type": "mousemove" }, { "clientX": 391, "clientY": 94, "timeStamp": 238.90000000596046, "type": "mousemove" }, { "clientX": 393, "clientY": 95, "timeStamp": 239.5, "type": "mousemove" }, { "clientX": 395, "clientY": 95, "timeStamp": 241.60000002384186, "type": "mousemove" }, { "clientX": 395, "clientY": 96, "timeStamp": 242.5, "type": "mousemove" }, { "clientX": 396, "clientY": 96, "timeStamp": 243.5, "type": "mousemove" }, { "clientX": 397, "clientY": 96, "timeStamp": 244.5, "type": "mousemove" }, { "clientX": 397, "clientY": 97, "timeStamp": 245.5, "type": "mousemove" }, { "clientX": 398, "clientY": 97, "timeStamp": 246.5, "type": "mousemove" }, { "clientX": 399, "clientY": 98, "timeStamp": 247.60000002384186, "type": "mousemove" }, { "clientX": 400, "clientY": 98, "timeStamp": 248.60000002384186, "type": "mousemove" }, { "clientX": 401, "clientY": 99, "timeStamp": 250.5, "type": "mousemove" }, { "clientX": 402, "clientY": 99, "timeStamp": 251.5, "type": "mousemove" }, { "clientX": 403, "clientY": 100, "timeStamp": 253.40000000596046, "type": "mousemove" }, { "clientX": 404, "clientY": 100, "timeStamp": 254.40000000596046, "type": "mousemove" }, { "clientX": 405, "clientY": 101, "timeStamp": 255.5, "type": "mousemove" }, { "clientX": 406, "clientY": 101, "timeStamp": 256.7000000178814, "type": "mousemove" }, { "clientX": 406, "clientY": 102, "timeStamp": 257.5, "type": "mousemove" }, { "clientX": 407, "clientY": 102, "timeStamp": 258.40000000596046, "type": "mousemove" }, { "clientX": 408, "clientY": 102, "timeStamp": 259.5, "type": "mousemove" }, { "clientX": 409, "clientY": 103, "timeStamp": 260.5, "type": "mousemove" }, { "clientX": 410, "clientY": 104, "timeStamp": 261.40000000596046, "type": "mousemove" }, { "clientX": 411, "clientY": 104, "timeStamp": 263.40000000596046, "type": "mousemove" }, { "clientX": 412, "clientY": 105, "timeStamp": 264.5, "type": "mousemove" }, { "clientX": 413, "clientY": 105, "timeStamp": 265.5, "type": "mousemove" }, { "clientX": 414, "clientY": 106, "timeStamp": 267.5, "type": "mousemove" }, { "clientX": 416, "clientY": 107, "timeStamp": 268.5, "type": "mousemove" }, { "clientX": 418, "clientY": 107, "timeStamp": 270.5, "type": "mousemove" }, { "clientX": 418, "clientY": 108, "timeStamp": 271.30000001192093, "type": "mousemove" }, { "clientX": 419, "clientY": 109, "timeStamp": 272.7000000178814, "type": "mousemove" }, { "clientX": 420, "clientY": 109, "timeStamp": 273.40000000596046, "type": "mousemove" }, { "clientX": 421, "clientY": 109, "timeStamp": 274.5, "type": "mousemove" }, { "clientX": 421, "clientY": 110, "timeStamp": 275.40000000596046, "type": "mousemove" }, { "clientX": 423, "clientY": 110, "timeStamp": 276.5, "type": "mousemove" }, { "clientX": 424, "clientY": 111, "timeStamp": 278.60000002384186, "type": "mousemove" }, { "clientX": 425, "clientY": 112, "timeStamp": 279.60000002384186, "type": "mousemove" }, { "clientX": 426, "clientY": 112, "timeStamp": 280.5, "type": "mousemove" }, { "clientX": 427, "clientY": 112, "timeStamp": 281.5, "type": "mousemove" }, { "clientX": 428, "clientY": 113, "timeStamp": 282.40000000596046, "type": "mousemove" }, { "clientX": 429, "clientY": 113, "timeStamp": 283.40000000596046, "type": "mousemove" }, { "clientX": 430, "clientY": 114, "timeStamp": 284.5, "type": "mousemove" }, { "clientX": 431, "clientY": 114, "timeStamp": 285.5, "type": "mousemove" }, { "clientX": 431, "clientY": 115, "timeStamp": 286.5, "type": "mousemove" }, { "clientX": 432, "clientY": 115, "timeStamp": 287.30000001192093, "type": "mousemove" }, { "clientX": 433, "clientY": 115, "timeStamp": 288.5, "type": "mousemove" }, { "clientX": 434, "clientY": 116, "timeStamp": 289.5, "type": "mousemove" }, { "clientX": 435, "clientY": 116, "timeStamp": 290.40000000596046, "type": "mousemove" }, { "clientX": 435, "clientY": 117, "timeStamp": 291.5, "type": "mousemove" }, { "clientX": 437, "clientY": 117, "timeStamp": 292.40000000596046, "type": "mousemove" }, { "clientX": 438, "clientY": 118, "timeStamp": 294.40000000596046, "type": "mousemove" }, { "clientX": 439, "clientY": 118, "timeStamp": 295.5, "type": "mousemove" }, { "clientX": 440, "clientY": 118, "timeStamp": 296.40000000596046, "type": "mousemove" }, { "clientX": 440, "clientY": 119, "timeStamp": 297.40000000596046, "type": "mousemove" }, { "clientX": 441, "clientY": 119, "timeStamp": 298.5, "type": "mousemove" }, { "clientX": 442, "clientY": 119, "timeStamp": 299.5, "type": "mousemove" }, { "clientX": 443, "clientY": 119, "timeStamp": 300.5, "type": "mousemove" }, { "clientX": 443, "clientY": 120, "timeStamp": 301.40000000596046, "type": "mousemove" }, { "clientX": 444, "clientY": 121, "timeStamp": 302.40000000596046, "type": "mousemove" }, { "clientX": 445, "clientY": 121, "timeStamp": 304.30000001192093, "type": "mousemove" }, { "clientX": 446, "clientY": 121, "timeStamp": 305.40000000596046, "type": "mousemove" }, { "clientX": 447, "clientY": 122, "timeStamp": 307.5, "type": "mousemove" }, { "clientX": 448, "clientY": 122, "timeStamp": 309.60000002384186, "type": "mousemove" }, { "clientX": 449, "clientY": 122, "timeStamp": 311.60000002384186, "type": "mousemove" }, { "clientX": 449, "clientY": 123, "timeStamp": 312.60000002384186, "type": "mousemove" }, { "clientX": 450, "clientY": 123, "timeStamp": 314.60000002384186, "type": "mousemove" }, { "clientX": 451, "clientY": 124, "timeStamp": 315.5, "type": "mousemove" }, { "clientX": 452, "clientY": 124, "timeStamp": 318.30000001192093, "type": "mousemove" }, { "clientX": 453, "clientY": 124, "timeStamp": 321.80000001192093, "type": "mousemove" }, { "clientX": 453, "clientY": 125, "timeStamp": 325.40000000596046, "type": "mousemove" }, { "clientX": 454, "clientY": 125, "timeStamp": 326.40000000596046, "type": "mousemove" }, { "clientX": 455, "clientY": 125, "timeStamp": 330.40000000596046, "type": "mousemove" }, { "clientX": 455, "clientY": 126, "timeStamp": 335.5, "type": "mousemove" }, { "clientX": 456, "clientY": 126, "timeStamp": 338.40000000596046, "type": "mousemove" }, { "clientX": 455, "clientY": 126, "timeStamp": 387.40000000596046, "type": "mousemove" }, { "clientX": 454, "clientY": 126, "timeStamp": 393.60000002384186, "type": "mousemove" }, { "clientX": 453, "clientY": 126, "timeStamp": 397.30000001192093, "type": "mousemove" }, { "clientX": 452, "clientY": 126, "timeStamp": 400.7000000178814, "type": "mousemove" }, { "clientX": 451, "clientY": 126, "timeStamp": 402.7000000178814, "type": "mousemove" }, { "clientX": 450, "clientY": 125, "timeStamp": 404.40000000596046, "type": "mousemove" }, { "clientX": 449, "clientY": 125, "timeStamp": 408.7000000178814, "type": "mousemove" }, { "clientX": 449, "clientY": 124, "timeStamp": 409.60000002384186, "type": "mousemove" }, { "clientX": 448, "clientY": 124, "timeStamp": 410.5, "type": "mousemove" }, { "clientX": 448, "clientY": 123, "timeStamp": 411.40000000596046, "type": "mousemove" }, { "clientX": 447, "clientY": 123, "timeStamp": 412.40000000596046, "type": "mousemove" }, { "clientX": 446, "clientY": 123, "timeStamp": 413.5, "type": "mousemove" }, { "clientX": 445, "clientY": 122, "timeStamp": 415.7000000178814, "type": "mousemove" }, { "clientX": 444, "clientY": 122, "timeStamp": 416.40000000596046, "type": "mousemove" }, { "clientX": 443, "clientY": 121, "timeStamp": 417.5, "type": "mousemove" }, { "clientX": 442, "clientY": 121, "timeStamp": 418.60000002384186, "type": "mousemove" }, { "clientX": 441, "clientY": 121, "timeStamp": 419.5, "type": "mousemove" }, { "clientX": 441, "clientY": 120, "timeStamp": 420.5, "type": "mousemove" }, { "clientX": 440, "clientY": 120, "timeStamp": 421.7000000178814, "type": "mousemove" }, { "clientX": 439, "clientY": 120, "timeStamp": 422.40000000596046, "type": "mousemove" }, { "clientX": 438, "clientY": 119, "timeStamp": 423.5, "type": "mousemove" }, { "clientX": 437, "clientY": 118, "timeStamp": 424.5, "type": "mousemove" }, { "clientX": 436, "clientY": 118, "timeStamp": 425.5, "type": "mousemove" }, { "clientX": 435, "clientY": 118, "timeStamp": 426.40000000596046, "type": "mousemove" }, { "clientX": 434, "clientY": 117, "timeStamp": 427.60000002384186, "type": "mousemove" }, { "clientX": 433, "clientY": 117, "timeStamp": 428.60000002384186, "type": "mousemove" }, { "clientX": 432, "clientY": 117, "timeStamp": 429.5, "type": "mousemove" }, { "clientX": 432, "clientY": 116, "timeStamp": 430.60000002384186, "type": "mousemove" }, { "clientX": 430, "clientY": 115, "timeStamp": 431.5, "type": "mousemove" }, { "clientX": 429, "clientY": 115, "timeStamp": 433.5, "type": "mousemove" }, { "clientX": 428, "clientY": 115, "timeStamp": 434.5, "type": "mousemove" }, { "clientX": 427, "clientY": 114, "timeStamp": 435.5, "type": "mousemove" }, { "clientX": 426, "clientY": 114, "timeStamp": 436.60000002384186, "type": "mousemove" }, { "clientX": 425, "clientY": 114, "timeStamp": 437.5, "type": "mousemove" }, { "clientX": 424, "clientY": 113, "timeStamp": 438.5, "type": "mousemove" }, { "clientX": 423, "clientY": 112, "timeStamp": 440.5, "type": "mousemove" }, { "clientX": 422, "clientY": 112, "timeStamp": 441.40000000596046, "type": "mousemove" }, { "clientX": 421, "clientY": 112, "timeStamp": 443.60000002384186, "type": "mousemove" }, { "clientX": 420, "clientY": 111, "timeStamp": 444.5, "type": "mousemove" }, { "clientX": 419, "clientY": 111, "timeStamp": 446.60000002384186, "type": "mousemove" }, { "clientX": 418, "clientY": 111, "timeStamp": 447.5, "type": "mousemove" }, { "clientX": 417, "clientY": 111, "timeStamp": 448.5, "type": "mousemove" }, { "clientX": 417, "clientY": 110, "timeStamp": 449.5, "type": "mousemove" }, { "clientX": 416, "clientY": 110, "timeStamp": 451.60000002384186, "type": "mousemove" }, { "clientX": 416, "clientY": 109, "timeStamp": 452.5, "type": "mousemove" }, { "clientX": 415, "clientY": 109, "timeStamp": 453.40000000596046, "type": "mousemove" }, { "clientX": 414, "clientY": 109, "timeStamp": 455.5, "type": "mousemove" }, { "clientX": 413, "clientY": 109, "timeStamp": 459.40000000596046, "type": "mousemove" }, { "clientX": 413, "clientY": 108, "timeStamp": 460.5, "type": "mousemove" }, { "clientX": 414, "clientY": 108, "timeStamp": 539.9000000059605, "type": "mousemove" }, { "clientX": 414, "clientY": 108, "timeStamp": 561.3000000119209, "type": "mousedown" }, { "clientX": 415, "clientY": 108, "timeStamp": 580.9000000059605, "type": "mousemove" }, { "clientX": 416, "clientY": 108, "timeStamp": 596, "type": "mousemove" }, { "clientX": 416, "clientY": 109, "timeStamp": 604.5, "type": "mousemove" }, { "clientX": 417, "clientY": 109, "timeStamp": 607.1000000238419, "type": "mousemove" }, { "clientX": 417, "clientY": 110, "timeStamp": 608.8000000119209, "type": "mousemove" }, { "clientX": 418, "clientY": 111, "timeStamp": 613.8000000119209, "type": "mousemove" }, { "clientX": 419, "clientY": 111, "timeStamp": 618.8000000119209, "type": "mousemove" }, { "clientX": 419, "clientY": 112, "timeStamp": 620.3000000119209, "type": "mousemove" }, { "clientX": 420, "clientY": 113, "timeStamp": 621.6000000238419, "type": "mousemove" }, { "clientX": 420, "clientY": 114, "timeStamp": 624.6000000238419, "type": "mousemove" }, { "clientX": 421, "clientY": 114, "timeStamp": 626.5, "type": "mousemove" }, { "clientX": 421, "clientY": 115, "timeStamp": 628.6000000238419, "type": "mousemove" }, { "clientX": 422, "clientY": 116, "timeStamp": 631.5, "type": "mousemove" }, { "clientX": 423, "clientY": 116, "timeStamp": 633.5, "type": "mousemove" }, { "clientX": 423, "clientY": 117, "timeStamp": 635.6000000238419, "type": "mousemove" }, { "clientX": 423, "clientY": 118, "timeStamp": 636.4000000059605, "type": "mousemove" }, { "clientX": 424, "clientY": 118, "timeStamp": 637.5, "type": "mousemove" }, { "clientX": 424, "clientY": 119, "timeStamp": 639.4000000059605, "type": "mousemove" }, { "clientX": 425, "clientY": 119, "timeStamp": 640.4000000059605, "type": "mousemove" }, { "clientX": 425, "clientY": 120, "timeStamp": 641.4000000059605, "type": "mousemove" }, { "clientX": 426, "clientY": 121, "timeStamp": 643.4000000059605, "type": "mousemove" }, { "clientX": 427, "clientY": 121, "timeStamp": 644.4000000059605, "type": "mousemove" }, { "clientX": 427, "clientY": 122, "timeStamp": 645.4000000059605, "type": "mousemove" }, { "clientX": 428, "clientY": 123, "timeStamp": 647.5, "type": "mousemove" }, { "clientX": 429, "clientY": 124, "timeStamp": 650.3000000119209, "type": "mousemove" }, { "clientX": 430, "clientY": 125, "timeStamp": 652.6000000238419, "type": "mousemove" }, { "clientX": 430, "clientY": 126, "timeStamp": 653.5, "type": "mousemove" }, { "clientX": 431, "clientY": 126, "timeStamp": 654.6000000238419, "type": "mousemove" }, { "clientX": 432, "clientY": 127, "timeStamp": 656.5, "type": "mousemove" }, { "clientX": 432, "clientY": 128, "timeStamp": 658.6000000238419, "type": "mousemove" }, { "clientX": 433, "clientY": 128, "timeStamp": 659.6000000238419, "type": "mousemove" }, { "clientX": 434, "clientY": 128, "timeStamp": 661.4000000059605, "type": "mousemove" }, { "clientX": 435, "clientY": 130, "timeStamp": 662.4000000059605, "type": "mousemove" }, { "clientX": 436, "clientY": 130, "timeStamp": 665.2000000178814, "type": "mousemove" }, { "clientX": 436, "clientY": 131, "timeStamp": 666.3000000119209, "type": "mousemove" }, { "clientX": 437, "clientY": 132, "timeStamp": 668.3000000119209, "type": "mousemove" }, { "clientX": 438, "clientY": 132, "timeStamp": 670.5, "type": "mousemove" }, { "clientX": 439, "clientY": 133, "timeStamp": 673.4000000059605, "type": "mousemove" }, { "clientX": 439, "clientY": 134, "timeStamp": 674.6000000238419, "type": "mousemove" }, { "clientX": 440, "clientY": 134, "timeStamp": 677.6000000238419, "type": "mousemove" }, { "clientX": 440, "clientY": 135, "timeStamp": 679.5, "type": "mousemove" }, { "clientX": 441, "clientY": 135, "timeStamp": 681.5, "type": "mousemove" }, { "clientX": 442, "clientY": 136, "timeStamp": 686.2000000178814, "type": "mousemove" }, { "clientX": 443, "clientY": 136, "timeStamp": 690.3000000119209, "type": "mousemove" }, { "clientX": 443, "clientY": 137, "timeStamp": 695.4000000059605, "type": "mousemove" }, { "clientX": 443, "clientY": 138, "timeStamp": 756, "type": "mousemove" }, { "clientX": 444, "clientY": 138, "timeStamp": 763.8000000119209, "type": "mousemove" }, { "clientX": 444, "clientY": 138, "timeStamp": 766.5, "type": "mouseup" }, { "clientX": 444, "clientY": 138, "timeStamp": 770.6000000238419, "type": "mousemove" }, { "clientX": 445, "clientY": 138, "timeStamp": 780.8000000119209, "type": "mousemove" }, { "clientX": 445, "clientY": 139, "timeStamp": 789.3000000119209, "type": "mousemove" }, { "clientX": 445, "clientY": 140, "timeStamp": 801.5, "type": "mousemove" }, { "clientX": 445, "clientY": 141, "timeStamp": 815.9000000059605, "type": "mousemove" }, { "clientX": 445, "clientY": 142, "timeStamp": 824.8000000119209, "type": "mousemove" }, { "clientX": 445, "clientY": 143, "timeStamp": 829.4000000059605, "type": "mousemove" }, { "clientX": 444, "clientY": 143, "timeStamp": 831.7000000178814, "type": "mousemove" }, { "clientX": 444, "clientY": 144, "timeStamp": 836.4000000059605, "type": "mousemove" }, { "clientX": 443, "clientY": 144, "timeStamp": 837.6000000238419, "type": "mousemove" }, { "clientX": 442, "clientY": 145, "timeStamp": 841.3000000119209, "type": "mousemove" }, { "clientX": 442, "clientY": 146, "timeStamp": 843.6000000238419, "type": "mousemove" }, { "clientX": 441, "clientY": 146, "timeStamp": 847.4000000059605, "type": "mousemove" }, { "clientX": 441, "clientY": 147, "timeStamp": 849.6000000238419, "type": "mousemove" }, { "clientX": 440, "clientY": 148, "timeStamp": 852.6000000238419, "type": "mousemove" }, { "clientX": 440, "clientY": 149, "timeStamp": 856.6000000238419, "type": "mousemove" }, { "clientX": 439, "clientY": 149, "timeStamp": 857.5, "type": "mousemove" }, { "clientX": 439, "clientY": 150, "timeStamp": 858.6000000238419, "type": "mousemove" }, { "clientX": 439, "clientY": 151, "timeStamp": 861.3000000119209, "type": "mousemove" }, { "clientX": 438, "clientY": 151, "timeStamp": 862.5, "type": "mousemove" }, { "clientX": 437, "clientY": 152, "timeStamp": 864.6000000238419, "type": "mousemove" }, { "clientX": 436, "clientY": 153, "timeStamp": 867.4000000059605, "type": "mousemove" }, { "clientX": 436, "clientY": 154, "timeStamp": 868.4000000059605, "type": "mousemove" }, { "clientX": 436, "clientY": 155, "timeStamp": 870.5, "type": "mousemove" }, { "clientX": 435, "clientY": 155, "timeStamp": 871.5, "type": "mousemove" }, { "clientX": 435, "clientY": 156, "timeStamp": 872.4000000059605, "type": "mousemove" }, { "clientX": 434, "clientY": 156, "timeStamp": 874.4000000059605, "type": "mousemove" }, { "clientX": 434, "clientY": 157, "timeStamp": 875.5, "type": "mousemove" }, { "clientX": 434, "clientY": 158, "timeStamp": 876.4000000059605, "type": "mousemove" }, { "clientX": 433, "clientY": 158, "timeStamp": 877.4000000059605, "type": "mousemove" }, { "clientX": 433, "clientY": 159, "timeStamp": 878.5, "type": "mousemove" }, { "clientX": 432, "clientY": 159, "timeStamp": 879.5, "type": "mousemove" }, { "clientX": 432, "clientY": 160, "timeStamp": 880.5, "type": "mousemove" }, { "clientX": 432, "clientY": 161, "timeStamp": 882.5, "type": "mousemove" }, { "clientX": 431, "clientY": 162, "timeStamp": 883.5, "type": "mousemove" }, { "clientX": 430, "clientY": 162, "timeStamp": 885.6000000238419, "type": "mousemove" }, { "clientX": 430, "clientY": 163, "timeStamp": 886.4000000059605, "type": "mousemove" }, { "clientX": 429, "clientY": 163, "timeStamp": 888.5, "type": "mousemove" }, { "clientX": 429, "clientY": 164, "timeStamp": 889.4000000059605, "type": "mousemove" }, { "clientX": 428, "clientY": 165, "timeStamp": 891.5, "type": "mousemove" }, { "clientX": 428, "clientY": 166, "timeStamp": 892.4000000059605, "type": "mousemove" }, { "clientX": 427, "clientY": 166, "timeStamp": 894.5, "type": "mousemove" }, { "clientX": 426, "clientY": 167, "timeStamp": 895.4000000059605, "type": "mousemove" }, { "clientX": 426, "clientY": 168, "timeStamp": 897.4000000059605, "type": "mousemove" }, { "clientX": 425, "clientY": 168, "timeStamp": 898.4000000059605, "type": "mousemove" }, { "clientX": 425, "clientY": 169, "timeStamp": 900.4000000059605, "type": "mousemove" }, { "clientX": 423, "clientY": 170, "timeStamp": 901.5, "type": "mousemove" }, { "clientX": 423, "clientY": 171, "timeStamp": 904.5, "type": "mousemove" }, { "clientX": 422, "clientY": 171, "timeStamp": 905.5, "type": "mousemove" }, { "clientX": 422, "clientY": 172, "timeStamp": 906.5, "type": "mousemove" }, { "clientX": 421, "clientY": 172, "timeStamp": 907.5, "type": "mousemove" }, { "clientX": 420, "clientY": 173, "timeStamp": 909.4000000059605, "type": "mousemove" }, { "clientX": 420, "clientY": 174, "timeStamp": 910.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 175, "timeStamp": 912.5, "type": "mousemove" }, { "clientX": 418, "clientY": 175, "timeStamp": 913.5, "type": "mousemove" }, { "clientX": 417, "clientY": 176, "timeStamp": 915.5, "type": "mousemove" }, { "clientX": 416, "clientY": 176, "timeStamp": 917.4000000059605, "type": "mousemove" }, { "clientX": 416, "clientY": 177, "timeStamp": 918.5, "type": "mousemove" }, { "clientX": 415, "clientY": 178, "timeStamp": 920.4000000059605, "type": "mousemove" }, { "clientX": 414, "clientY": 178, "timeStamp": 921.5, "type": "mousemove" }, { "clientX": 414, "clientY": 179, "timeStamp": 922.4000000059605, "type": "mousemove" }, { "clientX": 413, "clientY": 179, "timeStamp": 923.5, "type": "mousemove" }, { "clientX": 412, "clientY": 180, "timeStamp": 925.5, "type": "mousemove" }, { "clientX": 411, "clientY": 180, "timeStamp": 929.3000000119209, "type": "mousemove" }, { "clientX": 410, "clientY": 181, "timeStamp": 930.6000000238419, "type": "mousemove" }, { "clientX": 410, "clientY": 182, "timeStamp": 931.7000000178814, "type": "mousemove" }, { "clientX": 409, "clientY": 182, "timeStamp": 933.6000000238419, "type": "mousemove" }, { "clientX": 408, "clientY": 183, "timeStamp": 936.2000000178814, "type": "mousemove" }, { "clientX": 407, "clientY": 183, "timeStamp": 938.6000000238419, "type": "mousemove" }, { "clientX": 406, "clientY": 184, "timeStamp": 940.5, "type": "mousemove" }, { "clientX": 405, "clientY": 184, "timeStamp": 942.5, "type": "mousemove" }, { "clientX": 404, "clientY": 185, "timeStamp": 945.7000000178814, "type": "mousemove" }, { "clientX": 403, "clientY": 186, "timeStamp": 947.7000000178814, "type": "mousemove" }, { "clientX": 402, "clientY": 186, "timeStamp": 949.6000000238419, "type": "mousemove" }, { "clientX": 401, "clientY": 186, "timeStamp": 952.6000000238419, "type": "mousemove" }, { "clientX": 401, "clientY": 187, "timeStamp": 953.6000000238419, "type": "mousemove" }, { "clientX": 400, "clientY": 187, "timeStamp": 955.6000000238419, "type": "mousemove" }, { "clientX": 399, "clientY": 187, "timeStamp": 956.6000000238419, "type": "mousemove" }, { "clientX": 399, "clientY": 188, "timeStamp": 957.4000000059605, "type": "mousemove" }, { "clientX": 398, "clientY": 188, "timeStamp": 959.5, "type": "mousemove" }, { "clientX": 397, "clientY": 188, "timeStamp": 962.7000000178814, "type": "mousemove" }, { "clientX": 397, "clientY": 189, "timeStamp": 963.6000000238419, "type": "mousemove" }, { "clientX": 396, "clientY": 189, "timeStamp": 965.5, "type": "mousemove" }, { "clientX": 396, "clientY": 190, "timeStamp": 966.6000000238419, "type": "mousemove" }, { "clientX": 395, "clientY": 190, "timeStamp": 967.6000000238419, "type": "mousemove" }, { "clientX": 394, "clientY": 190, "timeStamp": 969.6000000238419, "type": "mousemove" }, { "clientX": 393, "clientY": 190, "timeStamp": 972.6000000238419, "type": "mousemove" }, { "clientX": 392, "clientY": 191, "timeStamp": 975.5, "type": "mousemove" }, { "clientX": 391, "clientY": 191, "timeStamp": 979.9000000059605, "type": "mousemove" }, { "clientX": 390, "clientY": 191, "timeStamp": 981.4000000059605, "type": "mousemove" }, { "clientX": 389, "clientY": 192, "timeStamp": 985.7000000178814, "type": "mousemove" }, { "clientX": 388, "clientY": 192, "timeStamp": 989.5, "type": "mousemove" }, { "clientX": 387, "clientY": 192, "timeStamp": 994.9000000059605, "type": "mousemove" }, { "clientX": 386, "clientY": 192, "timeStamp": 996.6000000238419, "type": "mousemove" }, { "clientX": 385, "clientY": 192, "timeStamp": 1000.3000000119209, "type": "mousemove" }, { "clientX": 384, "clientY": 192, "timeStamp": 1004.3000000119209, "type": "mousemove" }, { "clientX": 383, "clientY": 192, "timeStamp": 1007.8000000119209, "type": "mousemove" }, { "clientX": 383, "clientY": 193, "timeStamp": 1008.9000000059605, "type": "mousemove" }, { "clientX": 382, "clientY": 193, "timeStamp": 1009.4000000059605, "type": "mousemove" }, { "clientX": 381, "clientY": 193, "timeStamp": 1012.7000000178814, "type": "mousemove" }, { "clientX": 380, "clientY": 194, "timeStamp": 1016.3000000119209, "type": "mousemove" }, { "clientX": 379, "clientY": 194, "timeStamp": 1019.3000000119209, "type": "mousemove" }, { "clientX": 378, "clientY": 194, "timeStamp": 1020.8000000119209, "type": "mousemove" }, { "clientX": 377, "clientY": 194, "timeStamp": 1024.6000000238419, "type": "mousemove" }, { "clientX": 376, "clientY": 194, "timeStamp": 1026.6000000238419, "type": "mousemove" }, { "clientX": 375, "clientY": 194, "timeStamp": 1030.300000011921, "type": "mousemove" }, { "clientX": 374, "clientY": 194, "timeStamp": 1031.4000000059605, "type": "mousemove" }, { "clientX": 373, "clientY": 194, "timeStamp": 1035.4000000059605, "type": "mousemove" }, { "clientX": 372, "clientY": 194, "timeStamp": 1038.300000011921, "type": "mousemove" }, { "clientX": 371, "clientY": 194, "timeStamp": 1042.300000011921, "type": "mousemove" }, { "clientX": 370, "clientY": 195, "timeStamp": 1044.300000011921, "type": "mousemove" }, { "clientX": 369, "clientY": 195, "timeStamp": 1049.300000011921, "type": "mousemove" }, { "clientX": 368, "clientY": 195, "timeStamp": 1057.300000011921, "type": "mousemove" }, { "clientX": 367, "clientY": 195, "timeStamp": 1066.300000011921, "type": "mousemove" }, { "clientX": 367, "clientY": 195, "timeStamp": 1148.800000011921, "type": "mousedown" }, { "clientX": 368, "clientY": 195, "timeStamp": 1162.4000000059605, "type": "mousemove" }, { "clientX": 369, "clientY": 195, "timeStamp": 1178.4000000059605, "type": "mousemove" }, { "clientX": 370, "clientY": 195, "timeStamp": 1183.9000000059605, "type": "mousemove" }, { "clientX": 371, "clientY": 195, "timeStamp": 1186.5, "type": "mousemove" }, { "clientX": 372, "clientY": 195, "timeStamp": 1191.4000000059605, "type": "mousemove" }, { "clientX": 373, "clientY": 195, "timeStamp": 1194.4000000059605, "type": "mousemove" }, { "clientX": 374, "clientY": 195, "timeStamp": 1198.4000000059605, "type": "mousemove" }, { "clientX": 375, "clientY": 195, "timeStamp": 1199.6000000238419, "type": "mousemove" }, { "clientX": 376, "clientY": 195, "timeStamp": 1202.6000000238419, "type": "mousemove" }, { "clientX": 377, "clientY": 195, "timeStamp": 1204.5, "type": "mousemove" }, { "clientX": 378, "clientY": 195, "timeStamp": 1207.4000000059605, "type": "mousemove" }, { "clientX": 379, "clientY": 195, "timeStamp": 1208.4000000059605, "type": "mousemove" }, { "clientX": 380, "clientY": 195, "timeStamp": 1211.4000000059605, "type": "mousemove" }, { "clientX": 380, "clientY": 194, "timeStamp": 1212.6000000238419, "type": "mousemove" }, { "clientX": 381, "clientY": 194, "timeStamp": 1213.5, "type": "mousemove" }, { "clientX": 382, "clientY": 194, "timeStamp": 1216.300000011921, "type": "mousemove" }, { "clientX": 383, "clientY": 193, "timeStamp": 1217.6000000238419, "type": "mousemove" }, { "clientX": 384, "clientY": 193, "timeStamp": 1218.300000011921, "type": "mousemove" }, { "clientX": 385, "clientY": 193, "timeStamp": 1221.5, "type": "mousemove" }, { "clientX": 386, "clientY": 193, "timeStamp": 1223.5, "type": "mousemove" }, { "clientX": 387, "clientY": 193, "timeStamp": 1224.300000011921, "type": "mousemove" }, { "clientX": 388, "clientY": 193, "timeStamp": 1226.4000000059605, "type": "mousemove" }, { "clientX": 388, "clientY": 192, "timeStamp": 1228.4000000059605, "type": "mousemove" }, { "clientX": 389, "clientY": 192, "timeStamp": 1229.4000000059605, "type": "mousemove" }, { "clientX": 390, "clientY": 192, "timeStamp": 1231.5, "type": "mousemove" }, { "clientX": 391, "clientY": 192, "timeStamp": 1232.5, "type": "mousemove" }, { "clientX": 392, "clientY": 192, "timeStamp": 1234.4000000059605, "type": "mousemove" }, { "clientX": 392, "clientY": 191, "timeStamp": 1236.5, "type": "mousemove" }, { "clientX": 393, "clientY": 191, "timeStamp": 1237.300000011921, "type": "mousemove" }, { "clientX": 394, "clientY": 191, "timeStamp": 1240.7000000178814, "type": "mousemove" }, { "clientX": 395, "clientY": 191, "timeStamp": 1241.4000000059605, "type": "mousemove" }, { "clientX": 396, "clientY": 191, "timeStamp": 1243.4000000059605, "type": "mousemove" }, { "clientX": 396, "clientY": 190, "timeStamp": 1244.4000000059605, "type": "mousemove" }, { "clientX": 397, "clientY": 190, "timeStamp": 1245.4000000059605, "type": "mousemove" }, { "clientX": 398, "clientY": 190, "timeStamp": 1248.6000000238419, "type": "mousemove" }, { "clientX": 399, "clientY": 189, "timeStamp": 1249.5, "type": "mousemove" }, { "clientX": 400, "clientY": 189, "timeStamp": 1252.4000000059605, "type": "mousemove" }, { "clientX": 401, "clientY": 189, "timeStamp": 1256.300000011921, "type": "mousemove" }, { "clientX": 402, "clientY": 189, "timeStamp": 1258.7000000178814, "type": "mousemove" }, { "clientX": 403, "clientY": 188, "timeStamp": 1260.6000000238419, "type": "mousemove" }, { "clientX": 404, "clientY": 188, "timeStamp": 1264.4000000059605, "type": "mousemove" }, { "clientX": 405, "clientY": 188, "timeStamp": 1267.7000000178814, "type": "mousemove" }, { "clientX": 406, "clientY": 188, "timeStamp": 1271.7000000178814, "type": "mousemove" }, { "clientX": 407, "clientY": 188, "timeStamp": 1274.4000000059605, "type": "mousemove" }, { "clientX": 408, "clientY": 188, "timeStamp": 1279.4000000059605, "type": "mousemove" }, { "clientX": 408, "clientY": 187, "timeStamp": 1282.800000011921, "type": "mousemove" }, { "clientX": 409, "clientY": 187, "timeStamp": 1286.300000011921, "type": "mousemove" }, { "clientX": 410, "clientY": 187, "timeStamp": 1292.4000000059605, "type": "mousemove" }, { "clientX": 411, "clientY": 187, "timeStamp": 1298.9000000059605, "type": "mousemove" }, { "clientX": 412, "clientY": 187, "timeStamp": 1305.7000000178814, "type": "mousemove" }, { "clientX": 413, "clientY": 187, "timeStamp": 1311.7000000178814, "type": "mousemove" }, { "clientX": 414, "clientY": 187, "timeStamp": 1315.7000000178814, "type": "mousemove" }, { "clientX": 415, "clientY": 187, "timeStamp": 1321.4000000059605, "type": "mousemove" }, { "clientX": 416, "clientY": 187, "timeStamp": 1324.4000000059605, "type": "mousemove" }, { "clientX": 417, "clientY": 187, "timeStamp": 1328.800000011921, "type": "mousemove" }, { "clientX": 418, "clientY": 187, "timeStamp": 1336.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 187, "timeStamp": 1346.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 188, "timeStamp": 1431.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 189, "timeStamp": 1440.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 190, "timeStamp": 1444.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 191, "timeStamp": 1451.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 192, "timeStamp": 1458.5, "type": "mousemove" }, { "clientX": 419, "clientY": 193, "timeStamp": 1463.5, "type": "mousemove" }, { "clientX": 419, "clientY": 194, "timeStamp": 1466.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 195, "timeStamp": 1471.9000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 196, "timeStamp": 1474.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 197, "timeStamp": 1478.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 198, "timeStamp": 1480.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 199, "timeStamp": 1483.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 200, "timeStamp": 1486.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 201, "timeStamp": 1489.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 202, "timeStamp": 1491.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 203, "timeStamp": 1493.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 204, "timeStamp": 1496.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 205, "timeStamp": 1497.7000000178814, "type": "mousemove" }, { "clientX": 419, "clientY": 206, "timeStamp": 1498.5, "type": "mousemove" }, { "clientX": 419, "clientY": 207, "timeStamp": 1501.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 208, "timeStamp": 1503.6000000238419, "type": "mousemove" }, { "clientX": 419, "clientY": 209, "timeStamp": 1505.5, "type": "mousemove" }, { "clientX": 419, "clientY": 210, "timeStamp": 1506.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 211, "timeStamp": 1508.5, "type": "mousemove" }, { "clientX": 419, "clientY": 212, "timeStamp": 1510.5, "type": "mousemove" }, { "clientX": 419, "clientY": 213, "timeStamp": 1511.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 214, "timeStamp": 1513.5, "type": "mousemove" }, { "clientX": 419, "clientY": 215, "timeStamp": 1515.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 217, "timeStamp": 1518.800000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 218, "timeStamp": 1520.5, "type": "mousemove" }, { "clientX": 419, "clientY": 219, "timeStamp": 1522.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 220, "timeStamp": 1523.300000011921, "type": "mousemove" }, { "clientX": 419, "clientY": 221, "timeStamp": 1525.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 222, "timeStamp": 1526.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 223, "timeStamp": 1528.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 224, "timeStamp": 1529.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 225, "timeStamp": 1530.5, "type": "mousemove" }, { "clientX": 419, "clientY": 226, "timeStamp": 1532.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 227, "timeStamp": 1533.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 228, "timeStamp": 1534.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 230, "timeStamp": 1536.4000000059605, "type": "mousemove" }, { "clientX": 419, "clientY": 231, "timeStamp": 1538.5, "type": "mousemove" }, { "clientX": 419, "clientY": 232, "timeStamp": 1540.5, "type": "mousemove" }];
})();
/* Proxy Objects */
(function () {
    sessionStorage = v9ng.toolsFunc.objProxy(sessionStorage, "sessionStorage");
    localStorage = v9ng.toolsFunc.objProxy(localStorage, "localStorage");
    location = v9ng.toolsFunc.objProxy(location, "location");
    document = v9ng.toolsFunc.objProxy(document, "document");
    window = v9ng.toolsFunc.objProxy(window, "window");
})();
console.log('---- DEBUG ----');
// debugger;
!function(){
    try{
        if(document.all.__proto__ === HTMLAllCollection.prototype){
            if(document.all !== undefined){
                if(document.all == undefined){
                    console.log("环境正常");
                }else{
                    console.log("环境异常3");
                }
            }else{
                console.log("环境异常2");
            }
        }else{
            console.log("环境异常1");
        }
    }catch(e){
        console.log("环境异常0");
    }
}();
// debugger;
/* Async Code */
const loadEvents = v9ng.cache.listenEvents["load"];
if (loadEvents !== undefined) {
    for (const loadEvent of loadEvents) {
        loadEvent.listener.call(loadEvent.self);
    }
}
for (const asyncEvent of v9ng.cache.asyncEvents) {
    if (asyncEvent === undefined) {
        continue;
    }
    if (asyncEvent.type === 1) {
        asyncEvent.callback();
    } else {
        eval(asyncEvent.callback);
    }
}
for (const callbackFunc of v9ng.cache.callbackFuncs) {
    callbackFunc();
}
for (const mouseEvent of v9ng.cache.mouseEvents) {
    const type = mouseEvent.type;
    const typeEvents = v9ng.cache.listenEvents[type];
    if (typeEvents !== undefined) {
        let mouseEventObj = { "isTrusted": true };
        mouseEventObj = v9ng.toolsFunc.createProxyObj(mouseEventObj, MouseEvent, "mouseEvent");
        v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "clientX", mouseEvent.clientX);
        v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "clientY", mouseEvent.clientY);
        v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "timeStamp", mouseEvent.timeStamp);
        v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "type", type);
        for (const listenEvent of v9ng.cache.listenEvents[type]) {
            listenEvent.listener.call(listenEvent.self, mouseEventObj);
        }
    }
}
