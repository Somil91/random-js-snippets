const greatestNo = (arr) => {
    if(arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    } else {
        
        let subMax = greatestNo(arr.slice(1));
        console.log(" ",arr, "  "  ,subMax);
        if( arr[0] > subMax) {
            return arr[0];
        } else return subMax;
    }
}

console.log(' Greatest no using D&C :', greatestNo([91,2,82,64, 78, 71]));
