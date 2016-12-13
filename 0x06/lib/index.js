'use strict';

var _dog = require('./dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Hello world');

var str = 'ES6';
console.log('Hello ' + str);

// const Dog = require('./dog');


var toby = new _dog2.default('To131y');
console.log(toby.bark());