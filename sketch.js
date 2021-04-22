const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, person, pImg;
var engine, world;
var maxSnow = 5;
var snow, createSnow= [];


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
  snow = new ani(random(50,700),random(50,300));
  if(frameCount % 200 === 0){

    for(var i=0; i<maxSnow; i++){
        createSnow.push(new ani(random(50,700), random(50,300)));
    }

}
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
    
  for(var i = 0; i<maxSnow; i++){
    createSnow[i].display();
    createSnow[i].updateY()  
}
keyPressed();
drawSprites();
  
  
}

function keyPressed(){
  if (keyCode === 39) {
    person.x += 1
  } 
  if(keyCode === 37) {
    person.x -= 1
  } 
}