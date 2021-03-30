class Plinko{
    constructor(x, y) {
        var options = {
            'isStatic':true
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    score(body){
        if(this.body.speed === 0){
            body = body + 100;
        }
    }

    display(){
      var pos = this.body.position;  
      ellipseMode(CENTER);
      fill(255);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}