// Canvas settings
//var c = document.getElementById("mergeSortVisualization"); 
//var ctx = c.getContext("2d");
//ctx.fillStyle = "#FFFFFF";

// Recursively splits the array and merges them again after they've been ordered
function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    const half = Math.ceil(array.length / 2);
    const leftSide = array.slice(0, half);
    const rightSide = array.slice(half);
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

console.log(mergeSort([23,2,3,414,23,3,1,2,6,8,9,6,4,33]));
