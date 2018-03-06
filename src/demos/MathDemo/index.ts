import "../../index.css";
var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    var widthParent =
      document.getElementById("sketch-holder").offsetWidth * 0.9;
    var heightParent =
      document.getElementById("sketch-holder").offsetHeight * 0.9;

    var cnv = p.createCanvas(widthParent, heightParent);
    p.background(220);

    // var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch-holder");
    // for (let i = 0; i <= 1; i += 0.1) {
    //   let x = i * 100;
    //   let y = Math.pow(i, 4) * 100;
    //   p.stroke(0, 0, 0);
    //   p.strokeWeight(2);
    //   p.fill(175, 175, 175);
    //
    //   p.ellipse(x + 50, y + 50, 5, 5);
    //   console.log(x, "");
    // }

    let plots = 10;
    let increase = Math.PI * 2 / plots,
      angle = 0,
      x = 0,
      y = 0;

    // for (let i = 0; i < plots; i++) {
    //   // var p = new Plot( stage );
    //   // p.setBackground( 'green' );
    //   // p.setDimensions( 40, 40 );
    //   x = 100 * Math.cos(angle) + 200;
    //   y = 100 * Math.sin(angle) + 200;
    //   // p.position( x, y );
    //   let box = p.createVector(x, y);
    //   angle += increase;
    //   p.rect(x, y - 70, 40, 40);
    // }

      for( let i = 0; i < plots; i++ ) {
          // var p = new Plot( stage );
          // p.setBackground( 'green' );
          // p.setDimensions( 40, 40 );
          x = 100 * Math.cos( angle ) + 200;
          y = 100 * Math.sin( angle ) + 200;
          // x = 100 * Math.cos( angle ) ;
          // y = 100 * Math.sin( angle ) ;

          // p.rotate( Math.atan2( y - 200, x - 200 ) + 'rad' );
          // p.position( x, y );
          // p5.prototype.rotate()
          let box = p.rect(x, y - 70, 40, 40);
          // let box = p.text('cool', x, y - 70, 40, 40);

          // box.rotate( p.radians(Math.atan2( y - 200, x - 200 ) ),)
          // box.rotate( p.radians(p.atan2( y - 200, x - 200 ) ))
          // p.rotate()


          angle += increase;
          // var a = p.atan2( y - 200, x - 200 )
          // var a = p.atan2( y - 200, x - 200 )
          // box.rotate(p.radians(a)
          // box.atan2( y , x )
          //
          // box.rotate(box.radians(box.atan2( y , x )))
      }
  };

  p.draw = () => {};

  p.windowResized = () => {
    // p.resizeCanvas(window.innerWidth, window.innerHeight);
    // p.resizeCanvas(p.windowWidth, p.windowHeight);
    var widthParent =
      document.getElementById("sketch-holder").offsetWidth * 0.9;
    var heightParent =
      document.getElementById("sketch-holder").offsetHeight * 0.9;
    p.resizeCanvas(widthParent, heightParent);
  };
};

var p = new p5(sketch);
