// Canvas settings
//var c = document.getElementById("mergeSortVisualization"); 
//var ctx = c.getContext("2d");
//ctx.fillStyle = "#FFFFFF";

function mergeSort(array) {
    // Initial Vars
    var half = Math.ceil(array.length / 2); 
    var leftSide = array.slice(0, half);
    var rightSide = array.slice(half, array.length);
    var i = 0;
    var j = 0;
    var results = [];
    
    while (i < leftSide.length || j < rightSide.length) {
        if (i == leftSide.length) {
            // j is the only index leftSide
            results.push(rightSide[j]);
            j++;
        } else if (j == rightSide.length || leftSide[i] <= rightSide[j]) {
            results.push(leftSide[i]);
            i++;
        } else {
            results.push(rightSide[j]);
            j++;
        }
    }
    return results;
}

console.log(mergeSort([1,3,4,3,7,9]));
