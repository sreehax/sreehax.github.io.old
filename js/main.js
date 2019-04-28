//const url = "http://localhost:5000";
const url = "https://proboscis.herokuapp.com";
M.AutoInit();
function login() {
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			if(this.responseText == "invalid") {
				wresponse("Enter a username and a password");
			} else if(this.responseText == "incorrect") {
				wresponse("Username or password is incorrect");
			} else if(this.responseText == "error") {
				wresponse("Internal server error. Contact tech support")
			} else if(this.responseText.startsWith("valid")) {
				permission = this.responseText.substring(5);
				localStorage.setItem("permission", permission);
				window.location.replace("/app")
			}
		}
	};
	xhttp.open("POST", url + "/login", true);
	xhttp.send("username=" + username + "&password=" + password);
}
function create() {
	username = document.getElementById("username").value;
	pass1 = document.getElementById("password").value;
	pass2 = document.getElementById("c-password").value;
	if(pass1 != pass2) {
		wresponse("Please confirm password");
		return 0;
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			ff
		}
	};
	xhttp.open("POST", url + "/create", true);
	xhttp.send("username=" + username + "&password=" + pass1);
}
function wresponse(text) {
	document.getElementById("response").textContent = text;
}
if(window.location.pathname.startsWith("/app")) {
	permission = localStorage.getItem("permission");
	if(permission == null) {
		window.location.replace("/");
	}
	permission = parseInt(permission);
	if(permission == 1) { //Doctor
		document.getElementById("doctor-portal").style.display = "block";
		document.getElementById("lab-portal").style.display = "none";
		document.getElementById("page-title").innerHTML = "Doctor Portal";
	} else if(permission == 0) { //Lab
		document.getElementById("doctor-portal").style.display = "none";
		document.getElementById("lab-portal").style.display = "block";
		document.getElementById("page-title").innerHTML = "Lab Portal";
	} else {
		window.location.replace("/")
	}
	console.log(permission);
}
