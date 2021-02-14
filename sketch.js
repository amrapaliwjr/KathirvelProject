
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
var paper;
var dustbin;

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	
  ground=new Ground(width/2,670,width,20);
 
	paper = new Paper(100,200,80,80);

  dustbin=new Bin(800,460);



}

function draw() {
  
  background(230);
  Engine.update(engine);

  fill("brown");
  ground.display();
  paper.display();
  //fill("green")
  dustbin.display();
}

function keyPressed(){
if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body, paper.body.position, { x: 130, y: -140});
}
}