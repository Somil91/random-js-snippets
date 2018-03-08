const simpleSum = (arr) => {
    if( arr.length === 1) {
        return arr[0]
    } else {
        return arr[0] + simpleSum(arr.slice(1));
    }
}

console.log(' Sum of the array using D&C :', simpleSum([8,2,5,6]));


