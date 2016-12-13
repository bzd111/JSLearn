'use strict';

console.log('Hello world');

var str = 'ES6';
console.log('Hello ' + str);

var Dog = require('./dog');
// import Dog from './dog';

var toby = new Dog('To131y');
console.log(toby.bark());