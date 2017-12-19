// Canvas settings
let c = document.getElementById("reactionTest"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.lineCap = "round";

// Vars
var testClicked = false;
var testBegun = false;
var timeBuffer = 0;
var start, now, end, update, wait;

function main() {

    // If the test hasn't begun
    if (!testBegun) {
        // Wait for click and begin the test 
        c.addEventListener("click", testBegin); 

        // Draw initial screen
        drawSetup(); 
    // If the test has begun
    } else {
        // Wait 1-6 seconds before triggering 
        wait = setTimeout(testTriggered, (Math.random() * 6000) + 1000)
    }


}

function drawSetup() {
    drawScreen("#3C3C3C", "Reaction Time Test", "Click anywehere to begin the test", "#FCFCFC");

    return;
}

function testBegin(event) {
    // Stop waiting for click
    c.removeEventListener("click", testBegin); 

    // Wait for early click
    c.addEventListener("click", earlyClick); 

    drawScreen("#3C3C3C", "Waiting", "Click when the background changes colour", "#FCFCFC");
    testBegun = true;
    main();
}

function testTriggered() {
    
    // Stop waiting for early click
    c.removeEventListener("click", earlyClick); 

    // Start timer
    start = +new Date();     

    // Wait for click
    c.addEventListener("click", testFinished); 

    // Update the screen every 10 ms
    update = setInterval(testProcess, 1);  
}

function testProcess() {

    // Get time now
    now = +new Date();
    var diff = now - start;
    
    // Draw Screen
    drawScreen("#FCFCFC", "Click!", diff + " ms", "#1B1B1B");


    return;
}

function testFinished() {

    // Stop updating
    clearInterval(update);
    c.removeEventListener("click", testFinished);

    // Wait for click to begin the test again
    c.addEventListener("click", testBegin); 

    // Calculate the reaction time
    end = +new Date();
    var diff = end - start;

    // Draw screen
    drawScreen("#FCFCFC", diff + " ms", "Click anywhere to try again", "#1B1B1B");

}

function earlyClick() {
    // Stop the test
    clearInterval(wait);

    // Stop listening for early click
    c.removeEventListener("click", earlyClick);

    // Wait for click to begin the test again
    c.addEventListener("click", testBegin); 

    // Draw screen
    drawScreen("#3C3C3C", "You clicked too early", "Click anywhere to try again", "#FCFCFC");
}

function drawScreen(bgcolor, heading, sub, color) {
    // Draw bg
    ctx.fillStyle = bgcolor; 
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(heading, c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText(sub, c.width/2, c.height/2 + 13);
}

main();


