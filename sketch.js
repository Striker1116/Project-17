
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
 monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
obstaclesGroup=new Group()
fruitsGroup=new Group()

  
}


function draw() {
background("white")
if(ground.x>0){
  ground.x=ground.width/2
}
if(keyDown("space")){
  monkey.velocityY = -20
}
monkey.velocityY=monkey.velocityY+0.8

  monkey.collide(ground)
drawSprites()
spawnFruits()
spawnObstacles()
textSize(30)
text("survivalTime =" + score,150,40)
score=score+Math.round(frameCount/100)
}



function spawnFruits () {
  if (World.frameCount % 150 === 0) {
    var fruit = createSprite(400,190,40,10);
    fruit.velocityX=-10;
    fruit.addImage("Banana",bananaImage);
    fruit.scale = 0.1;
    fruit.velocityX = -3;
    fruitsGroup.add(fruit);
    
    fruit.lifetime = 200;
    
 
    
  }
}

function spawnObstacles () {
  if(World.frameCount % 70===0){
     var obstacle1=createSprite(400,320,5,40);
      obstacle1.velocityX=-7;
      obstacle1.addImage("obstacle",obstacleImage);
      obstacle1.scale=0.15;
      obstacle1.lifetime = 200;
      obstaclesGroup.add(obstacle1);
   }
         }







