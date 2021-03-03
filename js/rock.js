class Rock{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle*60)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 isTouching(obj){
     let lobj = 0
     let distance = dist(this.body.position.x,this.body.position.y,obj.body.position.x,obj.body.position.y);
    let touch = this.r + obj.r;
     //console.log(obj.body.position)
     if(distance<touch){
        Matter.Body.setStatic(obj.body,false);
     };
 }
}