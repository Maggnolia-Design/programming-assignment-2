function setup() {
  createCanvas(700,700)
}

function draw() {
  background(255)
  for (var i=0; i<width; i+=20){
    for (var j=0; j<height; j+=20){
      new ballStick(i,j,10)
    }
  }
}

var ballStick = function(x,y,ellipseSize){
  var colors = color(random(0,255),random(0,255),random(0,255))
  fill(colors)
  stroke(colors)
  strokeWeight(8)
  line(x,y,mouseX,mouseY)
  ellipse(x,y,ellipseSize, ellipseSize)
}