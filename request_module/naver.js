const request = require('request');
const cheerio = require('cheerio');

request.get('https://www.naver.com', (err, httpResponse, html) =>{
    //console.log(html);
    //naver 소스코드

    const $ = cheerio.load(html)

    var rankList = $('div.ah_roll_area ul li')

    rankList.each((i, e) =>{
        //console.log($(e).html()) 해당 html
        var rank = $(e).children('a').children('span.ah_r').text()
        var text = $(e).children('a').children('span.ah_k').text()

        console.log(rank, '위는', text, '입니다.');
    })


})