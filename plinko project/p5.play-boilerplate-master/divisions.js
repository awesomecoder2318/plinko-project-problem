class Divisions{
  constructor(x,y,w,h){
  var options ={
      isStatic: true
  }
  this.body = Bodies.rectangle(x,y,w,h,options);
  this.w = w;
  this.h = h;
  World.add(world,this.body)
  }
  display(){
  var pos = this.body.position;
  
  rectMode(CENTER);
  fill("red");
  rect(pos.x,pos.y,10,300,200,800);
  
  }
  
  }