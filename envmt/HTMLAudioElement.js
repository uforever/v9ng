(function () { // HTMLAudioElement
    HTMLAudioElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLAudioElement, "HTMLAudioElement");
    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
})();