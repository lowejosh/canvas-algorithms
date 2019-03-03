// Canvas settings
let c = document.getElementById("pattern1"); 
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
let currentN = 4;
let currentD = 5;
let currentlyAnimating = false;
let interval;

// Main function that handles animating check
function main() {
    currentlyAnimating = true;
    drawRose();
}

// Draw function
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

    // For animation effect
    if (currentN != n) {
        if (currentN < n - 0.01) {
            currentN+=0.01;
        } else if (currentN > n + 0.01) {
            currentN-=0.01;
        } else {
            currentN = n;
        }
    }
    if (currentD != d - 0.01) {
        if (currentD < d - 0.01) {
            currentD+=0.01;
        } else if (currentD > d + 0.01) {
            currentD-=0.01;
        } else {
            currentD = d;
        }
    }
    console.log(currentlyAnimating);

    // Actually draw
    console.log(currentN + " : " + n);
    let k = currentN / currentD;
    ctx.fillStyle = fillInput.value;
    for (let i = 0; i < Math.PI * currentD * 2; i+=inc) {
        let r = scale * Math.cos(k * i);
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        if (isColorRandom) {
            ctx.fillStyle = randomColor();
        }
        ctx.fillRect(center + x, center + y, size, size);
    }

    if (currentN != n || currentD != d) {
        if (currentlyAnimating) {
            currentlyAnimating = false;
            interval = setInterval(function() {
                console.log("REEE");
                drawRose();
            }, 10);
        }
    }
    if (currentN == n && currentD == d) {
        console.log("reee");
        currentlyAnimating = false;
        clearInterval(interval);
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


