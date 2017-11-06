// Canvas settings
let c = document.getElementById("voroniDiagram"); 
c.setAttribute('height', window.innerHeight - 64);
c.setAttribute('width', window.innerWidth - 190); 
let ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Vars
const NUM_OF_POINTS = 15;
let pointArray = new Array(NUM_OF_POINTS);

// Randomly generate co-ordinates and a color for every point
for (let i = 0; i < NUM_OF_POINTS; i++) {
    pointArray[i] = new Array(3);
    pointArray[i][0] = Math.floor(Math.random() * c.width);
    pointArray[i][1] = Math.floor(Math.random() * c.height);
    pointArray[i][2] = randomColor();
}

// Brute force through every pixel and every point to find the closest (i know...)
//for (let i = 0; i < c.width; i++) {
 //   for (let ii = 0; ii < c.height; ii++) {
        // Initial value
  //      let closestDist = Math.sqrt(Math.pow(pointArray[0][0] - i, 2) + Math.pow(pointArray[0][1] - ii, 2));
   //     console.log(closestDist);
       // for (let iii = 0; iii < NUM_OF_POINTS; i++) {
             
    //   }    
   // }
//}

// Random Colors
function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

