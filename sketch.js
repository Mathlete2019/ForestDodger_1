const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, monkey,tiger, engine,world,fire;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(0,760,800,30);
  monkey = new Monkey(300,300,25,25);
  fire = new Fire(random(0,800),0,30,30);
  //createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);
  ground.display(); 
  monkey.display(); 
  if(frameCount%30===0){
    fire.display();
    
  }
  drawSprites();
}