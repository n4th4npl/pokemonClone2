class sprite {
    constructor(config) {

        //set up an image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded= true;
        }

        //Configuring animation and initial state



        this.animations = config.animations || {
            "idle-down": [[0,0]],
            "idle-left": [[0,2]],
            "idle-up": [[0,6]],
            "idle-right": [[0,4]],
            "walk-down": [[2,0],[0,0],[6,0],[0,0]],
            "walk-left": [[2,2],[0,2],[6,2],[0,2]],
            "walk-right": [[2,4],[0,4],[6,4],[0,4]],
            "walk-up": [[2,6],[0,6],[6,6],[0,6]],
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;

        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if(this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }


    draw(ctx, cameraPerson) {
        // const scaledWidth = 32;  // Half of the original width (64)
        // const scaledHeight = 32; // Half of the original height (64)


    
        const x = Math.round(this.gameObject.x + utils.widthGrid(.65) - cameraPerson.x);
        const y = Math.round(this.gameObject.y + utils.widthGrid(.55) - cameraPerson.y);
        

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX*32,
            frameY*32,
            64, // Original width
            64, // Original height
            x * 16,
            y * 16,
            32, 32
            )

            this.updateAnimationProgress();
    }
}

