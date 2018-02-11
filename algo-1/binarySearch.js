function binarySearch(numArray, key){
    var middleIndex = Math.floor(numArray.length/2);
    var middleElem = numArray[middleIndex];

    if(middleElem === key) {
        return true ;
    } else if( middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    } else if( middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key);
    } else return false;
    
}

console.log(binarySearch([5,7,12,16,39,42,56,71], 56));
console.log(binarySearch([5,7,12,16,39,42,56,71], 78));