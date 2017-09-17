// Canvas settings
var c = document.getElementById("sierpinskiTriangle"); 
var ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Vars
var iterations = 3;
var length = c.width / 2;

function iteration(x, y, iterationCount) {
    if (iterationCount != iterations + 1) {
        length = getLength(iterationCount);
        drawTriangle(x, y);
        for (var i = 0; i < 3; i++) {
            if (iterationCount + 1 != iterations + 1) {
                length = getLength(iterationCount);
                var rx = getParamX(i, x);
                var ry = getParamY(i, y);
                iteration(rx, ry, iterationCount + 1);
            }
        }
    }
}

// Draws an equilateral triangle at the center
function drawTriangle(x, y) {
    x-=c.width/4; // centers the triangle x axis
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.lineTo(x + length/2, y + length);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

// Returns the x value for proper length placement
function getParamX(i, x) {
       if (i == 0) {
            return (x + length/4);
       } else if (i == 1) {
            return (x - length/4);
       } else {
            return (x + 3 * length/4);
       }
}

// Returns the y value for proper length placement
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


// Redraws the sierpinski triangle with a new iteration setting
function reDraw(iterationChoice) {
    ctx.fillStyle = "#101010";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#FFFFFF";
    length = c.width / 2;

    document.getElementById("iterationDisplay").innerHTML = iterationChoice;
    iterations = parseInt(iterationChoice);
    iteration(length, length, 1);
}


// Begin the recursive function with the initial length
iteration(length, length, 1);
