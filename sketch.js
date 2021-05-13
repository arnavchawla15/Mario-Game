var maroiAnimation
var groundAnimation
var wallAnimation,obstacleAnimation,flagAnimation;
var obstacleGroup;
var PLAY = 1;
var LOSE = 0;
var WIN = 2;
var gameState = PLAY;

function preload(){
  maroiAnimation = loadAnimation("images/Capture1.png","images/Capture3.png","images/Capture4.png");
  groundAnimation = loadAnimation("images/ground.png");
  wallAnimation = loadAnimation("images/wall.png");
  obstacleAnimation = loadAnimation("images/obstacle1.png");
  flagAnimation = loadAnimation("images/Flag.png");
}

function setup() {
  createCanvas(displayWidth,668);

  Mario = new Player();
  platformGroup = createGroup();
  obstacleGroup = createGroup();
var distanceX = 0;
var gap = 60;

  for (var i=0; i<50; i++){
    platform1 = new Platform(distanceX);
    platformGroup.add(platform1.sprite);
    distanceX = distanceX + platform1.width + gap;
    if(i%3 == 0){
      wall = new Walls(distanceX);
      platformGroup.add(wall.spt);
    }
    if(i%4 == 0){
      obstacles = new Obstacles(distanceX);
      obstacleGroup.add(obstacles.spt);
    }
    
  }
  
  flag = createSprite(distanceX,height-300);
  flag.addAnimation("flag",flagAnimation);
  flag.scale = 0.2
}

function draw() {
  background('skyblue'); 

  translate(-Mario.spt.x + width/2,0);

  if(gameState == PLAY){
    
    if(obstacleGroup.isTouching(Mario.spt)){
      gameState = LOSE;
    }

    if(flag.isTouching(Mario.spt)){
      gameState = WIN;
    }

    Mario.applyGravity();
    Mario.spt.collide(platformGroup);
  
    if(keyDown("left")){
      Mario.moveLeft();
    }
    if(keyDown("right")){
      Mario.moveRight();
    }
    if(keyDown("up")){
      Mario.jump();
    }

    
            
  }

  if(gameState == LOSE){
    obstacleGroup.destroyEach();
    Mario.spt.setVelocity(0,0);
    Mario.spt.pause();
    text("You Lost!!",Mario.spt.x,334);
  }

  if(gameState == WIN){
    obstacleGroup.destroyEach();
    Mario.spt.setVelocity(0,0);
    Mario.spt.pause();
    text("You Won!!",Mario.spt.x,334);
  }
  
  drawSprites();
}

