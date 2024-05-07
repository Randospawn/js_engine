const gWin = document.querySelector(".gWin");
const w = window.innerHeight;
const h = window.innerheight;
var ctx;


try {
	ctx = gWin.getContext("2d");
} catch(err) {
	console.log("[Error 01]: could not create a frame context!\n");
	var c = document.createElement('p');
	document.body.appendChild(c);
	c.innerHTML = "[GAME ERROR 01]: see terminal;";
	c.style.color = "red";
}

//This hopefully won't be annoying later
class color {
	constructor(red, green, blue) {
		this.r = red || 0;
		this.g = green || 0;
		this.b = blue || 0;
		return {r: this.r, g: this.g, b: this.b};
	}
}



function clear(color) {
	color = color || null;
	
	if (!color) {
		//console.log('cleared with color rgb(0, 0, 0, 0)');
		ctx.clearRect(0, 0, w, h);
	} else {
		gWin.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
		ctx.clearRect(0, 0, w, h);
	}
}

/*
clear test

var bkg = new color(20, 20, 100);
clear(bkg);
*/

function ln(x, y, x2, y2) {
	ctx.moveTo(x, y);
	ctx.lineTo(x2, y2);
	return {x: x, y: y, x1: x2, y1: y2};
}

function rct(x, y, width, height) {
	ctx.fillRect(x, y, width, height);
}

class sprite {
	constructor(img, width, height) {
		this.img = document.createElement('img');
		this.src = img;
		this.width = width;
		this.height = height;
		
		this.img.setAttribute('src', this.src);
		document.body.appendChild(this.img);
		this.img.style.width = this.width;
		this.img.style.height = this.height;
	}
	
	draw(x, y, width, height, sx, sy, swidth, sheight) {
		/*
		where on the image, how much of it, where on canvas, how large
		*/
		ctx.drawImage(this.img, sx, sy, swidth, sheight, x, y, width, height)
	}
}


// first time around
var fta = true;

function update(running, main, color) {
	
	if (fta) {
		color = color || null;
		main = main || null;
		fta = false;
		clear(color);
	}
	clear();
	
	if (main != null) {
		//main.init();
		main();
	} else {
		running = false;
	}
	
	//sleep(60/1000);
	
	if (running) {
		requestAnimationFrame(update);
	}
}

/*
update test

function l() {
	ctx.beginPath();
	ctx.imageSmoothingEnabled = true;
	ctx.fillStyle = "red";
	rct(30, 30, 30, 30);
	//ctx.translate(0.5, 0.5);
	//ctx.translate(-0.5, -0.5);
	ctx.closePath();
}


var run = true;
update(run, l, bkg);
*/
