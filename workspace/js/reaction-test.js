// Canvas settings
let c = document.getElementById("reactionTest"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.lineCap = "round";

function main() {
    drawSetup(); 
 
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
    ctx.fillText("Press anywhere to begin the test", c.width/2, c.height/2 + 13);
    
}

main();
