class Ground{
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    const pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
  }
}