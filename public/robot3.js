/*globals createCanvas strokeWeight ellipseMode background RADIUS stroke line noStroke fill ellipse rect*/
var x=60 ;//x coordinate
var y = 440; // y coordinate
var bodyHeight =160; // Body Height
var neckHeight =70; // Neck Height
var radius = 45;
var easing = 0.04;

function setup(){
  createCanvas (360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw(){
  var targetX=mouseX;
  x+= (targetX -x)* easing;
  if (mouseIsPressed) {
  	neckHeight=16;
  	bodyHeight=90;
    }
  else{
  	neckHeight=70;
  	bodyHeight=160;
  }
  var neckY = y-bodyHeight - neckHeight - radius; // Neck Y
  
  background(204);
  //Neck
  stroke(102);
  line (x+2,y-bodyHeight,x+12,neckY);
  
  //Antennae
  stroke(102);
  line (x+12,neckY,x-18,ny-43);
  line (x+12,neckY,x+42,ny-99);
  line (x+12,neckY,x+78,ny+15);

  //Body
  noStroke();
  fill(102);
  ellipse(x,y-33,33,33);
  fill(0);
  rect (x-45,y-bodyHeight,90,bodyHeight-33);
  

  //Head
  fill(0);
  ellipse(x+12,neckY,radius,radius);
  fill(255);
  ellipse(x+24,neckY-6,14,14);
  fill(0);
  ellipse(x+24,neckY-6,3,3);
}
