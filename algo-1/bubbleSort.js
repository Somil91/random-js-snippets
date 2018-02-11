function bubbleSort(arr) {

    for( var i = arr.length; i >0 ; i--){
        for(var j =0 ; j <i ; j++) {
            if( arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }

    return arr;

}


console.log(bubbleSort([5,3,8,2,1,4]));
console.log(bubbleSort([20,31,8,20,1,42]));
console.log(bubbleSort([20,-3,8,-2,1,0]));