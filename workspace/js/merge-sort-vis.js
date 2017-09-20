// Canvas settings
var c = document.getElementById("mergeSortVis"); 
var ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";

// Global Vars
var randomArray = [];
const NUM_OF_NUMS = 50;

// Main
function main() {
    setup();
    setInterval(process, 100);
}

// Setup
function setup() {
    for (var i = 0; i < NUM_OF_NUMS; i++) {
        var rand = Math.ceil(Math.random()*100);
        randomArray.push(rand);
    }
}

// Frame process
function process() {
    // Clear the screen
    ctx.clearRect(0, 0, c.width, c.height);

    // For every numbers in the random array
    for (var i = 0; i < randomArray.length; i++) {
        // Draw a corresponding visual depiction 
        ctx.fillRect(i * (c.width / NUM_OF_NUMS), c.width - randomArray[i] * 4, (c.width / NUM_OF_NUMS) - 2, randomArray[i] * 4);
    }
}

// Recursively splits the array and merges them again after they've been ordered
function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    // Split the array
    const half = Math.ceil(array.length / 2);
    const leftSide = array.slice(0, half);
    const rightSide = array.slice(half);

    // Recursively merge the split arrays
    return sort(mergeSort(leftSide), mergeSort(rightSide));
}

// Sorts the two sides into order
function sort(leftSide, rightSide) {
    let results = [];   // ordered result array
    let i = 0;          // left side index
    let ii = 0;         // right side index

    // while the left index and right index have not cycled through
    while (i < leftSide.length && ii < rightSide.length) {
        // if the left number is smaller
        if (leftSide[i] < rightSide[ii]) {
            // push the left number to the result array
            results.push(leftSide[i]);
            // move onto the next left index
            i++;
        // if the right number is smaller
        } else {
            // push the right number to the result array
            results.push(rightSide[ii]);
            // move onto the next right number
            ii++;
        }
    }

    return results.concat(leftSide.slice(i)).concat(rightSide.slice(ii));
}

main();
randomArray = mergeSort(randomArray);
