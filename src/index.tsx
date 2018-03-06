import Spring from "./Spring";
import Bob from "./Bob";

console.clear();
let bob;
let spring;
let gravity;
let mouseYes = false;
// let width = 640

var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(640, 360);
    // works if length is twice rest length
    spring = new Spring(p.width / 2, 10, 150);
    // spring = new Spring(width/2,10,75);
    // spring = new Spring(width/2,0,100);
    bob = new Bob(p.width / 2, 300);
    // bob = new Bob(width/2,240);
    // var position = createVector(40, 50);

    // console.log('sss',position.x, width )
  };

  p.windowResized = () => {
    // p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(220);
    gravity = p.createVector(0, 2);
    bob.applyForce(gravity);
    // let wind = createVector(0.1,0);
    let wind = p.createVector(0.7, 0);
    if (mouseYes) {
      console.log("apply wind");
      bob.applyForce(wind);
    }
    spring.connect(bob);

    bob.update();

    spring.displayLine(bob); // Draw a line between spring and bob
    bob.display();
    spring.display();

    p.fill(0, 0, 0);
  };

  p.mousePressed = () => {
    mouseYes = true;
  };

  p.mouseReleased = () => {
    mouseYes = false;
  };
};

var p = new p5(sketch);
export { p };
