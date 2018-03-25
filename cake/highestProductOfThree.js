/**
 * This is to calulate the highest product of three numbers within an array 
 */



function getMaxProductOfThree(arr) {

    if(arr.length < 3) {
        return "Sorry Array length < 3 elements";
    } else if( arr.length === 3) {
        return arr[0]*arr[1]*arr[2];
    } else {
        let maxArr = [arr[0], arr[1]];
        let lowArr = [arr[0], arr[1]];
        let maxProductTillNow = maxArr[0]* maxArr[1];
        let lowProductTillNow = maxArr[0]* maxArr[1];
        console.log('Initial Max ', maxArr, maxProductTillNow);
        console.log('Initial Low ', maxArr, maxProductTillNow);

        for(let i = 2 ; i < arr.length ; i ++ ) {

            // maxProductTillNow = maxArr[0]* maxArr[1] * maxArr[2];
            console.log('Intermediate Max', maxArr, maxProductTillNow);
        }

        return maxProductTillNow ;
    }
}

console.log(getMaxProductOfThree([2, 1, 4, 3, 5]));
