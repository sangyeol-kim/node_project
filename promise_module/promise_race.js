var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 600, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 모두 결정하지만 p2가 더 빠름
  // 먼저 끝나는 것을 리턴
});