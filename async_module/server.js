const request = require('request');
const async = require('async');
const fs = require('fs');

//파일에 대한 정보를 가져올떄
/*
async.map(['file1','file2','file3'], fs.stat, function(err, results) {
    console.log(results);
});
*/

/*
async.filter(['file1','file2','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {

    //파일 있으면 err에는 null이 넘어온다. null===false
    //콜백에 트루로 넘어와야 파일이 있다고 인지함
    //파일이 없으면 adsad~로 넘어옴 자바스크립트의 공백이 없음은 true
    callback(null, !err)
    // 파일이 있으면 true로 넘어와야 하기 떄문에 !err
    // 파일이 없으면 false로 넘어와야 하므로 !err
});
}, function(err, results) {
    console.log(results);
    // results now equals an array of the existing files
});
*/

//병렬처리
//콜백필요없음 파라미터도 알아서
/*
function elevenStreet() {
    request.get("https://www.11st.co.kr", (err, res, html) =>{
        console.log("11번가")
    })
}
function gmarket() {
    request.get("https://www.gmarket.co.kr", (err, res, html) =>{
        console.log("쥐마켓")
    })
}
function auction() {
    request.get("https://www.auction.co.kr", (err, res, html) =>{
        console.log("옥뗜")
    })
}

async.parallel([
    //순서에 상관없이 나오는 결과.
    elevenStreet,
    gmarket,
    auction
], function(err, results) {
    
});
*/

/*
// 순차적인 것
// 콜백이 필요

function elevenStreet(callback) {
    request.get("https://www.11st.co.kr", (err, res, html) =>{
        console.log("11번가")
        callback(null, "11번가");
    })
}
function gmarket(callback) {
    request.get("https://www.gmarket.co.kr", (err, res, html) =>{
        console.log("쥐마켓")
        callback(null, "지마켓");
    })
}
function auction(callback) {
    request.get("https://www.auction.co.kr", (err, res, html) =>{
        console.log("옥뗜")
        callback(null, "옥션");
    })
}

// task 위주, 함수와 같은것
// 배열이나 객체를 사용하기 위해서는 eachOfSeries를 사용
async.series([
    elevenStreet,
    gmarket,
    auction
]);
*/