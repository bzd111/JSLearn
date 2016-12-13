console.log('Hello world')

const str = 'ES6';
console.log(`Hello ${str}`);

// const Dog = require('./dog');
import Dog from './dog';

const toby = new Dog('To131y');
console.log(toby.bark());
