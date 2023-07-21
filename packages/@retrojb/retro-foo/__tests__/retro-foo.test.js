'use strict';

const retroFoo = require('..');
const assert = require('assert').strict;

assert.strictEqual(retroFoo(), 'Hello from retroFoo');
console.info('retroFoo tests passed');
