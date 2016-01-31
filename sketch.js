function tri (w,h){
  var x=30
  var y=30
  
  for(var i=0; i<w; i=i+6){
    for(var j=0;j<h;j=j+6){
      var colors = color(random(55,255),random(0,100),random(55,255))
      fill(colors)
      stroke(colors)
      strokeWeight(2)
      line(x, y,mouseX, mouseY);
      x=x+60
    }
    y=y+60
    x=30
  }
}

function setup () {
  createCanvas(600,600);
}

var t=0

function draw() {
  background(255,255,255,10)
  tri (50,50)
  t=t+.3
  if (t>1){
    t=0
  }
}