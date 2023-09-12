/* Async Code */
const loadEvents = v9ng.cache.listenEvents["load"];
if (loadEvents !== undefined) {
    for (const loadEvent of loadEvents) {
        loadEvent.listener.call(loadEvent.self);
    }
}
// let zeroAsyncEvents = [];
// let otherAsyncEvents = [];
// for (const asyncEvent of v9ng.cache.asyncEvents) {
//     if (asyncEvent === undefined) {
//         continue;
//     }
//     if (asyncEvent.delay === 0) {
//         zeroAsyncEvents.push(asyncEvent);
//     } else {
//         otherAsyncEvents.push(asyncEvent);
//     }
// }
// otherAsyncEvents.sort((a, b) => {
//     return a.delay - b.delay;
// });
// for (const asyncEvent of zeroAsyncEvents) {
//     if (asyncEvent.type === 1) {
//         eval.apply(window, asyncEvent.callback());
//     } else {
//         eval.apply(window, [asyncEvent.callback]);
//     }
// }
// for (const callbackFunc of v9ng.cache.callbackFuncs) {
//     callbackFunc();
// }
// for (const asyncEvent of otherAsyncEvents) {
//     if (asyncEvent.type === 1) {
//         eval.apply(window, asyncEvent.callback());
//     } else {
//         eval.apply(window, [asyncEvent.callback]);
//     }
// }

document.cookie