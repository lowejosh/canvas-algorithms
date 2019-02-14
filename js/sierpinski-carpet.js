// Canvas settings
let c = document.getElementById("sierpinskiCarpet"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Canvas needs to be square-shaped
let ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Vars
let iterations = 6;
let square = c.width / 3;
let prevIterationCount = iterations;
let length = c.width / 2;
let fillInput = document.getElementById("chosenColor");
let bgInput = document.getElementById("backgroundColor");
let colorList;
let randomColors = false;
let randomLayeredColors = false;
fillInput.value = "#FCFCFC";
bgInput.value = "#1B1B1B";

// Recursive function that calls upon itself until it reaches the set amount of iterations
function iteration(x, y, iterationCount) {
        // Random Colors
        if (randomColors == true) {
            ctx.fillStyle = randomColor();
        }
        // Random Layered Colors
        if (randomLayeredColors == true) {
            ctx.fillStyle = colorList[iterationCount - 1];
        }

        if (iterationCount != iterations + 1) {
            square = getSquareSize(iterationCount);
            ctx.fillRect(x, y, square, square);
        
        for (let i = 0; i < 8; i++) {
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

// Fill Color Picker
fillInput.addEventListener("change", function() {
    randomLayeredColors = false;
    randomColors = false;
    let color = fillInput.value;
    ctx.fillStyle = color;
    iterationChoice = document.getElementById("iterationChoice").value
    reDraw(iterationChoice);
}, false);

// Background Color Picker
bgInput.addEventListener("change", function() {
    let color = bgInput.value;
    document.getElementsByTagName("html")[0].style.backgroundColor = color;
}, false);

// Random Colors
function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

// Radio Function
function randomSettingHandler(input) {
    if (input == 1) {
        randomLayeredColors = false;         
        randomColors = true; 
        reDrawCurrentIteration();
    } else {
        colorList = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]
        console.log(colorList);
        randomColors = false; 
        randomLayeredColors = true;         
        reDrawCurrentIteration();
    }
}

function reDrawCurrentIteration() {
        iterationChoice = document.getElementById("iterationChoice").value;
        reDraw(iterationChoice);
}

