const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkos =[]
var particles =[]
var divisions =[]
var divisionHeight =300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


ground = new Ground(240,795,500,15)


  for(var k = 0; k<=width; k = k + 80){
divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }

for(var l = 40; l<=width; l=l+50){
plinkos.push(new Plinko(l,75))
}
for(var l = 40; l<=width; l=l+50){
  plinkos.push(new Plinko(l,175))
  }
for(var l = 40; l<=width; l=l+50){
  plinkos.push(new Plinko(l,175))
  }
  for(var l = 40; l<=width; l=l+50){
    plinkos.push(new Plinko(l,275))
    }
   for(var l = 40; l<=width; l=l+50){
      plinkos.push(new Plinko(l,375))
      }


if(frameCount%30===0){
  particles.push(new Particle(random(width/2-10,width/2-10), 10,10))
}


}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  for(var j = 0; j < particles.length;j++){
    particles[j].display();
  }
for(var k = 0; k < divisions.length;k++){
divisions[k].display()
}
for(var l = 0; l < plinkos.length;l++){
  plinkos[l].display()
  }
  drawSprites();
}