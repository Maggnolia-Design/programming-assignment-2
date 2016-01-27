function setup() {
  createCanvas(700,700)
}

function draw() {
  background(255)
  for (var x=0; x<width; x+=20){
    for (var y=0; y<height; y+=20){
      new ballStick(x,y,howFar(x,y))
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

function howFar (p1,p2){
  //var result;
  //Math.pow(p1) + Math.pow(p2)
  return dist(p1,p2,mouseX,mouseY)
}

console.log(howFar(20,20))