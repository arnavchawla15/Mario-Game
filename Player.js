class Player {
    constructor() {
        this.spt = createSprite(200,200,100,100);
        this.spt.shapeColor = "blue"
        this.spt.addAnimation("mario", maroiAnimation);
        this.spt.scale = 0.8;
    }
    applyGravity(){
        this.spt.velocityY = this.spt.velocityY+1;
    }
    moveLeft(){
     this.spt.x = this.spt.x - 10;
    }
    moveRight(){
        this.spt.x = this.spt.x + 10;
    }
    jump(){
        this.spt.velocityY = -10;
    }
}