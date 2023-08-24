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
                } else if (v9ng.cache.recursiveLogImmune.includes(dataProto)) {
                    return `{${dataProto}}`;
                } else {
                    const propKeys = Reflect.ownKeys(data);
                    let result = [];
                    for (const prop of propKeys) {
                        result.push(`${v9ng.toolsFunc.commToString(prop)}:${v9ng.toolsFunc.commToString(data[prop])}`);
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
        v9ng.toolsFunc.getElements = function (tagType) {
            let result = [];
            for (const tag of v9ng.cache.htmlElements) {
                if (Object.prototype.toString.call(tag) === tagType) {
                    result.push(tag);
                }
            }
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