"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = void 0;

var _types = require("./types");

var authReducer = function authReducer(state, action) {
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _types.TOGGLE_LOG:
      return !payload;

    default:
      return state;
  }
};

exports.authReducer = authReducer;