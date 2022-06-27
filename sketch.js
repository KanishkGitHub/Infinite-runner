var trex, trex_running,trex_stop
var forest,forestImage

var burger,burgerImage,burgerG
var mango,mangoImage,mangoG
var bomb,bombImage,bombG
var electric,electricImage,electricG
var grenade,grenadeImage,grenadeG
var donut,donutImage,donutG
var chicken,chickenImage,chickenG
var dragon,dragon_flying,dragonG

var gameover,gameoverImage
var restart

var Health=100

var PLAY=1
var END=0
var gameState=1

function preload(){
trex_running = loadAnimation("trex-0.png","trex-10.png","trex-20.png","trex-30.png","trex-40.png","trex-50.png")
trex_stop = loadAnimation("trex-0.png")

forestImage = loadImage("light forest aakhree umeed.jpg")
bombImage = loadImage("dynamite03.png")
electricImage = loadImage("unnamed.png")

//dragon_flying = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png")

burgerImage = loadImage("1503001226-sonic-jr-burger.png")
mangoImage = loadImage("928_1647320862435.webp")
  //chickenImage = loadImage("")

gameoverImage=loadImage("game_over_PNG42.png")
}


function setup(){
  createCanvas(920, 300);
  
  forest = createSprite(120,90,50,20);
  forest.addImage("forest",forestImage);
  forest.velocityX=-4
  forest.scale=1.5
  

  trex = createSprite(120,200,30,50);
  trex.addAnimation("running", trex_running);
trex.addAnimation("stop",trex_stop)

  gameover = createSprite(500,150);
  gameover.addImage(gameoverImage);
  gameover.scale = 0.3;
  gameover.visible = false;  

  Health=100

  
  burgerG= new Group()
  mangoG= new Group()
  bombG= new Group()
  electricG= new Group()
 // dragonG= new Group()

  trex.setCollider("rectangle",0,0,600,370);
  trex.debug = false

  //bomb.setCollider("rectangle",0,0,100,bomb.height);
  //bomb.debug = true

}




function draw(){

  if (gameState===PLAY){
    background(180)
    gameover.visible = false; 
    trex.scale=0.25
  
    if(forest.x < 0){
      forest.x = width/2
    } 

    edges= createEdgeSprites();
    trex .collide(edges);
   

  if(keyDown("UP_ARROW")){
  trex.y=trex.y-5
  }
  
  if(keyDown("DOWN_ARROW")){
    trex.y=trex.y+5
    }
  
   
      createBurger()
      createMango()
      createBomb()
      createElectric()
     // createDragon()
  

      if (burgerG.isTouching(trex)){
       burgerG.destroyEach()
       Health=Health+50
      }
  
      

      else if (mangoG.isTouching(trex)){
        mangoG.destroyEach()
        Health=Health+100
      }

      else if (electricG.isTouching(trex)){
        electricG.destroyEach()
        Health=Health-30
      }

      //////else if (dragonG.isTouching(trex)){
       // dragonG.destroyEach()
       // Health=Health-45
    //  }
      
   
        if (bombG.isTouching(trex)){
          gameState=END
      
        }
      }

      

      
  
      
      drawSprites();
      if (gameState===END){
        burgerG.destroyEach();
     mangoG.destroyEach();
     electricG.destroyEach();
     bombG.destroyEach();
     //dragonG.destroyEach();
     gameover.visible = true;  
     burgerG.setVelocityXEach(0)
     mangoG.setVelocityXEach(0)
     electricG.setVelocityXEach(0)
     bombG.setVelocityXEach(0)
     //dragonG.setVelocityXEach(0)
    forest.velocityX=0
  

     trex.changeAnimation("stop",trex_stop)
     if (keyDown("RIGHT_ARROW")){
      restart()
     }
     textSize(40)
     fill(255)
     text("Press right arrow to restart",300,280)

    } 
 

      if (Health <= 0){
        gameState=END
        gameover.visible = true;  

       
        if (keyDown("RIGHT_ARROW")) {
          restart();
        }
      
        
      }
      

      textSize(20);
      fill(255);
      text(" Health: "+Health,10,30);
  
 
  }



function restart(){

  gameState=PLAY
 
  trex.changeAnimation("running", trex_running)
  forest.velocityX=-4
 
}



function createBurger(){
  if (World.frameCount % 230==0){
  var burger = createSprite(1100,Math.round(random(20,200)),10,10)
  burger.addImage(burgerImage)
  burger.velocityX = -7
  burger.lifetime = 300
  burger.scale = 0.06
  burgerG.add(burger)
  }
}


function createBomb(){
  if (World.frameCount % 250==0){
  var bomb = createSprite(1100,Math.round(random(20,200)),10,10)
  bomb .addImage(bombImage)
  bomb.velocityX = -7
  bomb.lifetime = 300
  bomb.scale=0.05
  bombG.add(bomb)
  }
}
function createMango(){
  if (World.frameCount % 300==0){
  var mango = createSprite(1100,Math.round(random(20,200)),10,10)
  mango .addImage(mangoImage)
  mango.velocityX = -7
  mango.lifetime = 300
  mango.scale=0.09
  mangoG.add(mango)
  }
}
function createElectric(){
  if (World.frameCount % 315==0){
  var electric = createSprite(1100,Math.round(random(20,200)),10,10)
  electric .addImage(electricImage)
  electric.velocityX = -7
  electric.lifetime = 300
  electric.scale=0.06
  electricG.add(electric)
  }
}


//function createDragon(){
  //if (World.frameCount % 100==0){
 // var dragon = createSprite(1100,Math.round(random(20,200)),10,10)
 // dragon .addAnimation("flying",dragon_flying)
 //// dragon.velocityX = -8
 // dragon.lifetime = 300
 //// dragon.scale=8
 // dragonG.add(dragon)
  //}
//}
