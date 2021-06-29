class Stage1{
    constructor(){

        
 iGroup = new Group();
 eGroup = new Group();
   
 bg=createSprite(0,325,1000,0);
 bg.velocityX = -3;
 bg.x = bg.width /2;
 bg.addImage("bgI",bgI);
 bg.scale=1.6;

 
   
    chef=createSprite(350,570,600,10);
   chef.addImage("chefI",chefI);
   chef.scale=0.8;
  // chef.velocityX=2;
   chef.debug=false;
   chef.setCollider("rectangle",0,0,chef.width,chef.height)
   
   
  virus=createSprite(100,560,600,10);
  virus.addImage("virusI",virusI);
  virus.scale=0.4;
  virus.debug=false;
   
   ig=createSprite(650,620,1250,10);
   ig.visible=false;

    }


    display(){
        chef.velocityY = chef.velocityY + 0.8;
    chef.collide(ig); 
      
       //Gravity
    virus.velocityY =virus.velocityY + 0.8;
    virus.collide(ig); 
      
    console.log(gameState)
      gameState= PLAY1

       if (gameState===PLAY1){
        if (bg.x <= 0){
          bg.x = bg.width/2;
       
        }
     
        gameOver.visible=false;
      restart.visible=false;
        // virus.y=chef.y;
       score = score + Math.round(getFrameRate()/60);
     

       if (pitGroup.isTouching(virus)){
        virus.velocityX=virus.velocityX + 0.001;
       }
     bg.velocityX = -(4 + 3* score/100);
      
          if(maskGroup.isTouching(chef)){
            //  score = score + 1000
            //  checkPointSound.play() 
          }
    
         if(score>0 && score%100 === 0){
           //checkPointSound.play() 
        }
        
     if((keyDown("space")&& chef.y >= 220)) {
       chef.velocityY = -12;
    //    jumpSound.play();
      }  
      
      if (pitGroup.isTouching(chef)){
        gameState=END1;
      //   dieSound.play();
      }
      }

     if ( gameState===END1) {
      gameOver.visible=true;
      restart.visible=true;
      bg.velocityX = 0;
        chef.velocityY = 0
        virus.velocityX = 0
        maskGroup.setVelocityXEach(0)
      
       // virus.x=chef.x;
    
          //set lifetime of the game objects so that they are never destroyed
        pitGroup.setLifetimeEach(-1);
       pitGroup.setVelocityXEach(0);
      
        if(mousePressedOver(restart)) {
          reset();
        }
    } 
    }

    

}

