class Fire {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        Engine.update(engine);
    }
    display(){
        
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}