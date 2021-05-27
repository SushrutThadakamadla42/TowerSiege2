class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.02,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.blocks = loadImage("block.png");
      this.visibility = 255;
    }
    
    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
        
        push()
        imageMode(CENTER);
        image(this.blocks,pos.x,pos.y,30,40);
        pop()
      } else {
        
          World.remove(world,this.body);
          push()
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.blocks,pos.x,pos.y,30,40);
        pop()
      }
      
      
                                                                                   
    }
}