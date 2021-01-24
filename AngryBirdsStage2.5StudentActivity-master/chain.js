class Chain {
    constructor(bodyA, bodyB){
var chai = {
bodyA:bodyA,
bodyB:bodyB,
stiffness: .6,
length: 15
}
this.bodyA = bodyA
this.bodyB = bodyB
this.body = Constraint.create(chai);   
World.add(world,this.body);
    }
  
  
  display() {
line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
  }
  }