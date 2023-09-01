/* Async Code */
console.log(document.cookie);
// const loadEvents = v9ng.cache.listenEvents["load"];
// if (loadEvents !== undefined) {
//     for (const loadEvent of loadEvents) {
//         loadEvent.listener.call(loadEvent.self);
//     }
// }
// for (const asyncEvent of v9ng.cache.asyncEvents) {
//     if (asyncEvent === undefined) {
//         continue;
//     }
//     if (asyncEvent.type === 1) {
//         asyncEvent.callback();
//     } else {
//         eval(asyncEvent.callback);
//     }
// }
// for (const callbackFunc of v9ng.cache.callbackFuncs) {
//     callbackFunc();
// }
// for (const mouseEvent of v9ng.cache.mouseEvents) {
//     const type = mouseEvent.type;
//     const typeEvents = v9ng.cache.listenEvents[type];
//     if (typeEvents !== undefined) {
//         let mouseEventObj = { "isTrusted": true };
//         mouseEventObj = v9ng.toolsFunc.createProxyObj(mouseEventObj, MouseEvent, "mouseEvent");
//         v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "clientX", mouseEvent.clientX);
//         v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "clientY", mouseEvent.clientY);
//         v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "timeStamp", mouseEvent.timeStamp);
//         v9ng.toolsFunc.setProtoProp.call(mouseEventObj, "type", type);
//         for (const listenEvent of v9ng.cache.listenEvents[type]) {
//             listenEvent.listener.call(listenEvent.self, mouseEventObj);
//         }
//     }
// }