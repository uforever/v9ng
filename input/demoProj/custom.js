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