/**
 * Problem : To find multiplication result of each element , except that element 
 *   [1, 7, 3, 4] =>   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3] => [84, 12, 28, 21]
 */

 /**
  * My solution
  * This does take O(n) time but takes more space 0(n^2)
  */
function calculateProduct(arr) {

    let beforeProd = [1];
    let afterProd =  [1];

    let beforeMul = 1 ;
    let afterMul =1;

    let finalProd = [];


    for(i = 1, j = arr.length-2 ; i < arr.length , j >= 0; i ++, j--) {
        
        if(arr[i-1] !== 0) {
            beforeMul = arr[i-1] * beforeMul;
        }
       
        beforeProd.push(beforeMul);

        if(arr[j+1] !== 0) {
            afterMul = arr[j+1] * afterMul ;
        }
        afterProd.push(afterMul);

        // console.log(`BeforeProd at ${i} : `, beforeProd)
        // console.log(`AfterProd at ${j} : `, afterProd)
    }

    for(k =0 ;k < arr.length ; k++) {
        finalProd.push(beforeProd[k] * afterProd[arr.length - 1 - k]);
    }

    console.log(`Input Arr: ${arr} 
Final Arr : ${finalProd}\n`);
}


calculateProduct([2,0,5]);
calculateProduct([2,3,5]);
calculateProduct([1,7,3,4]);



/**
 * 
 * Cake Solution
 */
function getProductsOfAllIntsExceptAtIndex(intArray) {

    if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
    }

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}


console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]))