// Canvas settings
let c = document.getElementById("sierpinskiTriangle"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.fillStyle = "#FCFCFC";

// Vars
let iterations = 7;
let length = c.width / 2;
let input = document.getElementById("chosenColor");
input.value = "#FCFCFC";

// Recursive function that calls upon itself until it reaches the set iterations
function iteration(x, y, iterationCount) {
    if (iterationCount != iterations + 1) {
        length = getLength(iterationCount);
        drawTriangle(x, y);
        for (let i = 0; i < 3; i++) {
            if (iterationCount + 1 != iterations + 1) {
                length = getLength(iterationCount);
                iteration(getParamX(i, x), getParamY(i, y), iterationCount + 1);
            }
        }
    }
}

// Draws an equilateral triangle at the center
function drawTriangle(x, y) {
    x-=c.width/4; // centers the triangle x axis
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.lineTo(x + length/2, y + length);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

// Returns the x value for proper sub triangle placement
function getParamX(i, x) {
       if (i == 0) {
            return (x + length/4);
       } else if (i == 1) {
            return (x - length/4);
       } else {
            return (x + 3 * length/4);
       }
}

// Returns the y value for proper sub triangle placement
function getParamY(i, y) {
       if (i == 0) {
            return (y - length/2);
       } else {
            return (y + length/2);
       }
}

// Returns the length size determined from the current iteration
function getLength(iterationCount) {
    return c.width / Math.pow(2, iterationCount);
}

// Begin the recursive function with the initial length
iteration(length, length, 1);


// ---------- SETTING FUNCTIONS ----------

// Redraws the sierpinski triangle with a new iteration setting
function reDraw(iterationChoice) {
    ctx.clearRect(0, 0, c.width, c.height); // clear screen
    length = c.width / 2;                   // reset length
    document.getElementById("iterationDisplay").innerHTML = iterationChoice;
    iterations = parseInt(iterationChoice);
    iteration(length, length, 1);
}

// Color Picker
input.addEventListener("change", function() {
    let color = input.value;
    ctx.fillStyle = color;
    iterationChoice = document.getElementById("iterationChoice").value
    reDraw(iterationChoice);
}, false);


