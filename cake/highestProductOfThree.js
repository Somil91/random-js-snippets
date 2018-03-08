/**
 * This is to calulate the highest product of three numbers within an array 
 */



function getMaxProductOfThree(arr) {

    if(arr.length < 3) {
        return "Sorry Array length < 3 elements";
    } else if( arr.length === 3) {
        return arr[0]*arr[1]*arr[2];
    } else {
        let maxArr = [arr[0], arr[1], arr[2]];
        let maxProductTillNow = maxArr[0]* maxArr[1] * maxArr[2];
        console.log('Initial Max ', maxArr, maxProductTillNow);

        for(let i = 3 ; i < arr.length ; i ++ ) {
            if(arr[i]*maxArr[1]*maxArr[2] > maxProductTillNow) {
                maxProductTillNow = arr[i]*maxArr[1]*maxArr[2]
            }
            if(maxArr[0]*arr[i]*maxArr[2] > maxProductTillNow) {
                maxProductTillNow = maxArr[0]*arr[i]*maxArr[2] 
            }
            if(maxArr[0]*maxArr[1]*arr[i] > maxProductTillNow) {
                maxProductTillNow = maxArr[0]*arr[i]*maxArr[2] 
            }

            // maxProductTillNow = maxArr[0]* maxArr[1] * maxArr[2];
            console.log('Intermediate Max', maxArr, maxProductTillNow);
        }

        return maxProductTillNow ;
    }
}

console.log(getMaxProductOfThree([2, 1, 4, 3, 5]));
