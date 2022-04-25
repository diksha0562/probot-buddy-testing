const assert = require('assert');
const myFunc = require('./test')
let a = myFunc();
assert(a===3, "My message goes here");
