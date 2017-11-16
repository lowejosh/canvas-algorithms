// Canvas settings
let c = document.getElementById("pattern1"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerHeight - 64); // Needs to be square-shaped
let ctx = c.getContext("2d");
ctx.fillStyle = "#FCFCFC";

// Vars
let inc = 0.02;
let d = 8;
let n = 5;
let scale = 100;
let center = c.width / 2;

// Main function
function main() {
    let k = n / d;
    for (let i = 0; i < Math.PI * d * 2; i+=inc) {
        console.log('reached');
        let r = scale * Math.cos(k * i);
        let x = r * Math.cos(i)
        let y = r * Math.sin(i)
        ctx.fillRect(center + x, center + y, 1, 1);
    }

}

main();
