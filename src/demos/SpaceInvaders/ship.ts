// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

import {p} from "./index";

function Ship() {
    this.x = p.width/2;
    this.xdir = 0;

    this.show = function() {
        p.fill(255, 255, 255);
        p.rectMode('center');
        p.rect(this.x, p.height-20, 20, 60);
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir*5;
    }
}

export default Ship