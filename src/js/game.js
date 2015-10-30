import Player from './classes/player';
import {keyCheck} from './libs/keys';


const canvas = document.getElementById('game-container');
const ctx = canvas.getContext('2d');
const gameWidth = canvas.width;
const gameHeight = canvas.height;

let game = {

  init: function() {
    this.create();
    this.update();
  },

  create: function() {

    this.Hero = new Player(20, 10);
    this.keys = [];

  },

  update: function() {

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
  },
};

document.body.addEventListener('keydown', function(e) {
  game.keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', function(e) {
  game.keys[e.keyCode] = false;
});







window.addEventListener('load', () => game.init());
