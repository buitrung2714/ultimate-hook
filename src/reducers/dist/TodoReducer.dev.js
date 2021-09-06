"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoReducer = void 0;

var _types = require("./types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var todoReducer = function todoReducer(state, action) {
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _types.GET_TODO:
      var todo = localStorage.getItem('todos');
      if (todo) state = JSON.parse(todo);
      return state;

    case _types.SAVE_TODO:
      localStorage.setItem("todos", JSON.stringify(payload.todoState));
      return state;

    case _types.ADD_TODO:
      return [].concat(_toConsumableArray(state), [payload.todo]);

    case _types.DELETE_TODO:
      return state.filter(function (todo) {
        return todo.id !== payload.id;
      });

    default:
      return state;
  }
};

exports.todoReducer = todoReducer;