'use strict';

const randomStrings = require('..');
const assert = require('assert').strict;

assert.strictEqual(randomStrings(), 'Hello from randomStrings');
console.info('randomStrings tests passed');
