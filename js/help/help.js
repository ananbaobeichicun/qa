var imgs = document.querySelectorAll("img");
var p = substr(imgs[0].style.width);
alert();
for (i in imgs) {
	imgs[i].onclick = function() {
		if (imgs[i].style.width != "80%") {
			imgs[i].style.width = "80%";
			imgs[i].style.height = "80%";
		} else {
			imgs[i].style.width = "200px";
			imgs[i].style.height = "200px";
		}
	}
}