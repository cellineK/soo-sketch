//Happiness

'use strict';

var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield = [];

function setup() {
  createCanvas(500,500);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  for(var i = 0 ; i < 300; i++){
    particles[i]= new Particle();
  }
}

function draw() {
  background(255);
  randomSeed(10);
  var yoff = 0;
  for(var y = 0; y<rows; y++){
    var xoff = 0;
    for(var x = 0; x<cols; x++){
      var index = x + y * cols;
      var r = noise(xoff,yoff)*255;
      var angle = noise(xoff,yoff,zoff) * TWO_PI*4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(2);
      flowfield[index] = v;
      xoff += inc;
      stroke(0);
      
    }
    yoff += inc;
    zoff += 0.0001;
  }
  for(var i = 0; i < particles.length; i++){
  particles[i].follow(flowfield);    
  particles[i].update();
  particles[i].show();
  particles[i].edges();

  }
}