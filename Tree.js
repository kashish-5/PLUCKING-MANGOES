class Tree{
    constructor(x,y){

     var options={
         isStatic:true
     }
     this.image=loadImage("PluckingMangoes/tree.png");

     this.x=x;
     this.y=y;
     this.height=600;
     this.width=450;
     this.thickness=10;
     

     this.body=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
     World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
       push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
    
       image(this.image,0,-this.height/2,this.width,this.height);
        pop();
        
        

    }
};