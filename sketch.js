var leftKey, rightKey, upKey, downKey
var leftKeyImg, rightKeyImg, upKeyImg, downKeyImg
var circle1, circle2, circle3, circle4
var scene, sceneIMG
var leftKeyGroup, rightKeyGroup



function preload() {

  sceneIMG=loadImage("bg.jpg")
  leftKeyImg=loadImage("left arrow.png")

}

function setup() {
  canvas = createCanvas(800,800);
   circle1 = createSprite(200,700, 10,10)
   circle2 = createSprite(350,700, 10,10)
   circle3 = createSprite(500,700, 10,10)
   circle4 = createSprite(650,700, 10,10)
   scene = createSprite(0,0,800,800)
  scene.addImage(sceneIMG)
  scene.scale = 5

  leftKeyGroup= new Group()
   



}

function draw() {
 background(0)

 scene.velocityY= 2;
 if(scene.y>800){
   scene.y= scene.height/2
 }
leftArrow()
 //arrowKeys();
 drawSprites()
}

/*function arrowKeys(){
if(frameCount%70===0){
  //leftKey = createSprite(200,50,10,50)
  leftKey.addImage(leftKeyImg)
  leftKey.scale= 0.5
  leftKey.velocityY= -5
}
if(frameCount%40===0){
  rightKey = createSprite(350,50,10,50)
  rightKey.velocityY= -5 
}
if(frameCount%60===0){
  upKey = createSprite(500,50,10,50)
  upKey.velocityY= -5 
}
if(frameCount%10===0){
  downKey = createSprite(650,50,10,50)
  downKey.velocityY= -5 
}

}*/
function leftArrow(){
  leftKey = createSprite(Math.round(random(50,350)),40,10,50)
  leftKey.addImage(leftKeyImg)
  leftKey.velocityY= 2
  leftKey.scale= 0.5
  
  leftKeyGroup.add(leftKey)
}

