
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score = 0;
var bananaGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600 , 400);
  
  monkey = createSprite(80 , 350 , 10 , 10);
  monkey.addAnimation("running" , monkey_running);
  monkey.scale = 0.1

  
  ground = createSprite(300 , 382 , 1200 , 5)
  ground.velocityX = -10;
  ground.x = ground.width/2;
}


function draw() {
    background("lightgreen")
  
  text("Survival Time :" + score , 260 , 10)
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    
    monkey.velocityY = -10;    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
 
  score = score + Math.round(getFrameRate()/60);
  
  food();
  obstacle();
  
  drawSprites();
  
}

function food () {

  if (frameCount % 80 === 0) {
  var banana = createSprite(610 , 200 , 10 , 10);
  banana.addImage(bananaImage)
  banana.y = Math.round(random(160 , 290));
  banana.velocityX = -5;
  banana.scale = 0.1;
  banana.lifetime = 140
  console.log("the Y position of banana is " + " '" + banana.y +"'")
    
 // bananaGroup.add(banana);
    
  }

}

function obstacle() {
 
 if (frameCount % 300 === 0) {
  stone = createSprite(610 , 361 , 10 , 10)
  stone.addImage(obstaceImage)
  stone.scale = 0.1;
  stone.velocityX = -5;
  stone.lifetime = 140;

 }
}
