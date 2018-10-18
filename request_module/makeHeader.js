const request = require('request');
 
var options = {
  url: 'http://localhost:3000/get',
  headers: {
    'AppKey': 'asdasdasd'
  }
};
 
request(options);