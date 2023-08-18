getDescriptorCode = function (obj, propKey, objName, instance) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propKey);
    let code = `{
        configurable: ${descriptor.configurable},
        enumerable: ${descriptor.enumerable},`;
    if (Object.hasOwn(descriptor, "writable")) {
        code += `
        writable: ${descriptor.writable},`;
    }
    if (Object.hasOwn(descriptor, "value")) {
        const value = descriptor.value;
        const valueType = typeof value;
        if (value instanceof Object) {
            if (valueType === 'function') {
                code += `
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}", arguments);
        },`;
            } else {
                console.log('\x1b[31m%s\x1b[0m', `[SPECIAL PROP]: \`${objName}[${propKey.toString()}]\`
[VALUE]: ${value}`);
                code += `
        value: {},`;
            }
        } else if (valueType === 'symbol') {
            code += `
        value: ${value.toString()},`;
        } else if (valueType === 'string') {
            code += `
        value: "${value}",`;
        } else {
            code += `
        value: ${value},`;
        }
    }
    if (Object.hasOwn(descriptor, "get")) {
        const get = descriptor.get;
        if (typeof get === 'function') {
            let defaultRet;
            try {
                defaultRet = get.call(instance);
            } catch (e) { }
            if (defaultRet === undefined || defaultRet instanceof Object) {
                code += `
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}_get", arguments);
        },`;
            } else {
                if (typeof defaultRet === 'string') {
                    code += `
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}_get", arguments, "${defaultRet}");
        },`;
                } else if (typeof value === 'symbol') {
                    code += `
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}_get", arguments, ${defaultRet.toString()});
        },`;
                } else {
                    code += `
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}_get", arguments, ${defaultRet});
        },`;
                }
            }
        } else {
            code += `
        get: undefined,`;
        }
    }
    if (Object.hasOwn(descriptor, "set")) {
        const set = descriptor.set;
        if (typeof set === 'function') {
            code += `
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "${objName}", "${propKey}_set", arguments);
        },`;
        } else {
            code += `
        set: undefined,`;
        }
    }
    code += `
    }`;
    return code;
};

genCtorCode = function (ctor, instance) {
    // 构造函数
    const ctorName = ctor.name;
    let code = `(function () { // ${ctorName}
    ${ctorName} = function () {`;
    try {
        new ctor;
    } catch (e) {
        code += `
        return v9ng.toolsFunc.throwError('${e.name}', '${e.message}');`
    }
    code += `
    };
    v9ng.toolsFunc.ctorGuard(${ctorName}, "${ctorName}");`;
    // 原型链
    const proto = ctor.prototype;
    const protoProto = Object.getPrototypeOf(proto);
    const protoProtoName = protoProto[Symbol.toStringTag];
    if (protoProtoName !== undefined) {
        code += `
    Object.setPrototypeOf(${ctorName}.prototype, ${protoProtoName}.prototype);`;
    }
    // 属性
    const metaProperties = [
        "arguments",
        "caller",
        "length",
        "name",
        "prototype",
    ];
    for (const propKey in Object.getOwnPropertyDescriptors(ctor)) {
        if (metaProperties.indexOf(propKey) !== -1) {
            continue;
        }
        const descriptorCode = getDescriptorCode(ctor, propKey, ctorName, instance);
        code += `
    v9ng.toolsFunc.defineProperty(${ctorName}, "${propKey}", ${descriptorCode});`;
    }
    // 原型属性
    for (const propKey in Object.getOwnPropertyDescriptors(ctor.prototype)) {
        if (propKey === "constructor") {
            continue;
        }
        const descriptorCode = getDescriptorCode(ctor.prototype, propKey, `${ctorName}.prototype`, instance);
        code += `
    v9ng.toolsFunc.defineProperty(${ctorName}.prototype, "${propKey}", ${descriptorCode});`;
    }
    code += `
})();`;

    console.log(code);
    copy(code);
};

genObjCode = function (obj, objName, instance) {
    let code = `(function () { // ${objName}
    ${objName} = {};`;
    const protoName = Object.getPrototypeOf(obj)[Symbol.toStringTag];
    if (protoName !== undefined) {
        code += `
    Object.setPrototypeOf(${objName}, ${protoName}.prototype);`;
    }
    for (const propKey in Object.getOwnPropertyDescriptors(obj)) {
        const descriptorCode = getDescriptorCode(obj, propKey, objName, instance);
        code += `
    v9ng.toolsFunc.defineProperty(${objName}, "${propKey}", ${descriptorCode});`;
    }
    code += `
})();`;

    console.log(code);
    copy(code);
};