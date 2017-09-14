// Sierpinksi Carpet
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");
var iterations = 2
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
        for (var k = 0; k <= i; k++) {
            for (var kk = 0; kk < 9; kk++) {
                document.write("ReEEE");
                x1 = (kk * 9 * square) + (3 * ii * square) + square;
                x2 = (kk * 9 * square) + (3 * (ii - 3) * square) + square;
                x3 = (kk * 9 * square) + (3 * (ii - 6) * square) + square;
                y1 = (kk * 9 * square) + square;
                y2 = (k * 9 * square) + 4 * square;
                y3 = (k * 9 * square) + 7 * square;
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
    }    
    
}
