(function () { // HTMLPictureElement
    HTMLPictureElement = function () {
        return v9ng.toolsFunc.throwError('TypeError', "Illegal constructor");
    };
    v9ng.toolsFunc.ctorGuard(HTMLPictureElement, "HTMLPictureElement");
    Object.setPrototypeOf(HTMLPictureElement.prototype, HTMLElement.prototype);
})();