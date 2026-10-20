"use strict";
// JavaScript statements
// =====================================================================================
let color = {
	white: "#ffffff",
	black: "#000000",
	red: "#ff0000",
	green: "#00ff00",
	blue: "#0000ff",
	yellow: "#ffff00",
	fuchsia: "#ff00ff",
	aqua: "#00ffff"
};

let turtle = {
	x: 0,
	y: 0,
	angleInRadians: 0,
	penDown: true,
	penColor: "#000000",
	lineWidth: 2,
	col:0,
    width: 600,
    height: 600
};


let canvas = document.getElementById('myDrawing');
let cursorCanvas = document.getElementById('turtleCanvas');

function saveDrawing(name) {
    let a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    name = name ? name : prompt("File name to download?");
    if(name !== null) {
        a.download = name;
        a.click();
    }
}
canvas.addEventListener("click", function(e) {saveDrawing();});

if (canvas && canvas.getContext) { // does the browser support 'canvas'?
	turtle.ct = canvas.getContext("2d"); // get drawing context
	turtle.ct.fillStyle = "#888888";
    turtle.ct.fillRect(0,0,turtle.width, turtle.height);
    turtle.ct.lineCap = "round";
    turtle.cursorCt = cursorCanvas.getContext("2d");
    turtle.cursorCt.fillStyle = "#FF00FF";
} else {
	alert('You need a browser which supports the HTML5 canvas!');
}

// =====================================================================================
turtle.drawGrid = function() {
    turtle.ct.save();
    turtle.ct.strokeStyle = 'rgb(0, 0, 0, 0.1)';
    for(let y = 0 ; y <= turtle.height ; y += 50) {
        turtle.ct.beginPath();
        turtle.ct.moveTo(0, y);
        turtle.ct.lineTo(turtle.width, y);
        turtle.ct.lineWidth = y%100 == 0 ? 3 : 1;
        turtle.ct.stroke();
    }
    for(let x = 0 ; x <= turtle.height ; x += 50) {
        turtle.ct.beginPath();
        turtle.ct.moveTo(x, 0);
        turtle.ct.lineTo(x, turtle.height);
        turtle.ct.lineWidth = x%100 == 0 ? 3 : 1;
        turtle.ct.stroke();
    }
    turtle.ct.restore();
}
turtle.drawGrid();

turtle.updateTurtlePoints = function() {
    turtle.cursorPoints = [];
    let a = -turtle.angleInRadians;
    for(let [x,y] of [[-15,-10], [-2,0], [-5, -30], [5, -30], [2,0], [15,-10], [0,20]]) {
        [x,y] = [Math.cos(a)*x - Math.sin(a)*y, Math.sin(a)*x + Math.cos(a)*y];
        turtle.cursorPoints.push([x,y]);
    }
};
turtle.updateTurtlePoints();

turtle.drawTurtle = function() {
    this.cursorCt.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
    this.cursorCt.beginPath();
    this.cursorCt.moveTo(this.x+this.cursorPoints[this.cursorPoints.length-1][0], this.y+this.cursorPoints[this.cursorPoints.length-1][1]);
    for(let [x,y] of this.cursorPoints) {
        this.cursorCt.lineTo(this.x + x, this.y + y);
    }
    this.cursorCt.lineWidth = 3;
    this.cursorCt.strokeStyle = "black";//this.penColor;
    this.cursorCt.stroke();
};

turtle.forward = function (length) {
	let x0 = this.x,
		y0 = this.y;
	this.x += length * Math.sin(this.angleInRadians);
	this.y += length * Math.cos(this.angleInRadians);
	if (this.ct) {
		if (this.penDown) {
			this.ct.beginPath();
			this.ct.lineWidth = this.lineWidth;
			this.ct.strokeStyle = this.penColor;
			this.ct.moveTo(x0, y0);
			this.ct.lineTo(this.x, this.y);
			this.ct.stroke();
		}
	} else {
		this.ct.moveTo(this.x, this.y);
	}

    turtle.drawTurtle();

	return this;
};

