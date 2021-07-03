var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves,rand

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_image=loadImage("apple.png")
  leaves_image=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

  createApple();
  createLeaves();
  drawSprites();
}
function createApple()
{
if(frameCount%90===0)
{

rand=Math.round(random(20,80))
apple=createSprite(300,30,50,10)
apple.y=rand
apple.velocityY=4
apple.addImage("apple",apple_image)
apple.scale= 0.06


rabbit.depth=apple.depth+1

}
}
function createLeaves()
{
if(frameCount%70===0)
{

rand=Math.round(random(20,80))
leaves=createSprite(100,100)
leaves.y=rand
leaves.velocityY=4
leaves.addImage("leaves",leaves_image)
leaves.scale= 0.06


rabbit.depth=leaves.depth+1

}







}
