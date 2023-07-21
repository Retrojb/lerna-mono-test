'use strict';
const _ = require('lodash')

function randomNumber(min, max) {
  return _.floor(_.random() * (max - min) + min);
}

module.exports = randomNumber;