turtle.arcLeft = function(radius, arc) {
	let x0 = this.x,
		y0 = this.y;
	let theta0 = this.angleInRadians;
	let xc = x0 + radius*Math.cos(theta0);
	let yc = y0 - radius*Math.sin(theta0);
	let startAngle = Math.PI-theta0;
	arc = arc * Math.PI / 180;
	let endAngle = startAngle - arc;
	
	if(this.penDown) {
		this.ct.beginPath();
		this.ct.lineWidth = this.lineWidth;
		this.ct.strokeStyle = this.penColor;
        this.ct.arc(xc, yc, radius, startAngle, endAngle, true);
		this.ct.stroke();
	}
	
	this.x = xc + radius*Math.cos(endAngle);
	this.y = yc + radius*Math.sin(endAngle);
	this.angleInRadians += arc;
    this.updateTurtlePoints();
    this.drawTurtle();
	
	return this;
}

turtle.arcRight = function(radius, arc) {
	let x0 = this.x,
		y0 = this.y;
	let theta0 = this.angleInRadians;
	let xc = x0 - radius*Math.cos(theta0);
	let yc = y0 + radius*Math.sin(theta0);
	let startAngle = -theta0;
	arc = arc * Math.PI / 180;
	let endAngle = startAngle + arc;
	
	if(this.penDown) {
		this.ct.beginPath();
		this.ct.lineWidth = this.lineWidth;
		this.ct.strokeStyle = this.penColor
        this.ct.arc(xc, yc, radius, startAngle, endAngle);
		this.ct.stroke();
	}
	
	let angle = endAngle;
	if(arc < 0) {
		angle = startAngle;
	}
	this.x = xc + radius*Math.cos(angle);
	this.y = yc + radius*Math.sin(angle);
	this.angleInRadians -= arc;
	
    this.updateTurtlePoints();
    this.drawTurtle();

	return this;
}

turtle.backward = function (length) {
	this.forward(-length);
    turtle.drawTurtle();
	return this;
};

turtle.left = function (angleInDegrees) {
	this.angleInRadians += angleInDegrees * Math.PI / 180.0;
    turtle.updateTurtlePoints();
    turtle.drawTurtle();
	return this;
};

turtle.right = function (angleInDegrees) {
	this.left(-angleInDegrees);
    turtle.updateTurtlePoints();
    turtle.drawTurtle();
	return this;
};


turtle.angle = function () {
	return this.angleInRadians * 180.0 / Math.PI;
};

turtle.setAngle = function (angle) {
    this.angleInRadians = angle;
    turtle.updateTurtlePoints();
    turtle.drawTurtle();
}

turtle.changeColor = function (col) {
	turtle.penColor = col;
}

turtle.down = function () {
	turtle.penDown = true;
}

turtle.up = function () {
	turtle.penDown = false;
}

turtle.setPos = function (x,y) {
	turtle.x = x;
	turtle.y = y;
    //turtle.ct.fillStyle = gradient;
    turtle.ct.fillRect(0, 0, turtle.width, turtle.height);
    turtle.drawGrid();
    turtle.ct.save();
    turtle.ct.beginPath();
    turtle.ct.moveTo(x, 0);
    turtle.ct.lineTo(x, turtle.height+1);
    turtle.ct.moveTo(0, y);
    turtle.ct.lineTo(turtle.width+1, y);
    turtle.ct.strokeStyle = "rgb(70, 70, 70)";
    turtle.ct.lineWidth = 5;
    turtle.ct.setLineDash([25, 50, 25, 0]);
    turtle.ct.setLineDash([0, 12.5, 25, 12.5]);
    turtle.ct.stroke();
    turtle.ct.restore();
    turtle.drawTurtle();
}

turtle.setLineWidth = function(n) {
	turtle.lineWidth = n;
}


function colorScale(n) {
    let k = Math.floor((n%(6*255))/255);
    let r = 0, g = 0, b = 0;
    if(k == 0) {
        r = 255;
        g = n%255;
    } else if(k == 1) {
        r = 255-n%255;
        g=255;
    } else if(k == 2) {
        g = 255;
        b = n%255;
    } else if(k == 3) {
        g = 255-n%255;
        b = 255;
    } else if(k == 4) {
        r = n%255;
        b = 255;
    } else {
        r = 255;
        b = 255-n%255;
    }
    let c= r*256*256+g*256+b;
    let col = "#" + c.toString(16).padStart(6,'0');
    return col;
}

turtle.shiftColor = function(x) {
    let n = x*255*6;
    turtle.col = (turtle.col+n)%(255*6);
    turtle.changeColor(colorScale(Math.round(turtle.col)));
}

turtle.hideTurtle = function() {
    this.cursorCt.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
} 
