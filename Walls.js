class Walls {
    constructor(posX) {
      //this.w = random(100, 500);
      //this.h = 40;
      this.x = posX;
      this.y = height- random([250,450]);   //height - heightPlatform
     // this.colour = color('Green'); // red
      this.spt=createSprite(this.x, this.y);
      this.spt.addAnimation("wall", wallAnimation);
      this.spt.shapeColor="brown";
    
    }
  
  
  }
  