// Canvas 
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Vars
var iterations = 5;
var square = c.width / 3;

function iteration(x, y, iterationCount) {
    if (iterationCount != iterations + 1) {


        square = getSquareSize(iterationCount);
        ctx.fillRect(x, y, square, square);


        for (var i = 0; i < 8; i++) {
            if (iterationCount + 1 != iterations + 1) {
                square = getSquareSize(iterationCount + 1);
                var rx = getParamX(i, square, x);
                var ry = getParamY(i, square, y);
                iteration(rx, ry, iterationCount + 1);
                document.write(i + " | " + rx + " | " + x + " || ");
            }
        } 
    }
}

function getParamX(i, squareSize, x) {
       if (i == 0 || i == 3 || i == 5) {
            return (x - (2 * square));
       } else if (i == 1 || i == 6) {
            return (x + square);
       } else if (i == 2 || i == 4 || i == 7) {
            return (x + (4 * square));
       }
}

function getParamY(i, squareSize, y) {
       if (i == 0 || i == 1 || i == 2) {
            return (y - (2 * square));
       } else if (i == 3 || i == 4) {
            return (y + square);
       } else if (i == 5 || i == 6 || i == 7) {
            return (y + (4 * square));
       }
}

function getSquareSize(iterationCount) {
    return c.width / Math.pow(3, iterationCount);
}

iteration(square, square, 1);
