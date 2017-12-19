// Canvas settings
let c = document.getElementById("reactionTest"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.lineCap = "round";

// Vars
var testClicked = false;
var timeBuffer = 0;
var start, end;

function main() {
    // Draw initial screen
    drawSetup(); 
 
    // Wait for click and show next screen
    c.addEventListener("click", testBegin); 




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

    // Wait a random amount of time between 2-8 seconds before triggering the test
    setTimeout(testTriggered, (Math.random() * 4000) + 2000)
}

function testTriggered() {
    // Start timer
     

    // Wait for click
    c.addEventListener("clicked", testFinished); 

    // Update the screen every 10 ms
    setInterval(testProcess, 10);  
}

function testProcess() {

    // Draw bg
    ctx.fillStyle = "#FCFCFC";
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#1B1B1B";
    ctx.textAlign = "center";
    ctx.fillText("Click!", c.width/2, c.height/2 - 13);
    ctx.font =  "20px sans-serif";
    ctx.fillText(timeBuffer + " ms", c.width/2, c.height/2 + 13);


    return;
}

function testFinished() {
    document.write("F");
}

main();
