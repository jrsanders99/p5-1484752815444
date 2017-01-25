var y = 60;
var d=80;
function setup() {
  createCanvas(480,120);
}
function draw() {
background(0,0,255);
// fill(255); // WHITE
fill(255,0,0); // RED
ellipse(75,y,d,d);
fill(255,255,0); //YELLOW
// fill(0); // BLACK
ellipse(175,y,d,d);
fill(0,255,0) //GREEN
ellipse(275,y,d,d);
}
