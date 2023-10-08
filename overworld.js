class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = document.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const cameraPerson = this.map.gameObjects.hero;

      this.map.drawLowerImage(this.ctx, cameraPerson);
      this.map.drawMidImage(this.ctx, cameraPerson);
      this.map.drawSecondMidImage(this.ctx, cameraPerson);
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
        object.sprite.draw(this.ctx, cameraPerson);
      });
      this.map.drawUpperImage(this.ctx, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new overworldMap(window.overworldMaps.palletteTown);
    console.log(this.map.walls);
    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.directionInput.direction;
    this.startGameLoop();
  }
}
