var bananaImage
var banana
var obstacleImage
var obstacle 
var obstacleGroup
var backgroundImage
var ground
var score=0;  
var monke
var bananaGroup
var hits="none";
var flag=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var GameOverImage


function preload(){
  bacgroundImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png")
  GameOverImage=loadImage("d9le8q4-94f74ad6-9270-4e42-9e4b-90023fa0d576-removebg-preview.png")
  monkeImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
  
} 
function setup() {
  createCanvas(400, 400);
   
  backgroundImage=createSprite(200,200,1000,1000);
  backgroundImage.velocityX=-5;
  bananaGroup=new Group();
  backgroundImage.addImage("background",bacgroundImage);
  ground=createSprite(200,370,400,10)
  monke=createSprite(50,370,20,20);
  monke.scale=0.1;
  monke.addAnimation("monkeAnimation",monkeImage);
  obstacleGroup=new Group();
  
  
  //score=createSprite(200,200,20,20);
  
 
 
  
}

function draw() {
  
  background(220);
  
  
 
  
  if(gameState===PLAY){
     if(backgroundImage.x<0){
    backgroundImage.x=backgroundImage.width/2;
  }
    monke.collide(ground);
    
     backgroundImage.scale=1
  ground.visible=false;
    
    
    
    if(keyWentDown("space")&& monke.y>300){
    monke.velocityY=-15;
      
      
  } 
    Banana();
    
    if(monke.isTouching(obstacleGroup)&&flag===0){
      
    hits="FirstHit";
    monke.scale=0.1;
    obstacleGroup.destroyEach();
  flag=1;
    }
      if(monke.isTouching(obstacleGroup)&& hits==="FirstHit"){
        
    monke.destroy();
        
    gameState=END;
    
  }
    if(gameState===END){
      
      //bananaGroup.VelocityEach=0;
      obstacleGroup.destroyEach();
      bananaGroup.destroyEach();
      
      
      GameOver=createSprite(200,200,20,20);
  GameOver.addImage("9le8q4-94f74ad6-9270-4e42-9e4b-90023fa0d576-removebg-preview.png",GameOverImage);
      
      backgroundImage.velocityX=0;
      
  //     textSize("40");
  // fill("yellow")
  // text("GAME OVER",200,200,20,20);
  
      
      
      
      
      
      //GameOver=createSprite(200,200,20,20);
      //GameOver.addImage("d9le8q4-94f74ad6-9270-4e42-9e4b-90023fa0d576-removebg-preview.png",bacgroundImage);
  }
  
    
     monke.velocityY = monke.velocityY + 0.8;
  
  if(monke.isTouching(bananaGroup)){
    
    
    score=score+1;
    bananaGroup.destroyEach();
  }
    
    if(World.frameCount%100===0){
    obstacles();
  }
    
  }
  
 
  
  
  
  
  
  
  
  
  
  
  
  
    
    
    
    switch(score){
      case 10:monke.scale=0.12;
            break;
      case 20:monke.scale=0.14;
            break;
      case 30:monke.scale=0.16;
            break;
      case 40:monke.scale=0.18 
            break;
            default:break;
           
            
  
    }
  
    
  
  drawSprites();
  //text("x"+mouseX+"y"+mouseY,10,10)
  
  
  textSize(20);
  fill("black");
  text("Score:"+score,310,30,20,20);
  
  
  
}

function Banana()
{ var banana
  if(World.frameCount%80===0){
    banana =createSprite(395,random(150,300),20,20);
    bananaGroup.add(banana);
    banana.velocityX=-7;
    banana.addImage("banana",bananaImage);
    banana.scale=0.05;
    bananaGroup.setLifetimeEach=(300);
  }
}

function obstacles()
{
  var obstacle=createSprite(390,360,20,20)
  obstacleGroup.add(obstacle)
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-8;
  
}
  

