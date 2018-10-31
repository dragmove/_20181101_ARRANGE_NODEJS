// test url, querystring modules
var url = require('url');
var querystring = require('querystring');

var urlObj = url.parse('http://www.dragmove.xyz/index.html?foo=aid&bar=99');
var urlStr = url.format(urlObj);
var urlParams = querystring.parse(urlObj.query);

console.log('urlStr :', urlStr);
console.log('urlParams :', urlParams);
console.log(
  'querystring.stringify(urlParams) :',
  querystring.stringify(urlParams)
);

// test event emitter
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
  var _ = this;

  _.on('stop', function() {
    console.log('receive stop event. stop !.');
  });
};
Calc.prototype.add = function(a, b) {
  return a + b;
};

util.inherits(Calc, EventEmitter);

module.exports = Calc;
module.exports.title = 'calculator';

var calc = new Calc();
calc.emit('stop');
