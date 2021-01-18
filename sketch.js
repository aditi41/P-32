const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
var backgroundImg;

function preload(){
  
  polygon_img=loadImage("polygon.png");
  getBackgroundImg();

}
function setup() {
  createCanvas(1250,550);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(625,540,1250,10);
  stand1 = new Stand(690,400,350,10);
  stand2 = new Stand(1100,300,300,10);
 
  //level one
  block1 = new Block(570,375,30,40);
  block2 = new Block(600,375,30,40);
  block3 = new Block(630,375,30,40);
  block4 = new Block(660,375,30,40);
  block5 = new Block(690,375,30,40);
  block6 = new Block(720,375,30,40);
  block7 = new Block(750,375,30,40);
  block8 = new Block(780,375,30,40);
  block9 = new Block(810,375,30,40);
  
  //level two
  block10 = new Block(600,335,30,40);
  block11 = new Block(630,335,30,40);
  block12 = new Block(660,335,30,40);
  block13 = new Block(690,335,30,40);
  block14 = new Block(720,335,30,40);
  block15 = new Block(750,335,30,40);
  block16 = new Block(780,335,30,40);
  
  //level three
  block17 = new Block(630,285,30,40);
  block18 = new Block(660,285,30,40);
  block19 = new Block(690,285,30,40);
  block20 = new Block(720,285,30,40);
  block21 = new Block(750,285,30,40);
  
  //level four
  block22 = new Block(660,245,30,40);
  block23 = new Block(690,245,30,40);
  block24 = new Block(720,245,30,40);
  
  //top
  block25 = new Block(690,205,30,40); 
  
  //set 2 for second stand
  //level one 
  blocks1 = new Block(1010,275,30,40);
  blocks2 = new Block(1040,275,30,40);
  blocks3 = new Block(1070,275,30,40);
  blocks4 = new Block(1100,275,30,40);
  blocks5 = new Block(1130,275,30,40);
  blocks6 = new Block(1160,275,30,40);
  blocks7 = new Block(1190,275,30,40);
  
  //level two
  blocks8 = new Block(1040,245,30,40);
  blocks9 = new Block(1070,245,30,40);
  blocks10 = new Block(1100,245,30,40);
  blocks11 = new Block(1130,245,30,40);
  blocks12 = new Block(1160,245,30,40);
  
  //level three
  blocks13 = new Block(1070,185,30,40);
  blocks14 = new Block(1100,185,30,40);
  blocks15 = new Block(1130,185,30,40);
  
  //top
  blocks16 = new Block(1100,155,30,40);
  
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:300});

}
function draw() {
  
  if(backgroundImg)
  background(backgroundImg);
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("gold");
  text("SCORE : "+score,1100,30)
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Press Space to get a second chance to play!!",820,510);
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
  blocks15.score();
  blocks16.score();

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  fill("pink");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  fill("turquoise");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  fill("grey");
  block22.display();
  block23.display();
  block24.display();
  
  fill("yellow");
  block25.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  
  fill("pink");
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  
  fill("turquoise");
  blocks13.display();
  blocks14.display();
  blocks15.display();
  
  fill("grey");
  blocks16.display();
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=17){
      bg = "sun.jpg";
  }
  else{
      bg = "moon.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
