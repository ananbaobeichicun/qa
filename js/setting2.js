function $wanggexian() {
	for (var i = 1; i <= 500 / a; i++) {
		ctx.beginPath();
		ctx.moveTo(i * a, 0);
		ctx.lineTo(i * a, 500);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(0, i * a);
		ctx.lineTo(500, i * a);
		ctx.stroke();
	}
}

function draw() {
	$wanggexian();
	$wanggexian();
	$wanggexian();
	$wanggexian();
	$wanggexian();
	for (var i = 1; i <= map.length - 1; i++) {
		for (var j = 1; j <= map.length - 1; j++) {
			ctx.drawImage(imge[map[j][i].type], changeX(i), changeX(j));
		}
	}
}
