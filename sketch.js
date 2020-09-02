
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground, groundImage;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
 
  
 
  
  
  ground = createSprite(200,350,400,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  if(keyDown("space")) {
    monkey.velocityY = -5;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
 
  monkey.collide(ground);
 
  
 spawnFood();
 obstacles(); 
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  
  
  
  
  
  drawSprites();
  
}

function spawnFood() {
   if(frameCount % 80 === 0) {
      var banana = createSprite(400,340,20,50);
      banana.y = Math.round(random(120,200));
      banana.addImage(bananaImage);
      banana.scale = 0.05;
      banana.velocityX = -3;
      banana.lifetime = 300;
      foodGroup.add(banana);
  
  }
}







function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  
  }

}



