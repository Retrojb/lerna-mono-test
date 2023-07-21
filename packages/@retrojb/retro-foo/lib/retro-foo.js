'use strict';
const randomNumber = require('@retrojb/random-numbers');
const randomString = require('@retrojb/random-strings');

function retroFoo() {
  const genRanNum = randomNumber(1, 199);
  const genRanStr = randomString();
  console.log(`Lets see what random number and string you get \n Number: ${genRanNum} \n String: ${genRanStr}`);
};

module.exports = retroFoo;
