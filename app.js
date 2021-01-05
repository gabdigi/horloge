/*let div = document.getElementById("heur");

let date = new Date();

let text = div.textContent = new Date();*/

function hour (e) {
	let date = new Date();
	let h = date.getHours();
	if (h < 0) {
		"0"+ h;	
	}
	let m = date.getMinutes();
	if (m < 0) {
		"0"+ m;	
	}
	let s = date.getSeconds();
	if (s < 0) {
		s = "0"+ s;	
	}




	let result = 'il est ' + h + ':' + m + ':' + s + ' .';
	document.getElementById('heur').innerHTML = result;
	setInterval(hour(), 1000);
}

hour();