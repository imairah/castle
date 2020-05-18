const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var building1;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  building1= new Building(150,150,200,200);

  ground = new Ground(200,400,400,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  building1.display();
  ground.display();
}