const assert = require('assert');
const myFunc = require('./test')
let a = myFunc();
assert(a===2, "My message goes here");