// Canvas settings
let c = document.getElementById("reactionTest"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.lineCap = "round";

//TODO
// Vars
let testBegun = false;
let start, now, end, update, wait, average;
let reactionBgInput = document.getElementById("reaction-bg");
let reactionTextInput = document.getElementById("reaction-text");
let reactionBgColor = reactionBgInput.value;
let reactionTextColor = reactionTextInput.value;
let resultArray = [];

function main() {
    // If the test hasn't begun
    if (!testBegun) {
        // Wait for click and begin the test 
        c.addEventListener("click", testBegin); 

        // Draw initial screen
        drawScreen("#3C3C3C", "Reaction Time Test", "Click anywehere to begin the test", "#FCFCFC");

    // If the test has begun
    } else {
        // Wait 1-6 seconds before triggering 
        wait = setTimeout(testTriggered, (Math.random() * 6000) + 1000)
    }
}

function testBegin(event) {
    // Stop waiting for click
    c.removeEventListener("click", testBegin); 

    // Wait for early click
    c.addEventListener("click", earlyClick); 

    // Draw screen
    drawScreen("#3C3C3C", "Waiting", "Click when the background changes colour", "#FCFCFC");
    
    // Return to main
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
    let diff = now - start;
    
    // Draw Screen
    drawScreen(reactionBgColor, "Click!", diff + " ms", reactionTextColor);

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
    let diff = end - start;

    // Append the result to the array and update the average
    resultArray.push(diff);
    let sum = 0;
    for (let i = 0; i < resultArray.length; i++) {
        sum+=resultArray[i]; 
    }
    average = Math.round(sum / resultArray.length);
    document.getElementById('reaction-average').innerHTML = average + " ms";

    // Draw screen
    drawScreen(reactionBgColor, diff + " ms", "Click anywhere to try again", reactionTextColor);

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

/* 
=====================================================
                  SETTING FUNCTIONS
=====================================================
                                                   */
// Reaction Background Color Picker
reactionBgInput.addEventListener("change", function() {
    reactionBgColor = reactionBgInput.value;
}, false);

// Reaction Text Color Picker
reactionTextInput.addEventListener("change", function() {
    reactionTextColor = reactionTextInput.value;
}, false);

// Begin the program
main();
