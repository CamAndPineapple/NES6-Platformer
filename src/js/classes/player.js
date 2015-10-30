export default class Player {
  constructor(playerHeight, playerWidth) {
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
  }
}
