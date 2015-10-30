(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(playerHeight, playerWidth) {
  _classCallCheck(this, Player);

  // coordinates
  this.x = 25;
  this.y = 300 - playerHeight;
  // size
  this.playerWidth = playerWidth;
  this.playerHeight = playerHeight;
  // speed
  this.speed = 5;
  this.jumpHeight = 10;
  this.playerJumping = false;
  this.gravity = 0.9;
  this.velX = 0;
  this.velY = 0;
  this.drag = 0.8;
};

exports["default"] = Player;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classesPlayer = require('./classes/player');

var _classesPlayer2 = _interopRequireDefault(_classesPlayer);

var _libsKeys = require('./libs/keys');

var canvas = document.getElementById('game-container');
var ctx = canvas.getContext('2d');
var gameWidth = canvas.width;
var gameHeight = canvas.height;

var game = {

  init: function init() {
    this.create();
    this.update();
  },

  create: function create() {

    this.Hero = new _classesPlayer2['default'](20, 10);
    this.keys = [];
  },

  update: function update() {

    // Player Movement

    // Move player right
    if (game.keys[68]) {
      if (game.Hero.velX < game.Hero.speed) {
        game.Hero.velX++;
        console.log(game.Hero.velX++);
      }
    }
    // Move player left
    if (game.keys[65]) {
      if (game.Hero.velX > -game.Hero.speed) {
        game.Hero.velX--;
        console.log(game.Hero.velX--);
      }
    }
    // jump
    if (game.keys[32]) {
      if (game.Hero.velY < game.Hero.jumpHeight) {
        game.Hero.velY = game.Hero.jumpHeight;
        game.Hero.playerJumping = true;
        // add gravity to player
      }
    }

    // Slow players lateral movement
    game.Hero.velX *= game.Hero.drag;

    game.Hero.velY -= game.Hero.gravity;
    // increment player x position by velocity on update
    game.Hero.x += game.Hero.velX;
    // increment player y position by velocity on update
    game.Hero.y -= game.Hero.velY;

    if (game.Hero.y >= gameHeight - game.Hero.playerHeight) {
      game.Hero.y = gameHeight - game.Hero.playerHeight;
      game.Hero.playerJumping = false;
    }

    // draw player
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.fillRect(game.Hero.x, game.Hero.y, game.Hero.playerWidth, game.Hero.playerHeight);
    ctx.fillStyle = 'red';

    window.requestAnimationFrame(game.update);
  }
};

document.body.addEventListener('keydown', function (e) {
  game.keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', function (e) {
  game.keys[e.keyCode] = false;
});

window.addEventListener('load', function () {
  return game.init();
});

},{"./classes/player":1,"./libs/keys":3}],3:[function(require,module,exports){
"use strict";

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTXlEcml2ZS9HaXRIdWIvTkVTNi1QbGF0Zm9ybWVyL3NyYy9qcy9jbGFzc2VzL3BsYXllci5qcyIsIi9Vc2Vycy9NeURyaXZlL0dpdEh1Yi9ORVM2LVBsYXRmb3JtZXIvc3JjL2pzL2dhbWUuanMiLCJzcmMvanMvbGlicy9rZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBcUIsTUFBTSxHQUNkLFNBRFEsTUFBTSxDQUNiLFlBQVksRUFBRSxXQUFXLEVBQUU7d0JBRHBCLE1BQU07OztBQUd2QixNQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLE1BQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQzs7QUFFNUIsTUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsTUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7O0FBRWpDLE1BQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsTUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDM0IsTUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDbkIsTUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxNQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNkLE1BQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0NBQ2pCOztxQkFoQmtCLE1BQU07Ozs7Ozs7OzZCQ0FSLGtCQUFrQjs7Ozt3QkFDZCxhQUFhOztBQUdwQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDekQsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMs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RXRCLFVBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDM0M7Q0FDRixDQUFDOztBQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3BELE1BQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztDQUM3QixDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDbEQsTUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQzlCLENBQUMsQ0FBQzs7QUFRSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1NBQU0sSUFBSSxDQUFDLElBQUksRUFBRTtDQUFBLENBQUMsQ0FBQzs7O0FDM0ZuRDtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllckhlaWdodCwgcGxheWVyV2lkdGgpIHtcbiAgICAvLyBjb29yZGluYXRlc1xuICAgIHRoaXMueCA9IDI1O1xuICAgIHRoaXMueSA9IDMwMCAtIHBsYXllckhlaWdodDtcbiAgICAvLyBzaXplXG4gICAgdGhpcy5wbGF5ZXJXaWR0aCA9IHBsYXllcldpZHRoO1xuICAgIHRoaXMucGxheWVySGVpZ2h0ID0gcGxheWVySGVpZ2h0O1xuICAgIC8vIHNwZWVkXG4gICAgdGhpcy5zcGVlZCA9IDU7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMTA7XG4gICAgdGhpcy5wbGF5ZXJKdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5ncmF2aXR5ID0gMC45O1xuICAgIHRoaXMudmVsWCA9IDA7XG4gICAgdGhpcy52ZWxZID0gMDtcbiAgICB0aGlzLmRyYWcgPSAwLjg7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jbGFzc2VzL3BsYXllcic7XG5pbXBvcnQge2tleUNoZWNrfSBmcm9tICcuL2xpYnMva2V5cyc7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWVXaWR0aCA9IGNhbnZhcy53aWR0aDtcbmNvbnN0IGdhbWVIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG5sZXQgZ2FtZSA9IHtcblxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuSGVybyA9IG5ldyBQbGF5ZXIoMjAsIDEwKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcblxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBQbGF5ZXIgTW92ZW1lbnRcblxuICAgIC8vIE1vdmUgcGxheWVyIHJpZ2h0XG4gICAgaWYgKGdhbWUua2V5c1s2OF0pIHtcbiAgICAgIGlmIChnYW1lLkhlcm8udmVsWCA8IGdhbWUuSGVyby5zcGVlZCkge1xuICAgICAgICBnYW1lLkhlcm8udmVsWCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhnYW1lLkhlcm8udmVsWCsrKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBwbGF5ZXIgbGVmdFxuICAgIGlmIChnYW1lLmtleXNbNjVdKSB7XG4gICAgICBpZiAoZ2FtZS5IZXJvLnZlbFggPiAtZ2FtZS5IZXJvLnNwZWVkKSB7XG4gICAgICAgIGdhbWUuSGVyby52ZWxYLS07XG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWUuSGVyby52ZWxYLS0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBqdW1wXG4gICAgaWYgKGdhbWUua2V5c1szMl0pIHtcbiAgICAgIGlmIChnYW1lLkhlcm8udmVsWSA8IGdhbWUuSGVyby5qdW1wSGVpZ2h0KSB7XG4gICAgICAgIGdhbWUuSGVyby52ZWxZID0gZ2FtZS5IZXJvLmp1bXBIZWlnaHQ7XG4gICAgICAgIGdhbWUuSGVyby5wbGF5ZXJKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gYWRkIGdyYXZpdHkgdG8gcGxheWVyXG4gICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyBTbG93IHBsYXllcnMgbGF0ZXJhbCBtb3ZlbWVudFxuICAgIGdhbWUuSGVyby52ZWxYICo9IGdhbWUuSGVyby5kcmFnO1xuXG4gICAgZ2FtZS5IZXJvLnZlbFkgLT0gZ2FtZS5IZXJvLmdyYXZpdHk7XG4gICAgLy8gaW5jcmVtZW50IHBsYXllciB4IHBvc2l0aW9uIGJ5IHZlbG9jaXR5IG9uIHVwZGF0ZVxuICAgIGdhbWUuSGVyby54ICs9IGdhbWUuSGVyby52ZWxYO1xuICAgIC8vIGluY3JlbWVudCBwbGF5ZXIgeSBwb3NpdGlvbiBieSB2ZWxvY2l0eSBvbiB1cGRhdGVcbiAgICBnYW1lLkhlcm8ueSAtPSBnYW1lLkhlcm8udmVsWTtcblxuICAgIGlmIChnYW1lLkhlcm8ueSA+PSBnYW1lSGVpZ2h0IC0gZ2FtZS5IZXJvLnBsYXllckhlaWdodCkge1xuICAgICAgZ2FtZS5IZXJvLnkgPSBnYW1lSGVpZ2h0IC0gZ2FtZS5IZXJvLnBsYXllckhlaWdodDtcbiAgICAgIGdhbWUuSGVyby5wbGF5ZXJKdW1waW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZHJhdyBwbGF5ZXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCk7XG4gICAgY3R4LmZpbGxSZWN0KGdhbWUuSGVyby54LCBnYW1lLkhlcm8ueSwgZ2FtZS5IZXJvLnBsYXllcldpZHRoLCBnYW1lLkhlcm8ucGxheWVySGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUudXBkYXRlKTtcbiAgfSxcbn07XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgZ2FtZS5rZXlzW2Uua2V5Q29kZV0gPSB0cnVlO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gIGdhbWUua2V5c1tlLmtleUNvZGVdID0gZmFsc2U7XG59KTtcblxuXG5cblxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBnYW1lLmluaXQoKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSXZWWE5sY25NdlRYbEVjbWwyWlM5SGFYUklkV0l2VGtWVE5pMVFiR0YwWm05eWJXVnlMM055WXk5cWN5OXNhV0p6TDJ0bGVYTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSJdfQ==
