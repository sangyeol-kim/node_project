const cheerio = require('cheerio');

const $ = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> </ul>')

/*
    withDomLvl1: true, //스트링을 1차원 줄로
    normalizeWhitespace: false, //true를 주면 탭 기능
    xmlMode: true, //xml을 사용할 때
    decodeEntities: true //html tag를 인코딩
*/

var a = $('.apple', '#fruits').text()
//=> Apple
 
var b = $('ul .pear').attr('class')
//=> pear
 
var c = $('li[class=orange]').html()
//=> Orange

console.log(a)
console.log(b)
console.log(c)