"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(input) {
  var videoIdRegex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|https?:\/\/youtu\.be\/|youtube\.com\/shorts\/|^)([a-zA-Z0-9_-]{11})/;
  var match = input.match(videoIdRegex);
  return match ? match[1] : null;
};