
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var slingShot;
var boy,boyImg;
var tree1,treeIg;
var mango1,mangoig;

function preload()
{

	boyImg=loadImage("sprites/boy.png")
	
	treeIg=loadImage('sprites/tree.png')

	mangoig=loadImage('sprites/mango.png')
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

	ground1 = new Ground(600,height,1200,20);

	

	boy=createSprite(200, 630, 10,10);
    boy.addImage(boyImg)
	boy.scale=0.1
	
	tree1 =createSprite(600,520,10,10);
	tree1.addImage(treeIg)
	tree1.scale=0.3

    mango1=createSprite(630,520,10,10);
	mango1.addImage(mangoig)
	mango1.scale=0.1

	mango2=createSprite(610,450,10,10);
	mango2.addImage(mangoig)
	mango2.scale=0.1

	mango3=createSprite(500,440,10,10);
	mango3.addImage(mangoig)
	mango3.scale=0.1

	mango4=createSprite(700,440,10,10);
	mango4.addImage(mangoig)
	mango4.scale=0.1

	mango5=createSprite(615,380,10,10);
	mango5.addImage(mangoig)
	mango5.scale=0.1

	mango6=createSprite(750,500,10,10);
	mango6.addImage(mangoig)
	mango6.scale=0.1

	//slingshot = new Stone(boy.body,{x:200, y:100});

}

function draw() {
  rectMode(CENTER);
  background(0);

  
ground1.display();

//slingshot.display();  

boy.display();  

tree1.display();

mango1.display();

mango2.display();

mango3.display();

mango4.display();

mango5.display();

mango6.display();

}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


