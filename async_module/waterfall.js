//case1
const async = require('async');

async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    console.log(result)
    // result now equals 'done'
});

// one, two => arg1, arg2
// three => arg1
// done => result

//case2
const async = require('async');

async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, arg1+arg2+ 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, arg1+ 'done');
    }
], function (err, result) {
    console.log(result)
    // result now equals 'done'
});

//문자열 모두 합치기