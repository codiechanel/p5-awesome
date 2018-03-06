var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    console.log("", "setup");
    for (let i = 0; i <= 1; i += 0.1) {
      let x = i * 100;
      let y = Math.pow( i, 4 ) * 100;
      p.stroke(0, 0, 0);
      p.strokeWeight(2);
      p.fill(175, 175, 175);

      p.ellipse(x, y, 5, 5);
      console.log(x, "");
    }
  };
};

var p = new p5(sketch);
