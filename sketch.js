const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var jogbase;
var jog;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  jogbase = Bodies.rectangle (200, 350, 180, 150, options);
  jog = Bodies.rectangle (250, jogbase.position.y - 160, 50, 180, options);

  World.add (world, jog)
  World.add (world, jogbase)


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  image (baseimage, jogbase.position.x, jogbase.position.y, 180, 150 );
  image (playerimage, jog.position.x, jog.position.y, 80, 180);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
