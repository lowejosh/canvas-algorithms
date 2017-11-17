// Canvas settings
let c = document.getElementById("tenPrint"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");

// Vars
let x = 0;
let y = 0;
let probability = 0.5;
let length = 10;
let lineWidth = 2;
let fillInput = document.getElementById("chosenColor");
let bgInput = document.getElementById("backgroundColor");
let isColorRandom = false;
fillInput.value = "#FCFCFC";
bgInput.value = "#1B1B1B";

// Main draw function
function drawPattern() {
    // Clear the screen
    x = 0;
    y = 0;
    ctx.clearRect(0, 0, c.width, c.height);

    // Retrieve parameters
    let n = parseInt(document.getElementById("nChoice").value);
    let d = parseInt(document.getElementById("dChoice").value);
    let inc = parseFloat(document.getElementById("incChoice").value);
    let scale = parseInt(document.getElementById("scaleChoice").value);
    let size = parseInt(document.getElementById("thickChoice").value);
    updateSidebar(n, d, inc, scale, size);

    // Actually draw
    ctx.strokeStyle = fillInput.value;
    while (y < c.height) {
        while (x < c.width) {
            if (Math.random() < probability) {
                drawLine(x, y, x + length, y + length, lineWidth) 
            } else {
                drawLine(x + length, y, x, y + length, lineWidth) 
            } 
            x+=length;
        } 
        x = 0;
        y+=length;
    } 
}

function drawLine(x, y, x2, y2, stroke) {
    ctx.lineWidth = stroke;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2)
    ctx.stroke();
}

// Run the initial script
drawPattern();


// ---------- SETTING FUNCTIONS ----------

// Updates the sidebar values
function updateSidebar(n, d, inc, scale, size) {
    document.getElementById("nDisplay").innerHTML = n;
    document.getElementById("dDisplay").innerHTML = d;
    document.getElementById("incDisplay").innerHTML = inc;
    document.getElementById("scaleDisplay").innerHTML = scale;
    document.getElementById("thickDisplay").innerHTML = size;
}

// Fill Color Picker
fillInput.addEventListener("change", function() {
    isColorRandom = false;
    drawPattern();
}, false);

// Background Color Picker
bgInput.addEventListener("change", function() {
    let color = bgInput.value;
    document.getElementsByTagName("html")[0].style.backgroundColor = color;
}, false);

// Random Colors
function randomColors() {
    isColorRandom = true;
    drawPattern();
}

function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}


