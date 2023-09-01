(function () { // PaymentResponse
    PaymentResponse = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(PaymentResponse, "PaymentResponse");
    Object.setPrototypeOf(PaymentResponse.prototype, EventTarget.prototype);
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "requestId", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "requestId_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "methodName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "methodName_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "details", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "details_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingAddress", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "shippingAddress_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingOption", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "shippingOption_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "payerName", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "payerName_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "payerEmail", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "payerEmail_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "payerPhone", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "payerPhone_get", arguments);
        },
        set: undefined,
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "onpayerdetailchange", {
        configurable: true,
        enumerable: true,
        get: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "onpayerdetailchange_get", arguments);
        },
        set: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "onpayerdetailchange_set", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "complete", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "complete", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "retry", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "retry", arguments);
        },
    });
    v9ng.toolsFunc.defineProperty(PaymentResponse.prototype, "toJSON", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
            return v9ng.toolsFunc.funcDispatch(this, "PaymentResponse.prototype", "toJSON", arguments);
        },
    });
})();