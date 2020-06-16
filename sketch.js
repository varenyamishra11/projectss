var bullet, wall;
var speed,weight;
var thickness;
var bulletRightEdge,wallLeftEdge

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,60,20);
  speed=random( 30,52);
  weight = random(223,321)
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor = color(92,97,93);
  

}

function draw() {
  background(255,255,255); 
console.log(thickness);
if (hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if (damage>10) {
    wall.shapeColor=color(255,0,0)
  }

  if (damage<10) {
    wall.shapeColor=color(0,255,0)
  }
}
  drawSprites();
} 

function hasCollided(bullet,wall) {

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if (bulletRightEdge>=wallLeftEdge) {
  return true;
}
return false;
/*wall.x-bullet.x <bullet.width/2 + wall.width/2  && 
  bullet.x- wall.x <bullet.width/2 + wall.width/2&&
 wall.y-wall.y <bullet.width/2 + wall.width/2&&
 bullet.y - wall.y <bullet.width/2 + wall.width/2*/
}