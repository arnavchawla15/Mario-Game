class Obstacles{
    constructor(positionX){
        this.x = positionX;
        this.y = height - random([200,400,600]);
        this.spt = createSprite(this.x,this.y);
        this.spt.addAnimation("obstacle",obstacleAnimation);
        this.spt.scale = 0.5;
    }
}