var fixedRect, movingRect,gameObj1,gameObj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(100,200,80,30);
  gameObj1.shapeColor = "green";
  gameObj1.debug = true;

  gameObj2 = createSprite(200,200,80,30);
  gameObj2.shapeColor = "green";
  gameObj2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  

  gameObj2.x = World.mouseX;
  gameObj2.y = World.mouseY;

if(isTouching(gameObj1,gameObj2)){
  gameObj1.shapeColor = "red";
  gameObj2.shapeColor = "red";
}
  else{
    gameObj1.shapeColor = "green";
    gameObj2.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);
  drawSprites();
}
