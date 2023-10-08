class overworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.midImage = new Image();
    this.midImage.src = config.midSrc;
    this.secondMidImage = new Image();
    this.secondMidImage.src = config.secondMidSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.widthGrid(1) - cameraPerson.x,
      utils.widthGrid(1) - cameraPerson.y
    );
  }
  drawMidImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.midImage,
      utils.widthGrid(1) - cameraPerson.x,
      utils.widthGrid(1) - cameraPerson.y
    );
  }
  drawSecondMidImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.secondMidImage,
      utils.widthGrid(1) - cameraPerson.x,
      utils.widthGrid(1) - cameraPerson.y
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.widthGrid(1) - cameraPerson.x,
      utils.widthGrid(1) - cameraPerson.y
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }
}

window.overworldMaps = {
  palletteTown: {
    lowerSrc: "/images/overworld-bot.png",
    midSrc: "/images/overworld-mid.png",
    secondMidSrc: "/images/overworld-upper-mid.png",
    upperSrc: "/images/overworld-top.png",
    gameObjects: {
      hero: new person({
        x: utils.widthGrid(15),
        y: utils.widthGrid(20),
      }),
    },
    walls: {
      [utils.asGridCoords(208, 224)]: true,
      [utils.asGridCoords(208, 240)]: true,
      [utils.asGridCoords(208, 256)]: true,
      [utils.asGridCoords(208, 272)]: true,
      [utils.asGridCoords(208, 288)]: true,
      [utils.asGridCoords(208, 304)]: true,
      [utils.asGridCoords(208, 320)]: true,
      [utils.asGridCoords(208, 336)]: true,
      [utils.asGridCoords(208, 352)]: true,
      [utils.asGridCoords(208, 368)]: true,
      [utils.asGridCoords(208, 384)]: true,
      [utils.asGridCoords(208, 400)]: true,
      [utils.asGridCoords(208, 416)]: true,
      [utils.asGridCoords(208, 432)]: true,
      [utils.asGridCoords(224, 208)]: true,
      [utils.asGridCoords(240, 208)]: true,
      [utils.asGridCoords(256, 208)]: true,
      [utils.asGridCoords(272, 208)]: true,
      [utils.asGridCoords(288, 208)]: true,
      [utils.asGridCoords(304, 208)]: true,
      [utils.asGridCoords(320, 208)]: true,
      [utils.asGridCoords(336, 208)]: true,
      [utils.asGridCoords(352, 208)]: true,
      [utils.asGridCoords(368, 208)]: true,
      [utils.asGridCoords(384, 208)]: true,
      [utils.asGridCoords(400, 208)]: true,
      [utils.asGridCoords(416, 208)]: true,
      [utils.asGridCoords(432, 224)]: true,
      [utils.asGridCoords(432, 240)]: true,
      [utils.asGridCoords(432, 256)]: true,
      [utils.asGridCoords(432, 272)]: true,
      [utils.asGridCoords(432, 288)]: true,
      [utils.asGridCoords(432, 304)]: true,
      [utils.asGridCoords(432, 320)]: true,
      [utils.asGridCoords(432, 336)]: true,
      [utils.asGridCoords(432, 352)]: true,
      [utils.asGridCoords(432, 368)]: true,
      [utils.asGridCoords(432, 384)]: true,
      [utils.asGridCoords(432, 400)]: true,
      [utils.asGridCoords(432, 416)]: true,
      [utils.asGridCoords(432, 432)]: true,
      [utils.asGridCoords(224, 432)]: true,
      [utils.asGridCoords(240, 432)]: true,
      [utils.asGridCoords(256, 432)]: true,
      [utils.asGridCoords(272, 432)]: true,
      [utils.asGridCoords(288, 432)]: true,
      [utils.asGridCoords(304, 432)]: true,
      [utils.asGridCoords(320, 432)]: true,
      [utils.asGridCoords(336, 432)]: true,
      [utils.asGridCoords(352, 432)]: true,
      [utils.asGridCoords(368, 432)]: true,
      [utils.asGridCoords(384, 432)]: true,
      [utils.asGridCoords(400, 432)]: true,
      [utils.asGridCoords(416, 432)]: true,
      [utils.asGridCoords(368, 384)]: true,
      [utils.asGridCoords(400, 352)]: true,
      [utils.asGridCoords(400, 336)]: true,
      [utils.asGridCoords(304, 400)]: true,
      [utils.asGridCoords(288, 400)]: true,
      [utils.asGridCoords(272, 400)]: true,
      [utils.asGridCoords(336, 272)]: true,
      [utils.asGridCoords(336, 256)]: true,
      [utils.asGridCoords(336, 240)]: true,
      [utils.asGridCoords(336, 224)]: true,
      [utils.asGridCoords(352, 272)]: true,
      [utils.asGridCoords(368, 288)]: true,
      [utils.asGridCoords(384, 288)]: true,
      [utils.asGridCoords(400, 288)]: true,
      [utils.asGridCoords(416, 288)]: true,
      [utils.asGridCoords(240, 240)]: true,
      [utils.asGridCoords(256, 240)]: true,
      [utils.asGridCoords(272, 240)]: true,
    },
  },

  interior: {
    lowerSrc: "/images/interior-bot.png",
    midSrc: "/images/interior-mid.png",
    secondMidSrc: "/images/interior-top.png",
    upperSrc: "",
    gameObjects: {
      hero: new person({
        x: utils.widthGrid(1),
        y: utils.widthGrid(1),
      }),
    }
  }
};
