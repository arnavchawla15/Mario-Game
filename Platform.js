class Platform {
    // constructor is used to construct the sprite and it's properties.
    constructor(positionX){
// syntax for creating a sprite -->  this.sprite = createSprite(x,y,width,                            height);
//                                               OR
// the syntax can be -->   this.x = AN(Any number)
//                         this.y = AN
//                         this.width = AN
//                         this.height = AN
//                         this.sprite = createSprite(this.x,this.y,this.width,this.height);
// any property should be written in the syntax -->   this.<property>
this.x = positionX;
this.y = 600;                                         
this.width = random(100,500);
this.height = random(250,150);    
this.sprite = createSprite(this.x,this.y,this.width,this.height);
this.sprite.addAnimation("ground",groundAnimation);
this.sprite.shapeColor = 'green'
    }
}