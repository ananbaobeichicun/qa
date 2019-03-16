function checkInX(x) {
	return 1 <= x && x <= bmap.length - 1;
}

function checkIn(x, y) {
	return checkInX(x) && checkInX(y);
}

// function dfs(book, layer) {
// if (layer <= 5) {
// alert("layer:"+layer+"\nbmap["+x+"]["+y+"]:"+bmap[x][y].type+":"+bmap[x][y].crossable);
// if (bmap[x][y].type == block.ending) {
// return true;
// } else {
// var book = bmap;
// for (var i = 0; i <= 3; i++) {
// var nx = x + xDir[i];
// var ny = y + yDir[i];
// if (checkIn(nx, ny)) {
// if (book[nx][ny].crossable) {
// book[x][y] = new wall(nx,ny);
// if (dfs(nx, ny, layer + 1)) {
// return true;
// }
// book[x][y] = new air();
// }
// }
// }
// }
// }
// return false;
// }

var r;
var en;

function reRandom() {
	r = new robot(randomX(), randomX());
	do {
		en = new ending(randomX(), randomX());
	} while(en.x == r.x && en.y == r.y)

	bmap[r.x][r.y] = r;
	bmap[en.x][en.y] = en;

	for (var i = 1; i <= bmap.length - 1; i++) {
		for (var j = 1; j <= bmap.length - 1; j++) {
			if (!((i == r.x && j == r.y) || (i == en.x && j == en.y))) {
				switch(random(1,30)) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
						bmap[i][j] = new air(i, j);
						break;
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 21:
						bmap[i][j] = new coin(i, j);
						break;
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
						bmap[i][j] = new wall(i, j);
						break;
					case 27:
						bmap[i][j] = new killer(i, j);
						break;
					case 28:
					case 29:
					case 30:
						bmap[i][j] = new doubleCoin(i, j);
				}
			}
		}
	}

	// alert(dfs(r.x,r.y,0));
}
