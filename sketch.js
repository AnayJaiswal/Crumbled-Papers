const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1;
var wall2;
var wall3;
var paper;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,height,800,20);
	wall1= new Dustbin(700,650,20,100);
	wall2=new Dustbin(590,700,200,50);
	wall3=new Dustbin(500,650,20,100);
	paper = new Paper (100,width/2 ,50 ,5);
	paper.shapeColor="pink";
	World.add(world,paper);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
  paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		console.log(paper)
		Matter.Body.applyForce(paper.pody,paper.body.position,{x:85,y:-85})
	}
}