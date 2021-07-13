  var snow = [];
  var backgroundImg;

  function preload(){
    backgroundImg = loadImage("snow2.jpg");
  }
 
 function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 
for (let snow = 0; snow < array.length; snow++) {
  const snow = array[snow];
  
}
}
 


function draw() {
  background(backgroundImg);
  textSize(20)

  if (frameCount%30===0) {
    snow.push(random(width/2-10,width/2+10),10,10);
  }

  Engine.update(engine);
  ground.display();

  //display the paricles 
for (var j = 0; j < divisions.length; j++) {
    snow[j].display();
  }

}