// Canvas settings
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Vars
var iterations = 3;
var square = c.width / 3;

// Recursive function that calls upon itself until it reaches the set amount of iterations
function iteration(x, y, iterationCount) {
    if (iterationCount != iterations + 1) {
        square = getSquareSize(iterationCount);
        ctx.fillRect(x, y, square, square);
        
        for (var i = 0; i < 8; i++) {
            if (iterationCount + 1 != iterations + 1) {
                square = getSquareSize(iterationCount + 1);
                iteration(getParamX(i, x), getParamY(i, y), iterationCount + 1);
            }
        } 
    }
}

// Returns the x value for proper square placement
function getParamX(i, x) {
       if (i == 0 || i == 3 || i == 5) {
            return (x - (2 * square));
       } else if (i == 1 || i == 6) {
            return (x + square);
       } else {
            return (x + (4 * square));
       }
}

// Returns the y value for proper square placement
function getParamY(i, y) {
       if (i < 3) {
            return (y - (2 * square));
       } else if (i < 5) {
            return (y + square);
       } else {
            return (y + (4 * square));
       }
}

// Returns the square size determined from the current iteration
function getSquareSize(iterationCount) {
    return c.width / Math.pow(3, iterationCount);
}

// Redraws the sierpinski carpet with a new iteration setting
function reDraw(iterationChoice) {
    ctx.clearRect(0, 0, c.width, c.height);
    square = c.width / 3;
    document.getElementById("iterationDisplay").innerHTML = iterationChoice;
    iterations = parseInt(iterationChoice);
    iteration(square, square, 1);
}

// Begin the recursive function with the initial square
iteration(square, square, 1);
