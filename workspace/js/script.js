// Canvas 
var c = document.getElementById("sierpinskiCarpet"); 
var ctx = c.getContext("2d");

// Vars
var iterations = 5
var square = c.width;


function iteration(var x, var y, var iterations) {
    fillRect(x, y, square, square);

    square = square / 3;
    var x1 = x - (2 * square);
    var x2 = x + square;
    var x3 = x + (4 * square);
    var y1 = y - (2 * square);
    var y2 = y + square;
    var y3 = y + (4 * square);

    iteration(x1, y1, iteration - 1);
    iteration(x2, y1, iteration - 1);
    iteration(x3, y1, iteration - 1);
    iteration(x1, y2, iteration - 1);
    iteration(x3, y2, iteration - 1);
    iteration(x1, y3, iteration - 1);
    iteration(x2, y3, iteration - 1);
    iteration(x3, y3, iteration - 1);

    

}
