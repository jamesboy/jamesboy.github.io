var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
var display = document.getElementById("time");
var counter = 0;
var myInterval = -1;

startButton.addEventListener("click", function() {
    if (myInterval == -1) {
        startButton.innerHTML = "Pause";
        myInterval = setInterval(count, 1000);
    }
    else {
        startButton.innerHTML = "Start";
        clearInterval(myInterval);
        myInterval = -1;
    }
});

resetButton.addEventListener("click", function(){
    startButton.innerHTML = "Start";
    clearInterval(myInterval);
    myInterval = -1;
    display.innerHTML = "00:00";
    counter = 0;
})


function count() {
    counter++;
    var minutes = parseInt(counter / 60);
    var seconds = counter % 60;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    display.innerHTML = minutes + ':' + seconds;
}
