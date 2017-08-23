/* jshint browserify: true */
var simulateProgress = require("simulate-progress");
var percentage;
var myButtons = document.querySelectorAll("#btn");



function progressCallback(percent) {
	percentage.style.width = percent + "%";
}

function finishCallback() {
 	percentage.classList.add("finished");
}

function startSimulation() {
	percentage.classList.remove("finished");
	simulateProgress(progressCallback,finishCallback);
}


myButtons.forEach( function(button) {

	button.addEventListener("click",function() {

		percentage = this.parentNode.childNodes[1].childNodes[1];
	
		startSimulation();

	});
	
});





