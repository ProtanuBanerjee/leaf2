var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leaf1;
var app,appImg;
var red,redImg;
var org,orgImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leaf1=loadImage("leaf.png");
  appImg=loadImage("apple.png");
  redImg=loadImage("redImage.png")
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
  rabbit.x=World.mouseX;
 
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spwleaf();
  spwapple();
  swared();
  drawSprites();
}
function spwleaf()
{ 
  if(frameCount%50===0)
  {
  leaf=createSprite(600,0,40,15)
  leaf.addImage(leaf1);
  leaf.scale=0.1;
  leaf.velocityY=3;
  leaf.x=Math.round(random(15,355))
}}
function spwapple()
{
  if(frameCount%60===0){
  app=createSprite(600,0,40,15)
  app.addImage(appImg)
  app.scale=0.07;
  app.velocityY=3;
  app.x=Math.round(random(10,340))
}}
function swared()
{
  if(frameCount%80===0){
  red=createSprite(600,0,40,15)
  red.addImage(redImg)
  red.scale=0.07;
  red.velocityY=3;
  red.x=Math.round(random(10,340))
}}
