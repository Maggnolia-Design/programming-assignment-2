var circum

function circle (x,y){
  fill(x,200,x)
  noStroke()
  ellipse(x,y,circum,circum)
}

function setup () {
  createCanvas(600,600);
}

function draw() {
  background(0,0,0)
  circum=600-mouseX
  circle(600-mouseX,300)
  circum =mouseX/2
  circle(mouseX,300)

  fill(0,0,0)
  rect(mouseX-10,343,56, 35)
  fill(255,255,255)
  textSize(18)
  text((mouseX-(600-mouseX)).toString(),mouseX,350,50,20)
}