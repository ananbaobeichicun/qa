function wall(x, y) {
	this.type = block.wall;
	this.x = x;
	this.y = y;

	this.onCrush = function(r) {
		r.facing = direction.stop;
	}
}

function air(x, y) {
	this.type = block.air;
	this.x = x;
	this.y = y;

	this.onCrush = function(r) {
		map[r.x][r.y] = new air(r.x, r.y);
		r.x = this.x;
		r.y = this.y;
		map[r.x][r.y] = r;
	}
}

function ending(x, y) {
	this.type = block.ending;
	this.x = x;
	this.y = y;

	this.onCrush = function(r){
		map[r.x][r.y] = new air(r.x, r.y);
		r.x = this.x;
		r.y = this.y;
		map[r.x][r.y] = r;
		r.facing = direction.stop;
		win();
	}
}

function robot(x, y) {
	this.facing = direction.stop;
	this.type = block.robot;
	this.x = x;
	this.y = y;

	this.onCrush = function(r) {
		r.facing = direction.stop;
	}
}

function killer(x, y) {
	this.type = block.killer;
	this.x = x;
	this.y = y;

	this.onCrush = function(r){
		r.facing = direction.stop;
		lose();
		//FIXME 出生点生成robot
	}
}

function coin(x, y) {
	this.type = block.coin;
	this.x = x;
	this.y = y;

	this.onCrush = function(r) {
		map[r.x][r.y] = new air(r.x, r.y);
		r.x = this.x;
		r.y = this.y;
		map[r.x][r.y] = r;
		updateScore(1);
	}
}

function doubleCoin(x, y) {
	this.type = block.doubleCoin;
	this.x = x;
	this.y = y;

	this.onCrush = function(r) {
		map[r.x][r.y] = new air(r.x, r.y);
		r.x = this.x;
		r.y = this.y;
		map[r.x][r.y] = r;
		updateScore(2);
	}
}