const assert = require('assert');
const myFunc = require('./test')
let a = myFunc();
assert(a===1, "My message goes here");