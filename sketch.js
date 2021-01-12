var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(50, 300, 50, 80);
  ob1.shapeColor = "yellow";
  ob1.debug = true;
  ob1.velocityX = 5;

  ob2 = createSprite(600, 300,80,30);
  ob2.shapeColor = "red";
  ob2.debug = true;
  ob2.velocityX = -5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  bounceoff(ob1,ob2);

  if (isTouching(movingRect,fixedRect)){
    text("Touching",50,50);
  }

  drawSprites();
}

