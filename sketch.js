var fixedRect, movingRect;
var go1 , go2, go3, go4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
go1 = createSprite(100,100,50,50)
go2 = createSprite(200,100,50,50)
go3 = createSprite(300,100,50,50)
go4 = createSprite(400,100,50,50)






}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go4)){
    movingRect.shapeColor = "black";
    go4.shapeColor = "white";
  }else{
    movingRect.shapeColor = "green";
  go4.shapeColor = "green";
  }
  drawSprites();
}



