// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

import {p} from "./index";

function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    p.noStroke();
    p.fill(150, 0, 255);
    p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function() {
    this.toDelete = true;
  };

  this.hits = function(flower) {

    var d = p.dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function() {
    this.y = this.y - 5;
  };
}

export default Drop;
