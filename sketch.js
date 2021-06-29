
var gameOver,restart,gameOverImage,restartImage;

//stage1
var PLAY1 = 1;
var END1 = 0;
var bg,bgI,ig;
var pit,pitI;
var maskI;
var chef,chefI;
var jumpSound,dieSound,checkpointSound;
var score = 0;
var virus,virusI;
var gameState = PLAY1 ;
var pitGroup
var maskGroup
//stage2
var PLAY2 = 1;
var END2 = 0;
var banana,bread,broccoli,cheese,coconut,ketchup_b,lettuce,onion,pbase,spice,tomato,bg2;
var bananaI,breadI,broccoliI,cheeseI,coconutI,ketchup_bI,lettuceI,onionI,pbaseI,spiceI,tomatoI,bg2I;
var iGroup, eGroup;

//stage3
var PLAY3 = 1;
var END3 = 0;
//burger
var bun,bp,bpl,bplt,proper_burger,mayo,bg_b;
var bunI,bpI,bplI,bpltI,proper_burgerI,mayoI,bg_bI;
//pizzeria
var bg_p,ketchup_p,main_pizza,mushroom,pbase,ps,psc,psct,psctm;
var bg_pI,ketchup_pI,main_pizzaI,mushroomI,pbaseI,psI,pscI,psctI,psctmI;
//indian
var bg_i,corn,curry,daal,indian_main,indian_main2,rice;
var bg_iI,cornI,curryI,daalI,indian_mainI,indian_main2I,riceI;
//snacks
var bg_s,chutney,main_snack,samosa,tomato;
var bg_sI,chutneyI,main_snackI,samosaI,tomatoI;

function preload(){
  gameOverImage=loadImage("GO.png");
  restartImage=loadImage("restart1.png");
  //stage1
  bgI=loadImage("stage1I/road.png");
  jumpSound = loadSound("stage1I/jump.mp3")
  dieSound = loadSound("stage1I/die.mp3")
  checkPointSound = loadSound("stage1I/checkPoint.mp3")
  chefI=loadImage("stage1I/chef1.png");
  virusI = loadImage("stage1I/virus.png")
  pitI = loadImage("stage1I/pit.jpg")
  maskI = loadImage("stage1I/mask.png")
  //stage2
  bananaI = loadImage("stage2I/banana.png")
  breadI = loadImage("stage2I/bread.png")
  broccoliI = loadImage("stage2I/broccoli.png")
  cheeseI = loadImage("stage2I/cheese.png");
  coconutI = loadImage("stage2I/cocnut.png")
  ketchup_bI = loadImage("stage2I/ketchup.png");
  lettuceI = loadImage("stage2I/lettuce.png");
  onionI = loadImage("stage2I/onion.png");
  pbaseI = loadImage("stage2I/pbase.png");
  spiceI = loadImage("stage2I/spice.jpg");
  tomatoI=loadImage("stage2I/tomato.png");
  bg2I = loadImage("stage2I/bg2.jpg")
  //stage3
  //burger shop
  bunI = loadImage("stage3I/burger-shop/bun.jpg");
  bpI = loadImage("stage3I/burger-shop/bun-patty.jpg");
  bplI = loadImage("stage3I/burger-shop/bun-patty-lettuce.jpg");
  bpltI = loadImage("stage3I/burger-shop/bun-patty-lettuce-tomato.jpg");
  proper_burgerI = loadImage("stage3I/burger-shop/proper-burger.jpg");
  mayoI = loadImage("stage3I/burger-shop/mayonise.jpg")
  bg_bI = loadImage("stage3I/burger-shop/bg-b.jpg");
  //pizzeria
  bg_pI = loadImage("stage3I/pizzeria/bg-p.jpg")
  ketchup_pI = loadImage("stage3I/pizzeria/ketchup.png")
  main_pizzaI = loadImage("stage3I/pizzeria/main-pizza.png")
  mushroomI = loadImage("stage3I/pizzeria/mushroom.png")
  pbaseI = loadImage("stage3I/pizzeria/pbase.png")
  psI = loadImage("stage3I/pizzeria/pizza-sauce.jpg")
  pscI = loadImage("stage3I/pizzeria/pizza-sauce-cheese.jpg")
  psctI = loadImage("stage3I/pizzeria/pizza-sauce-cheese-tomato.jpg")
  psctmI = loadImage("stage3I/pizzeria/pizza-sauce-cheese-tomato-mushroom.jpg")
  //indian
  bg_iI = loadImage("stage3I/indian-restaurant/bg-i.jpg")
  cornI = loadImage("stage3I/indian-restaurant/corn.png")
  curryI = loadImage("stage3I/indian-restaurant/curry.jpg")
  daalI = loadImage("stage3I/indian-restaurant/daal.jpg")
  indian_mainI = loadImage("stage3I/indian-restaurant/indian-main.png")
  indian_main2I = loadImage("stage3I/indian-restaurant/indian-main2.png")
  riceI = loadImage("stage3I/indian-restaurant/rice.jpg")
  //snacks
  bg_sI = loadImage("stage3I/snacks corner/bg-s.jpg")
  chutneyI = loadImage("stage3I/snacks corner/chutney.jpg")
  main_snackI = loadImage("stage3I/snacks corner/main-snack.png")
  samosaI = loadImage("stage3I/snacks corner/samosa.jpg")
  tomatoI = loadImage("stage3I/snacks corner/tomato.jpg")
}

