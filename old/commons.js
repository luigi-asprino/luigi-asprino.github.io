function randomstring() {
	var L = Math.floor(Math.random() * 7 + 3);
	var s = '';
	var randomchar = function() {
		var n = Math.floor(Math.random() * 42);
		if (n < 10)
			return n; // 1-10
		if (n < 36)
			return String.fromCharCode(n + 55); // A-Z
		return String.fromCharCode(n + 61); // a-z
	}
	while (s.length < L)
		s += randomchar();
	return s;
}

/*
function adjustPadding(e) {
	var w = window.innerWidth;
	if (w < 750) {
		var x = document.getElementsByClassName("container");
		for (var i = 0; i < x.length; i++) {
			x[i].style.padding = "0 5% 0";
		}
	} else {
		var x = document.getElementsByClassName("container");
		for (var i = 0; i < x.length; i++) {
			x[i].style.padding = "0 20% 0";
		}
	}
}

window.onload = adjustPadding;

window.onresize = adjustPadding;
*/