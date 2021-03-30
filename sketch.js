const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var particles;
var Particles = [particles];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var gameState = "Play";

var count = 0;
var score = 0;


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  textSize(35);
  text("Score: " + score, 20, 40);
  fill(255);

  textSize(35);
  text("100", 10, 550);
  text("100", 90, 550);
  text("200", 170, 550);
  text("200", 250, 550);
  text("300", 330, 550);
  text("300", 410, 550);

  ground.display(); 

  if(gameState == "End"){
    background("black");
    fill("red");
    textSize(50);
    text("Game Over", 100, 400);
  }

 
  for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
  }

  if(particles!=null){
    particles.display();

    if(particles.body.position.y>700){

        if(particles.body.position.x<160){
          score = score+100;
          particles = null;
          if(count >= 5) gameState = "End";
        }

        else if(particles.body.position.x<320 && particles.body.position.x>161){
          score = score+200;
          particles = null;
          if(count >= 5) gameState = "End";          
        }

        else if(particles.body.position.x<480 && particles.body.position.x>321){
          score = score+300;
          particles = null;
          if(count >= 5) gameState = "End";          
        }

    }

  }

  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
    
  }

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    if(gameState !== "End"){
      count++;
      particles = new Ball(mouseX, 50, 10);
    }
  }
}