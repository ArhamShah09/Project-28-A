class Paper {
    constructor(x,y,diameter) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density :1.2
        }
        
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter = diameter;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("grey");
        ellipseMode(CENTER); 
        ellipse(pos.x, pos.y, this.diameter);
    }
}