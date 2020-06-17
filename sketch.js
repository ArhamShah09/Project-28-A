var paper;
var ground;
var box1,box2,box3;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){

}

function setup() {
	createCanvas(1365,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(682,450,1365,100);
  
  box1 = new Dustbin(1000,390,150,20);
	box2 = new Dustbin(930,350,20,100);
  box3 = new Dustbin(1070,350,20,100);
  
  paper = new Paper(300,390,40);

  launcher = new Launcher(paper.body,{x:300, y:200});

	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  launcher.display();

  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})
  }
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
  launcher.fly();
}
