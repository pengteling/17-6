var i = 0;

setInterval(timedCount,1000);
function timedCount() {
    i = i + 1;
    postMessage(i);
    
}

