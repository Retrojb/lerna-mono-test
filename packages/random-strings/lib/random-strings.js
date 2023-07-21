'use strict';

const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomStrings(len = 6) {
  return [...Array(len)]
      .map((ind) =>
          charSet.charAt(Math.floor(Math.random() * charSet.length))
      )
      .join("");
}

module.exports = randomStrings;

