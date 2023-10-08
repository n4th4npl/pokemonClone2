class person extends gameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
    this.updatePosition();
    } else {

    }
    this.updateSprite(state);

    if (this.movingProgressRemaining === 0 && state.arrow) {
      this.startBehavior(state, {
        type: "walk",
        direction:state.arrow
      })
    }
  }

  startBehavior(state,behavior) {
    this.direction = behavior.direction;
    if(behavior.type==="walk") {
      if(state.map.isSpaceTaken(this.x,this.y,this.direction)) {
        return;
      }
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {

      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
      console.log("Current Coordinates:", this.x, this.y);
    }

  updateSprite(state) {
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
    }

    if (this.movingProgressRemaining === 0 && !state.arrow) {
      this.sprite.setAnimation("idle-" + this.direction);
      return;
    }
  }
}
