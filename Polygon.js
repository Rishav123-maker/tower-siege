class Polygon{
    constructor(x,y){
        var options = {

        }
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;


        imageMode(CENTER);
        image("polygon.png",polygon.position.x,polygon.position.y,40,40)
    }
}