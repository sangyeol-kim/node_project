//chaining

//case1
var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});

p2.then(function(value) {
console.log(value); // 1
return value + 1;
}).then(function(value) {
console.log(value); // 2
});

p2.then(function(value) {
console.log(value); // 1
});

//case2
var p2 = new Promise(function(resolve, reject) {
resolve(1);
});

p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
}).then(function(value) {
    return value + 1; // 2
}).then(function(value) {
    console.log(value) // 3
});
