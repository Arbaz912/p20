
function preload() {
    catImg1=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadImage("images/cat4.png")
    
    mouseImg1=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");
    backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(870,600,20,20);
    cat.addImage(catImg1);
    
    cat.scale=0.2
    mouse=createSprite(200,600,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale=0.15

}

function draw() {

  background(backgroundImg);

  if(cat.x-mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.x=300;
    cat.addImage(catImg3)
    
    
    mouse.addImage(mouseImg3)


  }
        
  keyPressed();

  drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
  cat.addAnimation("catRunning",catImg2)
  cat.changeAnimation("catRunning",catImg2)
  mouse.frameDelay = 25 
  cat.velocityX=-5;

  mouse.addAnimation("mouseTesing",mouseImg2)
  mouse.changeAnimation("mouseTesing",mouseImg2)
}



}