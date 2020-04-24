var ball1,ball2;

function setup() {
  
  
  createCanvas(800,400);
  ball1 = createSprite(650,200, 50, 50);
  ball1.shapeColor = "red";
  ball2 = createSprite(50,200,50,50);
  ball2.shapeColor = "blue";
  ball1.velocityX = -2;
  ball2.velocityX = 2;

}


function draw() {
  
  if(ball1.x - ball2.x <= (ball1.width/2)+(ball2.width/2)){
    ball1.velocityX = ball1.velocityX * (-1);
    ball2.velocityX = ball2.velocityX * (-1);
  }
  
  background(255,255,255);  
  drawSprites();
}