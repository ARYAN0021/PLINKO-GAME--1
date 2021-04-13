const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight=300


function preload(){
  
}


function setup() {
  createCanvas(500,780);


  engine = Engine.create();
  world = engine.world;
 
  for(var k = 10;k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,185));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,295));
  }

  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,395));
  }

  
  


  
  ground = new Ground(240,775,800,10)
  
}

function draw() {
  background("black");
  Engine.update(engine);

  if(frameCount%50===0){
    particles.push(new Particles(random(width/2-50,width/2+50),10,10))
  }

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0;j < particles.length; j++){
    particles[j].display();
  }
  ground.display();
textSize(30);
fill ("orange")
text("PLINKO FOX GAME",80,250)
textSize(20);
fill ("red")
text("second part coming soon",10,20)
  //drawSprites();
}