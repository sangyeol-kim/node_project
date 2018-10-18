//promise all
const request = require('request');


const naver = new Promise((resolve) => {
    request.get("http://www.naver.com",(err, res, html) =>{

        resolve(html);
    })
})
const daum = new Promise((resolve) => {
    request.get("http://www.duam.net",(err, res, html) =>{
        resolve(html);
    })
})
const google = new Promise((resolve) => {
    request.get("http://www.google.com", (err, res, html) =>{
        resolve(html);
    })
})

Promise.all([naver,daum,google]).then((values) =>{
    console.log(values)
})
