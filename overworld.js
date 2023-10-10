class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = document.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
    
  }

  handleSceneTransition(callback) {
    const overlay = document.getElementById("scene-transition-overlay");

    // Start the fade-out effect
    var audio = new Audio('/audio/enter.mp3');
    audio.play();
    overlay.classList.remove("fade-out");
    
    // Immediately perform the scene transition (callback)
    callback();

    // After the fade-out completes (1.2s), start the fade-in
    setTimeout(() => {
        overlay.classList.add("fade-out");
    }, 0);  // Full duration of your fade-out animation
}





  

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const cameraPerson = this.map.gameObjects.hero;

      // Transition Check Here
      const heroPosKey = `${cameraPerson.x},${cameraPerson.y}`;
      const transition = this.map.transitions && this.map.transitions[heroPosKey];
      
      if (transition) {
          this.handleSceneTransition(() => {
              this.map = new overworldMap(window.overworldMaps[transition.to]);
              this.map.gameObjects.hero.x = transition.x;
              this.map.gameObjects.hero.y = transition.y;
          });
      }
      

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
    console.log("Available Transitions for Current Map:", this.map.transitions);

    console.log(this.map.walls);
    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.directionInput.direction;
    this.startGameLoop();
  }
}
