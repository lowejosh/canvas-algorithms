// Canvas settings
let c = document.getElementById("pattern1"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");

// Vars
let inc = 0.01;
let scale = 150;
let center = c.width / 2;
let fillInput = document.getElementById("chosenColor");
let bgInput = document.getElementById("backgroundColor");
fillInput.value = "#FCFCFC";
bgInput.value = "#1B1B1B";

// Main draw function
function drawRose() {
    // Clear the screen
    ctx.clearRect(0, 0, c.width, c.height);
    let n = getN(); 
    let d = getD();
    updateSidebar(n, d);
    let k = n / d;
    for (let i = 0; i < Math.PI * d * 2; i+=inc) {
        let r = scale * Math.cos(k * i);
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        ctx.fillStyle = fillInput.value;
        ctx.fillRect(center + x, center + y, 1, 1);
    }
}

// Updates the sidebar values
function updateSidebar(n, d) {
    document.getElementById("nDisplay").innerHTML = n;
    document.getElementById("dDisplay").innerHTML = d;
}

// Retrieve d value 
function getD() {
    return document.getElementById("dChoice").value;
}

// Retrieve n value 
function getN() {
    return document.getElementById("nChoice").value;
}

// Run the initial script
drawRose(5, 8, 150, 0.01, fillInput.value);


// ---------- SETTING FUNCTIONS ----------

// Fill Color Picker
fillInput.addEventListener("change", function() {
    drawRose();
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

