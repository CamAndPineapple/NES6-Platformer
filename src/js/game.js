import Player from './classes/player';

$(window).load(()=> game.init());

const canvas = document.getElementById('game-container');
const ctx = canvas.getContext('2d');

let game = {
  init: function() {
    let Hero = new Player(5, 5);
    ctx.fillStyle = 'red';
    ctx.fillRect(Hero.x, Hero.y, Hero.playerWidth, Hero.playerHeight);
  }
};
