// Canvas settings
let c = document.getElementById("tenPrint"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.lineCap = "round";

// Vars
let x = 0;
let y = 0;
let strokeInput = document.getElementById("chosenColor");
let bgInput = document.getElementById("backgroundColor");
let isColorRandom = false;
strokeInput.value = "#FCFCFC";
bgInput.value = "#1B1B1B";

// Main draw function
function drawPattern() {
    // Clear the screen
    x = 0;
    y = 0;
    ctx.clearRect(0, 0, c.width, c.height);

    // Retrieve parameters
    let probability = parseFloat(document.getElementById("probChoice").value);
    let length = parseInt(document.getElementById("scaleChoice").value);
    let lineWidth = parseFloat(document.getElementById("strokeChoice").value);
    updateSidebar(probability, length, lineWidth);

    // Actually draw
    ctx.strokeStyle = strokeInput.value;
    while (y < c.height) {
        while (x < c.width) {
            if (isColorRandom) {
                ctx.strokeStyle = randomColor(); 
            }
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
function updateSidebar(probability, scale, lineWidth) {
    document.getElementById("probDisplay").innerHTML = probability;
    document.getElementById("scaleDisplay").innerHTML = scale;
    document.getElementById("strokeDisplay").innerHTML = lineWidth;
}

// Stroke Color Picker
strokeInput.addEventListener("change", function() {
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


