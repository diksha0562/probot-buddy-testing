const assert = require('assert');
const myFunc = require('./test')
let a = myFunc();
assert(Object.keys(a).length===4, "My message goes here");
