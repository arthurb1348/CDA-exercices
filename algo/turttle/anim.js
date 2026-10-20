"use strict";


// JavaScript statements
// =====================================================================================
let waitTime = 30;
let totalTime = 0;
// =====================================================================================

let waiting = 0;

function forward(length) {
    waiting++;
	setTimeout(function() {waiting--;turtle.forward(length);}, totalTime);
	totalTime += waitTime;
}

function left(angle) {
    waiting++;
	setTimeout(function() {waiting--;turtle.left(angle);}, totalTime);
	totalTime += waitTime;
}

function right(angle) {
    waiting++;
	setTimeout(function() {waiting--;turtle.right(angle);}, totalTime);
	totalTime += waitTime;
}

function backward(angle) {
    waiting++;
	setTimeout(function() {waiting--;turtle.backward(angle);}, totalTime);
	totalTime += waitTime;
}

function changeColor(col) {
    waiting++;
	setTimeout(function() {waiting--;turtle.changeColor(col);}, totalTime);
	totalTime += waitTime;
}

function down() {
    waiting++;
	setTimeout(function() {waiting--;turtle.down();}, totalTime);
	totalTime += waitTime;
}

function up() {
    waiting++;
	setTimeout(function() {waiting--;turtle.up();}, totalTime);
	totalTime += waitTime;
}

function setPos(x,y) {
    waiting++;
	setTimeout(function() {waiting--;turtle.setPos(x,y);}, totalTime);
	totalTime += waitTime;
}

function setLineWidth(n) {
    waiting++;
	setTimeout(function() {waiting--;turtle.setLineWidth(n);}, totalTime);
	totalTime += waitTime;
}

function arcLeft(radius, angle) {
    waiting++;
	setTimeout(function() {waiting--;turtle.arcLeft(radius,angle);}, totalTime);
	totalTime += waitTime;
}

function arcRight(radius, angle) {
    waiting++;
	setTimeout(function() {waiting--;turtle.arcRight(radius,angle);}, totalTime);
	totalTime += waitTime;
}

function faceLeft() {
    waiting++;
	setTimeout(function() {waiting--;turtle.setAngle(-Math.PI/2);}, totalTime);
	totalTime += waitTime;
}

function faceRight() {
    waiting++;
	setTimeout(function() {waiting--;turtle.setAngle(Math.PI/2);}, totalTime);
	totalTime += waitTime;
}

function faceUp() {
    waiting++;
	setTimeout(function() {waiting--;turtle.setAngle(Math.PI);}, totalTime);
	totalTime += waitTime;
}

function faceDown() {
    waiting++;
	setTimeout(function() {waiting--;turtle.setAngle(0);}, totalTime);
	totalTime += waitTime;
}

function shiftColor(x) {
    waiting++;
    setTimeout(function() {waiting--;turtle.shiftColor(x);},totalTime);
    totalTime += waitTime;
}

function hideTurtle() {
    waiting++;
    setTimeout(function() {waiting--;turtle.hideTurtle();}, totalTime);
    totalTime += waitTime;
}

setInterval(function() {if(waiting==0) totalTime = 0}, waitTime);
