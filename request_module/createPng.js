const request = require('request');
const fs = require('fs')

request('http://issue.chosun.com/poll//data/image/solve/solve_30_20170728191124.jpg').pipe(fs.createWriteStream('doodle.png'))
