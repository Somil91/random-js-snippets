function mergeSort(arr) {
    if(arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length/2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


function merge(arr1, arr2) {
    var result = [];
    while(arr1.length && arr2.length){
        var minElem;
         // sortedLeft's first element comes next
        // if it's less than sortedRight's first
        // element or if sortedRight is empty
        if(arr1[0] < arr2[0]) minElem = arr1.shift();
        else minElem = arr2.shift();
        result.push(minElem);
    }
    if(arr1.length) result = result.concat(arr1);
    else result = result.concat(arr2);

    return result;

}

console.log(mergeSort([100, -20, 40, -30, 16, -100, -101]));