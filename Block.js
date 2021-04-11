class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png")
      this.width = width;
      this.height = height;
      this.visiblity=255
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed>3){
        World.remove(world,this.body)
        push()
        this.visiblity=this.visiblity-5
        tint(255,this.visiblity)
        pop()
      }
      else{
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
    }
}