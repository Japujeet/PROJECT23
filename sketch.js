var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);



package=createSprite(width/2, 80, 10,10);
package.addImage(packageIMG)
package.scale=0.2

helicopter=createSprite(width/2, 200, 10,10);
helicopter.addImage(helicopterIMG)
helicopter.scale=0.6

ground=createSprite(width/2, height-35, width,10);
ground.shapeColor=color(255)


engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
World.add(world, packageBody);



ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground,package);


Engine.run(engine);

box1=new Box(310,600,20,100);
box2=new Box(490,600,20,100);
box3=new Box(400,660,200,20);
}


function draw() {
keyPressed();
ellipseMode(RADIUS);
ellipse(package.position.x,package.position.y,10,10)
background(0);
Engine.update(engine);
package.x= packageBody.position.x 
package.y= packageBody.position.y 
box1.display();
box2.display();
box3.display();
drawSprites();

}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false)
}
}


