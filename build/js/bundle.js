(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default(playerHeight, playerWidth) {
  _classCallCheck(this, _default);

  this.x = 100;
  this.y = 50;
  this.playerWidth = playerHeight;
  this.playerHeight = playerWidth;
};

exports["default"] = _default;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classesPlayer = require('./classes/player');

var _classesPlayer2 = _interopRequireDefault(_classesPlayer);

$(window).load(function () {
  return game.init();
});

var canvas = document.getElementById('game-container');
var ctx = canvas.getContext('2d');

var game = {
  init: function init() {
    var Hero = new _classesPlayer2['default'](5, 5);
    ctx.fillStyle = 'red';
    ctx.fillRect(Hero.x, Hero.y, Hero.playerWidth, Hero.playerHeight);
  }
};

},{"./classes/player":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTXlEcml2ZS9HaXRIdWIvTkVTNi1QbGF0Zm9ybWVyL3NyYy9qcy9jbGFzc2VzL3BsYXllci5qcyIsIi9Vc2Vycy9NeURyaXZlL0dpdEh1Yi9ORVM2LVBsYXRmb3JtZXIvc3JjL2pzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztlQ0NhLGtCQUFDLFlBQVksRUFBRSxXQUFXLEVBQUU7OztBQUNyQyxNQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1osTUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7QUFDaEMsTUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7Q0FDakM7Ozs7Ozs7Ozs7NkJDTmdCLGtCQUFrQjs7OztBQUVyQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQUssSUFBSSxDQUFDLElBQUksRUFBRTtDQUFBLENBQUMsQ0FBQzs7QUFFakMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXBDLElBQUksSUFBSSxHQUFHO0FBQ1QsTUFBSSxFQUFFLGdCQUFXO0FBQ2YsUUFBSSxJQUFJLEdBQUcsK0JBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLE9BQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLE9BQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ25FO0NBQ0YsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHBsYXllckhlaWdodCwgcGxheWVyV2lkdGgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gICAgdGhpcy55ID0gNTA7XG4gICAgdGhpcy5wbGF5ZXJXaWR0aCA9IHBsYXllckhlaWdodDtcbiAgICB0aGlzLnBsYXllckhlaWdodCA9IHBsYXllcldpZHRoO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vY2xhc3Nlcy9wbGF5ZXInO1xuXG4kKHdpbmRvdykubG9hZCgoKT0+IGdhbWUuaW5pdCgpKTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IGdhbWUgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBIZXJvID0gbmV3IFBsYXllcig1LCA1KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgY3R4LmZpbGxSZWN0KEhlcm8ueCwgSGVyby55LCBIZXJvLnBsYXllcldpZHRoLCBIZXJvLnBsYXllckhlaWdodCk7XG4gIH1cbn07XG4iXX0=
