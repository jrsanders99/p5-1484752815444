function setup() {
  createCanvas(480,240);
  fill(255);
  stroke(102);
}
function  draw(){
  background(255,10,0);
  for (var y=20;y <= height-20 ;y=y+10){
    for (var x=20;x<=width-20;x=x+10){
        ellipse(x,y,4,4);
        line(x,y,240,120);
    }
  }
}