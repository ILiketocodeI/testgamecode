var character
var person
var enemy
var exitDoor
var celebrate
var getKeyAnimation
var deathAnimation
var personWalk
function preload () {

person = loadImage("PlayerCharacterTest.png")
personWalk = loadImage("PlayerCharacterWalkTest.png")
enemy = loadImage("Enemy.png")
exitDoor = loadImage("ExitDoor.png")
celebrate = loadImage("PlayerCharacterCelebrate.png")
getKeyAnimation = loadImage("PlayerCharacterGetKey.png")
deathAnimation = loadImage("PlayerCharacterDeath.png")

//person = loadImage("PlayerCharacter.png", "PlayerCharacter.png")
//Make sure to change the second PlayerCharacter.png to PlayerCharacterWalk.png
}


function setup () {
canvas = createCanvas(windowWidth, windowHeight);

character = createSprite(100,100,10,10)
character.scale = 0.25
character.addImage(person)
//character.addAnimation("PlayerCharacterWalk", person)

//exitDoor = createSprite(100,100,30,60)

// wall1 = createSprite(140,150,20,500)
// wall1.shapeColor = ("blue")
// wall2 = createSprite(50,150,20,1300)
// wall2.shapeColor = ("blue")
// wall3 = createSprite(380,390,500,20)
// wall3.shapeColor = ("blue")
// wall4 = createSprite(380,490,500,20)
// wall4.shapeColor = ("blue")
// wall5 = createSprite(140,590,20,200)
// wall5.shapeColor = ("blue")
// wall6 = createSprite(380,690,500,20)
// wall6.shapeColor = ("blue")
// wall7 = createSprite(340,790,580,20)
// wall7.shapeColor = ("blue")
// wall8 = createSprite(620,300,20,160)
// wall8.shapeColor = ("blue")
// wall9 = createSprite(450,230,350,20)
// wall9.shapeColor = ("blue")
// wall10 = createSprite(285,160,20,140)
// wall10.shapeColor = ("blue")
// wall11 = createSprite(450,100,350,20)
// wall11.shapeColor = ("blue")
// wall12 = createSprite(620,600,20,200)
// wall12.shapeColor = ("blue")
// wall13 = createSprite(615,52,20,105)
// wall13.shapeColor = ("blue")
// wall14 = createSprite(750,52,20,105)
// wall14.shapeColor = ("blue")
// wall15 = createSprite(915,100,350,20)
// wall15.shapeColor = ("blue")

// wall16 = createSprite(683,100,155,20)
// wall16.shapeColor = ("red")

// wall17 = createSprite(1300,100,700,20)
// wall17.shapeColor = ("blue")
// wall18 = createSprite(1640,380,20,400)
// wall18.shapeColor = ("blue")
console.log(character)
}





function draw () {
background("grey")

if (keyDown("up")){
  console.log("hi")
  character.velocityX= 4
character.addImage(personWalk)
}
  drawSprites()
}


