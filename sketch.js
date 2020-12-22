//declaring variables
var wall;
var car1, car2, car3;

var speed1, speed2, speed3;
var weight1, weight2, weight3;

var rate1, rate2, rate3;

var b1, b2, b3, b3, b4, b5, b6, b7, b8;

function setup() {
  //creating canvas
  createCanvas(1600,1600);

  //giving random numbers for speed and weight
  speed1 = random(55,90);
  weight1 = random(500,1500);

  speed2 = random(55,90);
  weight2 = random(500,1500);

  speed3 = random(55,90);
  weight3 = random(500,1500);

  //creating sprites of car and giving velocity
  car1 = createSprite(50, 150, 50, 50);
  car1.velocityX = speed1;

  car2 = createSprite(50, 300, 50, 50);
  car2.velocityX = speed2;

  car3 = createSprite(50, 450, 50, 50);
  car3.velocityX = speed3;
  
  //creating wall sprite and giving color
  wall = createSprite(1500, 350, 100, 600);
  wall.shapeColor = color(80,80,80);

  //creating table
  b1 = createSprite(800,700,1000,10)
  b1.shapeColor = "white";
  b2 = createSprite(800,850,1000,10)
  b2.shapeColor = "white";
  b3 = createSprite(800,1000,1000,10)
  b3.shapeColor = "white";
  b4 = createSprite(800,1150,1000,10)
  b4.shapeColor = "white";
  b5 = createSprite(800,1300,1000,10)
  b5.shapeColor = "white";
  b6 = createSprite(300,1000,10,610)
  b6.shapeColor = "white";
  b7 = createSprite(800,1000,10,610)
  b7.shapeColor = "white";
  b8 = createSprite(1300,1000,10,610)
  b8.shapeColor = "white";

  //creating sprites of rate to show rating in table
  rate1 = createSprite(1050,925,490,140);
  rate1.shapeColor = "black";
  rate2 = createSprite(1050,1075,490,140);
  rate2.shapeColor = "black";
  rate3 = createSprite(1050,1225,490,140);
  rate3.shapeColor = "black";
}

function draw() {
  //setting background color
  background(0);
  
  /*textSize(50);
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);*/

  //calculating deformation of car 1
  if(wall.x - car1.x < (car1.width + wall.width)/2){
    car1.collide(wall);
    var car1deformation = 0.5 * weight1 * speed1 * speed1 / 22500;
    if(car1deformation > 180){
      car1.shapeColor = color(255,0,0);
      rate1.shapeColor = color(255,0,0);
    }
    if(car1deformation < 180 && car1deformation > 100){
      car1.shapeColor = color(230,230,0);
      rate1.shapeColor = color(230,230,0);
    }
    if(car1deformation < 100){
      car1.shapeColor = color(0,225,0);
      rate1.shapeColor = color(0,225,0);
    }
  }

  //calculating deformation of car 2
  if(wall.x - car2.x < (car2.width + wall.width)/2){
    car2.collide(wall);
    var car2deformation = 0.5 * weight2 * speed2 * speed2 / 22500;
    if(car2deformation > 180){
      car2.shapeColor = color(255,0,0);
      rate2.shapeColor = color(255,0,0);
    }
    if(car2deformation < 180 && car2deformation > 100){
      car2.shapeColor = color(230,230,0);
      rate2.shapeColor = color(230,230,0);
    }
    if(car2deformation < 100){
      car2.shapeColor = color(0,225,0);
      rate2.shapeColor = color(0,255,0);
    }
  }

  //calculating deformation of car 3
  if(wall.x - car3.x < (car3.width + wall.width)/2){
    car3.collide(wall);
    var car3deformation = 0.5 * weight3 * speed3 * speed3 / 22500;
    if(car3deformation > 180){
      car3.shapeColor = color(255,0,0);
      rate3.shapeColor = color(255,0,0);
    }
    if(car3deformation < 180 && car3deformation > 100){
      car3.shapeColor = color(230,230,0);
      rate3.shapeColor = color(230,230,0);
    }
    if(car3deformation < 100){
      car3.shapeColor = color(0,225,0);
      rate3.shapeColor = color(0,225,0);
    }
  }

  //labelling the table
  textSize(65);
  fill("white");
  stroke("white");
  text("NAME", 455,800);
  text("RATING", 930,800);
  text("CAR 1", 460, 950);
  text("CAR 2", 460, 1100);
  text("CAR 3", 460, 1250);

  //displaying all sprites
  drawSprites();
}