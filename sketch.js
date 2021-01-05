const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 
function preload()
{
   background_img = loadImage("background.png");
   boy_img = loadImage("boy.png")
   tree_img = loadImage("tree.png")
}

function setup() {
  createCanvas(1422, 800);
  engine = Engine.create();
  world = engine.world;
 
  //create the stone
  stone = new Stone(130, 430, 95, 95);

	//create boy
	var boy = createSprite(190, 662, 100, 100);
	boy.addImage("boy", boy_img)

	//create a constrained chain
	chain = new Chain(stone.body, {x : 130, y : 640});

	//create a mangoes
	mango1 = new Mango(760, 350, 100, 100);
	mango2 = new Mango(900, 350, 100, 100);
	mango3 = new Mango(980, 200, 100, 100);
	mango4 = new Mango(1100, 360, 100, 100);
	mango5 = new Mango(1200, 280, 100, 100);

	//create a ground
	ground = new Ground(711, 790, width, 20)
} 
 
function draw() {
  rectMode(CENTER)
  background(background_img);
  Engine.update(engine);
  drawSprites();
  image(tree_img, 650, 100)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  chain.display();
  ground.display();
  strokeWeight(1.3);
  stroke("white");
  fill("white");
  textSize(35);
  text("Drag the Stone and Release it, to launch it towards the mangoes", 100, 50);
  strokeWeight(1.1);
  stroke("white");
  fill("white");
  textSize(25);
  text("Press the Space to get another chance", 600, 750);
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY})
}

function mouseReleased() {
   chain.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    chain.attach(stone.body)
  }
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lstone.body.position
	stoneBodyPosition = lmango.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance <= lmango.w / 2 + lstone.w / 2)
	{
		Matter.Body.setStatic(lmango.body, false)
	}
}