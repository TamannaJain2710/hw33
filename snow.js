class ani{
    constructor(x,y){
        var options = {
            'density':1,
            'friction': 0.5,
            'restitution':1
        }
        
        this.body = Bodies.circle(x,y,5,options)
        this.x = x;
        this.y = y;
        this.radius = 5
        World.add(world, this.body);
        
    }


    
updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(50,700),y:random(0,400)})
    }
}

    display(){
        
        push()
        noStroke();
        fill(rgb(255,255,255));
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        //ellipse(this.body, 0, 0, 20);                
        pop();
       
    }
}