function tri (w,h){
  var x=10
  var y=10
  
  for(var i=0; i<w; i=i+6){
    for(var j=0;j<h;j=j+6){
      strokeWeight(6)
      var colors = color(random(0,255),random(0,55),random(0,255))
      fill(colors)
      stroke(colors)
      line(x, y,mouseX, mouseY);
      x=x+45
    }
    y=y+45
    x=10
  }
}

function setup () {
  createCanvas(700,700);
}

function draw() {
  tri (100,100)
}

function mousePressed() {
  background(200,200,255,40)
  
}
