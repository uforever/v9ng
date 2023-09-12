
console.log('*** start ***');
(function () {
    console.log("test 1");
    addEventListener("load", function () { console.log("test 2") }, false);
    setTimeout(function () { console.log("test 3") }, 5000);
    setTimeout(function () { console.log("test 4") }, 0);
    setInterval(function () { console.log("test 5") }, 2000);
    setTimeout(function () { console.log("test 6") }, 1500);
    setTimeout(function () { console.log("test 7") }, 2047);
    setTimeout(function () { console.log("test 8") }, 0);
    setTimeout(function () { console.log("test 9") }, 1000);
    console.log("test 10");
})();
console.log('*** end ***');
