
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var boy,boyImage;
var stone;
var ground;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var stone,mango;

function preload()
{
	treeImage=loadImage("/PluckingMangoes/tree.png");
	boy=loadImage("/PluckingMangoes/boy.png");
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
 

   /*tree=createSprite(1200,350);
   tree.addImage(treeImage);
   tree.scale=0.5*/


   stone=new Stone(235,420,30);

   mango1=new Mango(1120,170,25);
   mango2=new Mango(1180,170,25);
   mango3=new Mango(1240,170,25);
   mango4=new Mango(1120,230,25);
   mango5=new Mango(1180,230,25);
   mango6=new Mango(1240,230,25);
   mango7=new Mango(1120,290,25);
   mango8=new Mango(1180,290,25);
   mango9=new Mango(1240,290,25);
   mango10=new Mango(1300,230,25);
   mango11=new Mango(1300,290,25);
   mango12=new Mango(1360,290,25);  

   tree=new Tree(1200,670);

   ground=new Ground(width/2,670,width,20);

   sling=new Sling(stone.body,{x:260,y:430});


	//Engine.run(engine);
  
}


function draw() {

 Engine.update(engine);

  rectMode(CENTER);
  background(255);

  fill(0);
  textSize(50);
  text("PRESS SPACE FOR A SECOND CHANCE",100,100);


  image(boy,200,360,300,400);

  tree.display();

  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango5.display();
  mango6.display();
  mango4.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  ground.display();

  sling.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);


  
}

function mouseDragged() {
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling.fly();
}

function keyPressed(){
 if (keyCode===32){
    Matter.Body.setPosition(stone.body,{x:200,y:200});
    sling.attach(stone.body);
 }
}

function detectCollision(stone,mango){
  mangoPosition=mango.body.position;
  stonePosition=stone.body.position;

  var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
  if(distance<=mango.r+stone.r){
     Matter.Body.setStatic(mango.body);
  }
  
}



