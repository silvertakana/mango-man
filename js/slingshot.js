class Joint {
    constructor(a,b,long,stiff){
        var option = {
            'bodyA': a,
            'pointB': b,
            'stiffness':stiff,
            'length':long
        }
        this.pointB = b;
        this.joint  = Constraint.create(option);
        World.add(world,this.joint)
    }
    display() {
        if(this.joint.bodyA){
        
        var posA = this.joint.bodyA.position;
        //var posB = this.joint.bodyB.position;
        line(posA.x,posA.y,this.pointB.x,this.pointB.y);  
        }  
    }
    break(){
        this.joint.bodyA = null;
        //this.joint.bodyB = null;
    }
    join(a){
        this.joint.bodyA = a;
    }
}