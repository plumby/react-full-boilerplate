'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _organisms = require('./organisms');

Object.keys(_organisms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _organisms[key];
    }
  });
});