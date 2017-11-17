// Canvas settings
let c = document.getElementById("tenPrint"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");

// Vars
let center = c.width / 2;
let fillInput = document.getElementById("chosenColor");
let bgInput = document.getElementById("backgroundColor");
let isColorRandom = false;
fillInput.value = "#FCFCFC";
bgInput.value = "#1B1B1B";

// Main draw function
function drawRose() {
    // Clear the screen
    ctx.clearRect(0, 0, c.width, c.height);

    // Retrieve parameters
    let n = parseInt(document.getElementById("nChoice").value);
    let d = parseInt(document.getElementById("dChoice").value);
    let inc = parseFloat(document.getElementById("incChoice").value);
    let scale = parseInt(document.getElementById("scaleChoice").value);
    let size = parseInt(document.getElementById("thickChoice").value);
    updateSidebar(n, d, inc, scale, size);

    // Actually draw
    let k = n / d;
    ctx.fillStyle = fillInput.value;
    for (let i = 0; i < Math.PI * d * 2; i+=inc) {
        let r = scale * Math.cos(k * i);
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        if (isColorRandom) {
            ctx.fillStyle = randomColor();
        }
        ctx.fillRect(center + x, center + y, size, size);
    }
}

// Run the initial script
drawRose(5, 8, 150, 0.01, fillInput.value);


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
    drawRose();
}, false);

// Background Color Picker
bgInput.addEventListener("change", function() {
    let color = bgInput.value;
    document.getElementsByTagName("html")[0].style.backgroundColor = color;
}, false);

// Random Colors
function randomColors() {
    isColorRandom = true;
    drawRose();
}

function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}


