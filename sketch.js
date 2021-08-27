var starImg,bgImg;
var star, starBody;
var fada,imgFada,Sound

//Andrea,como não estava conseguindo usar o codigo sugerido,para parar a estrela,decidi usar um chao invisivel para para-la.
//O codigo do som tambem não está funcionado, quando tento usar o jogo fica na tela de loading . Escrevi o codigo mas comentei ele.

var chao;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
 
    imgFada = loadImage("images/fairyImage1.png");
    //Sound = loadSound("soung/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //Sound.play();
    
    fada = createSprite(400,620,100,100);
    fada.addImage(imgFada);
    fada.scale = 0.2

    chao = createSprite(650,610,50,10);
    chao.visible = false;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY = 6;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg)
    if(keyCode === LEFT_ARROW){
        fada.x -= 10;
    }
    if(keyCode === RIGHT_ARROW){
        fada.x += 10;
    }
    if(fada.x > 500 && fada.x < 700){
        star.collide(chao);
    }
    if(star.y > 820){
        star.y = 30
    }
    drawSprites();
}
