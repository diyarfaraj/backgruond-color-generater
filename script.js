var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body"); 

css.textContent= "CSS Style Code: linear-gradient(to right, red , yellow)";


function colorPicker(){
	body.style.background = "linear-gradient( to right, " + color1.value + " , " + color2.value + ")";

	css.textContent= "CSS Style Code: " + body.style.background + ";";
}

function generate() {
    color1.value = '#' + (Math.random().toString(16).slice(2, 8)).slice(-6);
    color2.value = '#' + (Math.random().toString(16).slice(2, 8)).slice(-6);
    colorPicker();
}

color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);
