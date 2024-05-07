var bkg = new color(20, 20, 100);


//I just realised how much like c this looks
function main() {
	//rectangles
	
	ctx.fillStyle = "red";
	//Making rect in function
	rct(30, 30, 30, 30);
	
	
	//sprites
	
	//sprite with img height and width of source img
	var s = new sprite('dirt.jpeg', 300, 168);
	//edit proportions and draw
	s.draw(40, 40, 100, 50, 0, 0, 200, 100);
}

var run = true;
update(run, main, bkg);
