const a = 20;
var score = 0;
var keyLock=false;

function restart() {
	map = $.extend(true, [], bmap);
}

function playAnimation(o) {
	o.style.display = "block";
	setTimeout(function() {
		o.style.display = "none";
	}, 3000);
}

function win() {
	setInterval(function(){
		keyLock=true;
	},0);
	
	playAnimation(document.getElementById("ad1"));
	setTimeout(function() {
		document.getElementById("to-show-score").left = 0;
		document.getElementsByTagName("canvas")[0].style.display = "none";
		document.getElementById("retry").style.display = "block";
	}, 3000);
}

function lose() {
	setInterval(function(){
		keyLock=true;
	},0);
	
	playAnimation(document.getElementById("ad2"));
	setTimeout(function() {
		window.open("start.html");
	}, 3000);
}

function changeX(x) {
	return a * (x - 1);
}

function random(start, end) {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

function randomX() {
	return random(1, bmap.length - 1);
}

function randomXY() {
	return [randomX(), randomX()];
}

function choice(arr) {
	return arr[random(1, arr.length)];
}

function updateScore(adder){
	score+=adder;
	document.getElementById("to-show-score").innerHTML="得分："+score;
}
