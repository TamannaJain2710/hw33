const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, person, pImg;
var engine, world;
var maxSnow = 100;
var snow= [];


function preload() {
  backgroundImg = loadImage("snow1.jpg");
  pImg = loadImage("person.png");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  person = createSprite(700, 300, 50, 50);
  person.addImage(pImg);
  person.scale=0.25
  snow = new ani(random(50,400),random(50,400));
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  keyPressed();
  drawSprites();
    
  snow.display();
  for (var i =0; i<maxSnow; i++){
    snow.push(new ani(random(50,400),random(50,400)))
  }
  if ((snow.body.position.y > snow.body.height) && (frameCount % 2 == 0) ){
    Matter.Body.setPosition(snow.body, {x:random(50,400), y:random(50,400)})
  }
  
  
}

function keyPressed(){
  if (keyCode === 39) {
    person.x += 1
  } 
  if(keyCode === 37) {
    person.x -= 1
  } 
}