'use strict';

const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomString(len = 6) {
  return [...Array(len)]
      .map((ind) =>
          chrSet.charAt(Math.floor(Math.random() * charSet.length))
      )
      .join("");
}
module.exports = randomString;
