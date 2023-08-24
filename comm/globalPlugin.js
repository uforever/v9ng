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