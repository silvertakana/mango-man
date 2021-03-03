
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mangoF = [],rock,sling,handPos;
var world,boy,mangos = 100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	handPos = {x:240,y:420};
	//handPos = createVector(300,300)
	engine = Engine.create();
	world = engine.world;
	rock = new Rock(handPos.x,handPos.y,30);
	for(var i = 0;i<mangos;i++)
	{
		mangoF[i]=new mango(random(859, 1273),random(66, 304),30);
	}
	
	sling = new Joint(rock.body,handPos,.1,.003)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  if(mouseIsPressed){
	
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
   sling.join(rock.body);
	
}  
	console.log(mouseX,mouseY);
	
	
  treeObj.display();
  for(var i = 0;i<mangoF.length;i++){
	rock.isTouching(mangoF[i]);
	mangoF[i].display();
}
	rock.display();
	sling.display();
  groundObject.display();
}
function mouseReleased(){
    sling.break();
}
