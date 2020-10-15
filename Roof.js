class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     this.x=x;
     this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(1000,550,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      push ()
      translate(pos.x, pos.y);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }; 
