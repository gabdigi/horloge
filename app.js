/*let div = document.getElementById("heur");

let date = new Date();

let text = div.textContent = new Date();*/

function hour(){
	today = new Date;
	h = today.getHours();
	m = today.getMinutes();
	s = today.getSeconds();
	
	if (h < 0) {
		h = "0"+h;	
	}
	if (m < 0) {
		h = "0"+m;	
	}
	if (s < 0) {
		s = "0"+s;	
	}

	result =  h + ':' + m + ':' + s ;
	document.getElementById('heur').innerHTML = result;
	document.getElementById('heur').textContent = result;

	setTimeout(hour, 1000);
	
}

hour();

/*
	function showTime(){
				var date = new Date();
				var h = date.getHours(); // 0 - 23
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";
				
				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){
					h = 12;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
			}

			showTime();




*/


/*
function showTime(){
				var date = new Date();
				var h = date.getHours(); // 0 - 23
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";
				
				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){
					h = 12;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
			}

			showTime();








*/