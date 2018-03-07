import Ship from "./ship";
import Flower from "./flower";
import Drop from "./drop";
import Spring from "../../Spring";
import Bob from "../../Bob";

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

var ship;
var flowers = [];
var drops = [];
var sketch = (p: p5) => {
    p.preload = () => {
        console.log("", "preload",)
    };
    
    p.setup = () => {
        // createCanvas(600, 400);
        var widthParent = document.getElementById("sketch-holder").offsetWidth * 0.9;
        var heightParent =
            document.getElementById("sketch-holder").offsetHeight * 0.9;

        console.log(widthParent, "setup");
        var cnv = p.createCanvas(widthParent, heightParent);

        // var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.parent("sketch-holder");
        ship = new Ship();
        // drop = new Drop(width/2, height/2);
        for (var i = 0; i < 6; i++) {
            flowers[i] = new Flower(i * 80 + 80, 60);
        }
    }

    p.windowResized = () => {
        var widthParent = document.getElementById('sketch-holder').offsetWidth*.9;
        var heightParent = document.getElementById('sketch-holder').offsetHeight*.9;
        p.resizeCanvas(widthParent, heightParent);

    };

    p.draw = () => {
        p.background(51);
        ship.show();
        ship.move();

        for (var i = 0; i < drops.length; i++) {
            drops[i].show();
            drops[i].move();
            for (var j = 0; j < flowers.length; j++) {
                if (drops[i].hits(flowers[j])) {
                    flowers[j].grow();
                    drops[i].evaporate();
                }
            }
        }

        var edge = false;

        for (var i = 0; i < flowers.length; i++) {
            flowers[i].show();
            flowers[i].move();
            if (flowers[i].x > p.width || flowers[i].x < 0) {
                edge = true;
            }
        }

        if (edge) {
            for (var i = 0; i < flowers.length; i++) {
                flowers[i].shiftDown();
            }
        }

        for (var i = drops.length - 1; i >= 0; i--) {
            if (drops[i].toDelete) {
                drops.splice(i, 1);
            }
        }
    }

    p.keyReleased = () => {
        if (p.key != " ") {
            ship.setDir(0);
        }
    }

    const RIGHT_ARROW = 39;
    const LEFT_ARROW = 37;
    const SPACE_BAR = 32

    p.keyPressed = () => {
        console.log("", "keyPressed",p.keyCode )
        // if (p.key === " ") {
        if (p.keyCode  === SPACE_BAR) {
            var drop = new Drop(ship.x, p.height);
            drops.push(drop);
        }

        if (p.keyCode === RIGHT_ARROW) {
            ship.setDir(1);
        } else if (p.keyCode === LEFT_ARROW) {
            ship.setDir(-1);
        }
    }
}

var p = new p5(sketch);
export { p };

