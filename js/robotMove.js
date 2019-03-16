robot.prototype.move = function() {
	var nx = this.x + xDir[this.facing]
	var ny = this.y + yDir[this.facing];
	if (checkIn(nx, ny)) {
		try{
			map[nx][ny].onCrush(this);
		}catch(err){
			alert(nx+','+ny);
		}
		return this.facing != direction.stop;
	} else {
		return false;
	}
}