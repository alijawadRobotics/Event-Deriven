// Global Vriables
var stp = 0;
var currTime = 10;

// Function of stop button
function stop() {
    setTimeout(function () {
        //stop launching red code
        document.getElementById("stopcss").disabled = true;
        document.getElementById("startcss").disabled = false;
        document.getElementById("countdownTimer").innerHTML = "Stop Launching";
        currTime = currTime * 0;
        alert("Stop Launching");
    }, 0000);
}
//
//function stop() {
    //document.getElementById("stopcss").disabled = true;
    //document.getElementById("startcss").disabled = false;
//}

//countdown start function
function countDown() {
    document.getElementById("startcss").disabled = true;
    document.getElementById("stopcss").disabled = false;

    var currTime = 10;
        for (var i = 1; i <= 10; i++) {
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "GO";
            }, 1000 * i);
            currTime = currTime-1;          
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = currTime;
                currTime = currTime-1;
            }, 1000 * i); 
        }
    }   
}