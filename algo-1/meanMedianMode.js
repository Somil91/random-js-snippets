/** Now this approach is using just in time compilation ; i.e on demand
 * There is way to compute this in O(1) complexity with using the 0(n) space complexity : greedy approach / ahead of time compilation
 * Check second approach in cake folder : meanMedianMode.
 */

function getMean(arr) {
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)/arr.length;
}

function getMedian(arr) {
    arr.sort(function(a, b){
        return a-b;
    })
    var median;
    if(arr.length % 2 != 0) {
        median = arr[Math.floor(arrlength /2)];
    } else {
        var mid1 = arr[(arr.length /2) - 1];
        var mid2 = arr[(arr.length /2) + 1];
        median = (mid1 + mid2) /2
    }
    return median;
}

function getMode(arr) {
    var modeObj = {}; // Hash table

    arr.forEach(num => {
        if( !modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    var maxFrequency = 0;
    var mode = [];
    for( var num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }else if(modeObj[num] === maxFrequency) modes.push(num);
    }

    if(mode.length === Object.keys(modeObj).length) modes = [];
    return modes;
}

function getMeanMedianMode(arr) {
    var result = {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
     };

     return result;

}

console.log('mean', getMeanMedianMode([1, 2, 3,4,5,4,6,1]));


