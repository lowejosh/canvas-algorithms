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
var start, now, end, update;

function main() {

    // If the test hasn't begun
    if (!testBegun) {
        // Wait for click and begin the test 
        c.addEventListener("click", testBegin); 

        // Draw initial screen
        drawSetup(); 
    // If the test has begun
    } else {
        // Wait 2-4 seconds before triggering 
        setTimeout(testTriggered, (Math.random() * 4000) + 2000)
    }


}

function drawSetup() {
    // Draw bg
    ctx.fillStyle = "#3C3C3C";
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#FCFCFC";
    ctx.textAlign = "center";
    ctx.fillText("Reaction Time Test", c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText("Click anywhere to begin the test", c.width/2, c.height/2 + 13);

    return;
}

function testBegin(event) {
    // Stop waiting for click
    c.removeEventListener("click", testBegin); 

    // Wait for early click
    c.addEventListener("click", earlyClick); 

    // Draw bg
    ctx.fillStyle = "#3C3C3C";
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#FCFCFC";
    ctx.textAlign = "center";
    ctx.fillText("Waiting", c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText("Click anywhere when the background changes colour", c.width/2, c.height/2 + 13);

    testBegun = true;
    main();
}

function testTriggered() {
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

    // Draw bg
    ctx.fillStyle = "#FCFCFC";
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#1B1B1B";
    ctx.textAlign = "center";
    ctx.fillText("Click!", c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText(diff + " ms", c.width/2, c.height/2 + 13);


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

    // Clear screen 
    ctx.fillStyle = "#FCFCFC";
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#1B1B1B";
    ctx.textAlign = "center";
    ctx.fillText(diff + " ms", c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText("Click anywhere to try again", c.width/2, c.height/2 + 13);
}

function earlyClick() {

}

main();

