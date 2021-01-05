class Mango
{
   constructor(x, y, w, h)
   {
      var options = 
      {
         isStatic : true,
         restitution : 0,
         friction : 1,
         density : 1.2   
      }
      this.body = Bodies.rectangle(x, y, w, h, options)
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
   }

   display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
