/*var p1 = new Promise(function(resolve, reject) {
    resolve("test");
    //reject("test"); 로 넘기면 reject로
});
*/

// 위의 과정을 짧게 만드는 것
var p1 = Promise.reject(1);

p1.then(function (resolve) {
    console.log("resolve :: " + resolve)
},function (reject) {
    console.log("reject :: " + reject)
})

