import {p} from "./SpringDemo";


class Bob {
    private _position;
    private velocity;
    private acceleration;
    private mass = 24;
    private bob

    // Arbitrary damping to simulate friction / drag
    private damping = 0.98;
    // private damping = 0.5;

    // For mouse interaction
    private dragOffset;
    private dragging = false;

    // Constructor
    constructor(x, y) {

        this._position = p.createVector(x,y);
        // console.log('cons pos', _position)

        this.velocity = p.createVector(0,0)
        this.acceleration = p.createVector(0,0)
        this.dragOffset = p.createVector(0,0)
    }

    // Draw the bob
    public display() {
        p.stroke(0,0, 0)
        p.strokeWeight(2);
        p.fill(175, 175, 175);

        p.ellipse(this._position.x,this._position.y,this.mass*2,this.mass*2);
    }

    get position() {
        // console.log('get called',_position,  this._position)
        return this._position
    }

    public update() {
        this.velocity.add(this.acceleration);
        this.velocity.mult(this.damping);
        this._position.add(this.velocity);
        this.acceleration.mult(0);
    }


    public applyForce(force) {
        let  f = force;
        // console.log('force1',  f)
        f.div(this.mass);

        this.acceleration.add(f);
        // console.log('force', f, acceleration)
    }
}

export default Bob