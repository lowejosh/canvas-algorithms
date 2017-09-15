// Canvas 
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");

// Vars
var squareLength = c.width;
var iterations = 3;

function sierpinskiCarpet(x1, y1, squareLength, iterations){
    if (iterations == 0) {
        drawSquare(x1, y1, squareLength);    
    } else {
        squareLength = squareLength / 3;
        var x2 = x1 + squareLength; 
        var y2 = y1 + squareLength; 
        var x3 = x1 + squareLength * 2; 
        var y3 = y1 + squareLength * 2; 

        sierpinskiCarpet(x1, y1, squareLength, iterations - 1);
        sierpinskiCarpet(x1, y2, squareLength, iterations - 1);
        sierpinskiCarpet(x1, y3, squareLength, iterations - 1);
        sierpinskiCarpet(x2, y1, squareLength, iterations - 1);
        sierpinskiCarpet(x2, y3, squareLength, iterations - 1);
        sierpinskiCarpet(x3, y1, squareLength, iterations - 1);
        sierpinskiCarpet(x3, y2, squareLength, iterations - 1);
        sierpinskiCarpet(x3, y3, squareLength, iterations - 1);
    }
}

function drawSquare(x1, y1, squareLength) {
    ctx.fillRect(x1, y1, squareLength, squareLength);
}


ctx.fillStyle="#FFFFFF";
drawSquare(0, 0, c.width);

ctx.fillStyle="#101010";
sierpinskiCarpet(0, 0, squareLength, iterations);
