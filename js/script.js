reRandom();
restart();
window.onload = function() {
	draw();
	setInterval(function() {
		document.onkeydown = function(e) {
			if (37 <= e.keyCode <= 40 && (!keyLock)) {
				keyLock = true;
				switch(e.keyCode) {
					case 37:
						r.facing = direction.left;
						break;
					case 38:
						r.facing = direction.up;
						break;
					case 39:
						r.facing = direction.right;
						break;
					case 40:
						r.facing = direction.down;
						break;
				}
				var p = setInterval(function() {
					if (!r.move()) {
						clearInterval(p);
						keyLock = false;
					}
					draw();
				}, 100);
			} else {
				switch(e.keyCode) {
					case 81 :
						restart();
						break;
				}
			}
		}
	}, 0);
}