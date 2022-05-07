const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

var snowman
var ground



function preload(){
backgroundImg=loadImage("snow1.jpg")





}

function setup() {
  createCanvas(1365,625);
  engine = Engine.create();
    world = engine.world;
    
score=0
   
    snowman=new Snowman(700,10,120,120)
    ground=new Ground(670,620,1400,30)


}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
 

 
 
 
  snowman.display()
  ground.display()
  
 
  
  
  
  drawSprites();
}



  

 

  

 