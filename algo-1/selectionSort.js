const selectionSort = (arr) => {
    // var min = arr[0];
    // var minIndex = 0;

    for(let i = 0 ;i < arr.length-1 ; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            const element = arr[j];

            if(element < arr[minIndex]) {
                min = element;
                minIndex  =  j;
            }
        }
        if(minIndex !== i ) { // swap 
            arr[i] = arr[i] + arr[minIndex];
            arr[minIndex] = arr[i] - arr[minIndex];
            arr[i] = arr[i] - arr[minIndex];
        }
    }

    console.log("Sorted Arr", arr);
};


selectionSort([50, 11, 15, 2, 3, 78]);





/**
 * To be checked later
 */
// const smallestIndex = (arr2) => {
//     console.log(arr2);
// let smallestElement = arr2[0];
// console.log("index", smallestElement);
// let smallestIndex = 0;
// arr2.forEach((element, index) => {
//     if(element < smallestElement){
//         smallestElement = element
//         smallestIndex = index;
//     }
// });
// return smallestIndex;
// }


// const selectionSort = (arr) => {
//     let newArr = [];
//     let element , ele ;
//     // for(let i = 0 ; i < arr.length ; i++) {
//     //     smallest = smallestIndex(arr);
//     //     // console.log('smallest INdex', smallest)
//     //     ele = arr.slice(smallest, 1);
//     //     // console.log(arr);
//     //     newArr.push(ele[0]);
//     //     i = arr.length;
//     //     console.log(arr.length,i);
//     // }
//     arr.forEach((element) => {
//         smallest = smallestIndex(arr);
//         // console.log('smallest INdex', smallest)
//         ele = arr[smallest];
//         arr.splice(smallest, 1);
//         // console.log(arr);
//         newArr.push(ele);
        
//     });

//     console.log('sorted array ', newArr);
// }

// selectionSort([50, 11, 15, 2, 3, 78]);