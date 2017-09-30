var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = "Buonasera, ";
}
else if (hourNow > 12) {
	greeting = "Buon pomeriggio, "; 
}
else if (hourNow > 0) {
	greeting = "Buongiorno, ";
}
else {
	greeting = "benvenuto";
}

document.write(greeting);