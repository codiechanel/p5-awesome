import { p } from "./SpringDemo";
class Spring {
  // position
  private anchor;

  // Rest length and spring constant
  private len;
  // private k = 0.2;
  private k = 0.9;

  // Constructor
  constructor(x, y, l) {
    this.anchor = p.createVector(x, y);
    this.len = l;
  }

  public display() {
    p.stroke(0, 0, 0);
    //-todo: fill?
    p.fill(175, 175, 175);
    // p.fill(175);
    p.strokeWeight(2);
    /**
     * - todo: why
     */
    // p.rectMode(p.CENTER);
    p.rect(this.anchor.x, this.anchor.y, 10, 10);
  }

  public displayLine(b) {
    p.strokeWeight(2);
    p.stroke(0, 0, 0);
    p.line(b.position.x, b.position.y, this.anchor.x, this.anchor.y);
  }

  public connect(b) {
    // Vector pointing from anchor to bob position
    // let force = p5.Vector.sub(b.position, this.anchor)

    let force = p5.Vector.sub(b.position, this.anchor);
    // let force = p5.Vector.sub(b.position, anchor)
    // What is distance
    let d = force.mag();

    // // Stretch is difference between current distance and rest length
    let stretch = d - this.len;

    force.normalize();
    force.mult(-1 * this.k * stretch);
    b.applyForce(force);
    // console.log('force', force)
  }
}

export default Spring;
