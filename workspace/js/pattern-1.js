// Canvas settings
let c = document.getElementById("pattern1"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.fillStyle = "#FCFCFC";

// Vars
const NUM_OF_ROWS = 10;
const NUM_OF_COLS = 10;
const INC = c.height / NUM_OF_ROWS;
const TRI_L = (c.width / NUM_OF_COLS) - NUM_OF_COLS;

// Draws a sideways triangle and x and y with input length
function drawTriangle(x, y, length, type) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    if(type == 1) {
        ctx.lineTo(x + length, y + length/2);
    } else {
        ctx.lineTo(x - length, y + length/2); 
    }
    ctx.lineTo(x, y + length);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawTriangleCol(x) {
    for(let i = 0; i < NUM_OF_ROWS; i++) {
        drawTriangle(x, i * INC, i * 5, 1);
        drawTriangle(x + 20, i * INC, (c.width / NUM_OF_COLS) - NUM_OF_COLS, 2);
    }
}

function main() {
    for(let i = 0; i < NUM_OF_COLS; i++) {
        drawTriangleCol()
    }
}

main();
console.log('r');
