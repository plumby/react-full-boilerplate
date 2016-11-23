"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateRandomNumber = exports.generateRandomNumber = function generateRandomNumber() {
  var delay = Math.floor(Math.random() * 2000 + 1);
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(Math.floor(Math.random() * 10 + 1));
    }, delay);
  });
};