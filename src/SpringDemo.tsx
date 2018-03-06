// declare var p5: any;
import Spring from "./Spring";
import Bob from "./Bob";
// import * as p5 from 'p5'
// import * from 'p5/lib/addons/p5.dom';
import "./index.css";

console.clear();
let bob;
let spring;
let gravity;
let mouseYes = false;
// let width = 640

var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
      var widthParent = document.getElementById('sketch-holder').offsetWidth*.9;
      var heightParent = document.getElementById('sketch-holder').offsetHeight*.9;

      console.log(widthParent, "setup", )
    var cnv = p.createCanvas(widthParent , heightParent);

    // var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch-holder");
    // cnv.style
    // cnv.style('display', 'block');
    // p.createCanvas(window.innerWidth, window.innerHeight);

    // works if length is twice rest length
    spring = new Spring(widthParent/2, 10, 150);
    // spring = new Spring(width/2,10,75);
    // spring = new Spring(width/2,0,100);
    bob = new Bob(widthParent/2, 300);
    // bob = new Bob(width/2,240);
    // var position = createVector(40, 50);

    // console.log('sss',position.x, width )
  };

  p.windowResized = () => {
    // p.resizeCanvas(window.innerWidth, window.innerHeight);
    // p.resizeCanvas(p.windowWidth, p.windowHeight);
      var widthParent = document.getElementById('sketch-holder').offsetWidth*.9;
      var heightParent = document.getElementById('sketch-holder').offsetHeight*.9;
      p.resizeCanvas(widthParent, heightParent);
      /**
       * reinitialize
       * @type {Spring}
       */
      spring = new Spring(widthParent/2, 10, 150);
      bob = new Bob(widthParent/2, 300);
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