function setup() {
 createCanvas(1250,640);

  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;
  
  restart = createSprite(300,180);
  restart.addImage(restartImage);
  restart.visible = false;
  
  //obstaclesGroup=new Group();
  
  score=0;
  stage1 = new Stage1()

  pitGroup = new Group()
  maskGroup = new Group()
}

function draw() {
 background("black");
  stage1.display()
  spawnObstacles()
  spawnmasks()
 // console.log(chef.y);
   //Gravity


  /*if(chef.x > ){
    background("cyan")
    textSize(40)
    stroke("black")
    fill("white")
    text("You are passed to the second Stage!!")
  }
  
  if(gameState = PLAY2){
    bg2=createSprite(0,0,0,0);
    bg2.addImage(bg2I);

    ingredients();
    enemy();
    iGroup.setVelocityXEach = (7+(score/4))
    eGroup.setVelocityXEach = (8+(score/10))
    stroke("red");
    textSize(20);
    text("Score: " + score,10,20);
  }

  if(gameState = END2){
    eGroup.setVelocityEach(0,0);
    iGroup.setVelocityEach(0,0);
    eGroup.setLifetimeEach(-1);
    iGroup.setLifetimeEach(-1);
    gameOver.visible = true;
  }
  if(score === (i will write this aftterwards) ){
    background("cyan")
    textSize(40)
    stroke("black")
    fill("white")
    text("You are passed to the last Stage!!")

  }
  */
  
 
  drawSprites();
  fill("lightpink");
  textSize(20);
   text("Score: "+ score, 500,50);
}

function reset(){
  gameState=PLAY1;
gameOver.visible=false;
restart.visible=false;
chef.changeAnimation("girl_running",girl_running);
  pit.destroy();
  score=0;
 virus.x=50;
}



//stge2
function ingredients(){
  var ingredients = createSprite(50, 600, 10, 10);
  if (frameCount % 40 === 0) {
    ingredients.velocityY = Math.round(random(-10,10));
    ingredients.scale = 0.2;
    var rand = Math.round(random(1,4));
    if (rand === 1) {
      ingredients.addImage(breadI);
    } else if (rand == 2) {
      ingredients.addImage(broccoliI);
    }
    else if (rand === 3){
     ingredients.addImage(cheeseI); 
    }
    else if (rand === 4){
     ingredients.addImage(ketchupI); 
    }
    else if (rand === 5){
      ingredients.addImage(lettuceI); 
     }
     else if (rand === 6){
      ingredients.addImage(onionI); 
     }
     else if (rand === 7){
      ingredients.addImage(pbaseI); 
     }
     else if (rand === 8){
      ingredients.addImage(spiceI); 
     }
     else if (rand === 9){
      ingredients.addImage(tomatoI); 
     }
    ingredients.y = Math.round(random(20,380));
    ingredients.x = Math.round(random(20, 580));
    ingredients.velocityX = Math.round(random(-10,10));
    ingredients.setLifetime = 50;
    iGroup.add(ingredients);
  }
}

function enemy(){
  var enemy = createSprite(50, 600, 10, 10);
  if (frameCount % 40 === 0) {
    enemy.velocityY = Math.round(random(-10,10));
    enemy.scale = 1;
    var rand = Math.round(random(1,2));
    if (rand === 1) {
      enemy.addImage(bananaI);
    } else if (rand == 2) {
      enemy.addImage(coconutI);
    }
    enemy.y = Math.round(random(20,380));
    enemy.x = Math.round(random(20, 580));
    enemy.velocityX = Math.round(random(-10,10));
    enemy.setLifetime = 50;
    eGroup.add(enemy);
}
}

function mousePressed(ingredients){
  score = score + 1
  iGroup.destroyEach();
}

function mousePressed(enemy){
  gameState = END2;
}

function spawnObstacles() {
  if (frameCount % 150 === 0){
  pit = createSprite(1250,580,10,40);
  pit.velocityX = -6 ;//+ score/100);
  
   //generate random obstacles
  var rand = Math.round(random(1,6));
    pit.addImage(pitI);
  pit.scale=0.1;
   pit.debug=false;
   pit.depth = bg.depth+1
  // pit.depth = chef.depth+1
  chef.depth = pit.depth+1
   pit.setCollider("circle",0,0,1);

   pitGroup.add(pit)
   
  }
    
}

function spawnmasks() {
 if (frameCount % 400 === 0){
 var mask = createSprite(1250,500,10,40);
mask.velocityX = -6 ;//+ score/100);
 
  //generate random masks
 var rand = Math.round(random(1,6));
   mask.addImage(maskI);
mask.scale=0.8;
  mask.debug=false;
mask.setCollider("circle",0,0,1);
mask.depth = chef.depth+1
maskGroup.add(mask)
 }
   
}


