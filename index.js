/* jshint browserify: true */.

var simulateProgress = require("simulate-progress");
var myMainDiv = document.querySelector(".loader");
var percentage = document.querySelector(".progress");

function progressCallback(percent) {
	percentage.style.width = percent + "%";
};

function finishCallback() {
 myMainDiv.classList.add("finished");
};

function startSimulation() {
	myMainDiv.classList.remove("finished");
	simulateProgress(progressCallback,finishCallback);
};

startSimulation();