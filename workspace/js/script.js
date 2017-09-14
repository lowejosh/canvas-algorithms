// Sierpinksi Carpet
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");
var iterations = 3
ctx.fillStyle="#FFFFFF";

// Initial square
var square = c.width/3;
ctx.fillRect(square, square, square, square);

// Helper vars
var x1, x2, x3, y1, y2, y3;


for (var i = 0; i < iterations; i++) {
    prevSquare = square;
    square = square/3;

    for (var ii = 0; ii < 9; ii++) {
        x1 = (3 * ii * square) + square;
        x2 = (3 * (ii - 3) * square) + square;
        x3 = (3 * (ii - 6) * square) + square;
        y1 = square;
        y2 = 4 * square;
        y3 = 7 * square;
        if (ii != 4) {
            if (ii < 3) {
                ctx.fillRect(x1, y1, square, square);
            }
            else if (ii >= 3 && ii < 6) {
                ctx.fillRect(x2, y2, square, square);
            }
            else {
                ctx.fillRect(x3, y3, square, square);
            }
        }
    }    
    
}
