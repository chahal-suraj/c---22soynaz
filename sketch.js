const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var eng,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  eng = Engine.create();
  world = eng.world;
  var ground_options={isStatic:true}
  ground = Bodies.rectangle(200,100,50,50,ground_options);
  World.add(world,ground) ;
  console.log(ground)
  console.log(ground.position.x)
  console.log(ground.position.y)
  var ball_options ={restitution:1.0}

  var ball = Bodies.circle(200,100,20);
  World.add(World,ball);
}

function draw() {
  background(0);  
  Engine.update(eng);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}