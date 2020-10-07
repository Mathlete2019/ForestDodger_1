class Monkey{
    constructor(x,y,width,height){
            
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        
        this.animation=loadAnimation("images/Monkey1.png","images/Monkey2.png","images/Monkey3.png");
       // this.animation.scale(0.5);
        World.add(world, this.body);
        
    }
    display(){
        Engine.update(engine);
        var pos = this.body.position;
        rectMode(CENTER);
        //animation.resize(50,50);
        animation(this.animation,pos.x,pos.y,this.width,this.height);
    }
}