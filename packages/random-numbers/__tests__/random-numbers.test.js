'use strict';

const randomNumbers = require('..');
const assert = require('assert').strict;

assert.strictEqual(randomNumbers(), 'Hello from randomNumbers');
console.info('randomNumbers tests passed');
