function countingSort(theArray, maxValue) {

    // array of 0's at indices 0...maxValue
    var numCounts = [];
    for (var i = 0; i < maxValue + 1; i++) {
        numCounts[i] = 0;
    }

    // populate numCounts
    theArray.forEach(function(num) {
        numCounts[num] += 1;
    });

    console.log("Num Counts", numCounts);

    // populate the final sorted array
    var sortedArray = [];
    var currentSortedIndex = 0;

    // for each num in numCounts
    for (var num = 0; num < numCounts.length; num++) {
        var count = numCounts[num];

        // for the number of times the item occurs
        for (var i = 0; i < count; i++) {

            // add it to the sorted array
            sortedArray[currentSortedIndex] = num;
            currentSortedIndex++;
        }
    }

    return sortedArray;
}


console.log(countingSort([1,3,5,2,], 5));