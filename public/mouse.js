/*globals createCanvas fill noStroke ellipse mouseY background strokeWeight stroke line pmouseX pmouseY dist width height mouseX*/
var x=0;
var offset =10;

function setup() {
	createCanvas (480,480);
	x=width/2;
}
function draw(){
	background(204);
	if (mouseX>x){
		x=x+0.5;
		offset = -10;
	}
	if (mouseX<x){
		x= x-0.5;
		offset = 10;
	}
	line(x,0,x,height);
	line(mouseX,mouseY,mouseX+offset,mouseY-10);
	line(mouseX,mouseY,mouseX+offset,mouseY+10);
	line(mouseX,mouseY,mouseX+offset*3,mouseY);
	
}