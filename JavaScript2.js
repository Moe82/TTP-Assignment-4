function elementHover(){
alert("Hey, I told you not to hover over me!");
}

function check(){
    if (document.getElementById("password").value !== "12345678"){
        alert("Error, the password is incorrect");
    }
    else {
	if (document.getElementById("username").value === "student" && document.getElementById("email").value === "student@gmail.com"){

	document.getElementById("head").innerHTML = "Thank You " + document.getElementById("username").value;
	}
	else {
	    alert("Incorrect Info");
        }
    }
}
