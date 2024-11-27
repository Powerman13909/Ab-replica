const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, groundAfloat;
var hero;
var bg, bgImg;



function setup() {
  createCanvas(1350, 630);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1900, 10);
  hero = new Hero(200, 200);
  groundAfloat = new Ground(1100, 300, 650, 10);
}

function draw() {
  background(0);

  Engine.update(engine);
  ground.display();
  hero.display();
  groundAfloat.display();
  
  drawSprites();
  if (mouseIsPressed) {
    text(mouseX + "," + mouseY, mouseX, mouseY);
  }
}