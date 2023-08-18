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