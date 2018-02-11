
/**
 * Implementation 1  : crude solution
 * @param {} num 
 */
function fizzBuzz(num) {
    for( let i =1  ; i <= num ; i++) {
        let op = i;
        if( i % 15  === 0 ) {
            op = "FizzBuzz";
        } else if ( i % 3 === 0 ) {
            op = "Fizz";
        } else if ( i % 5 ===0 ){
            op = "Buzz";
        }

        console.log(op);
    }
} 

/**
 * Implementation 2 
 * compact solution
 */
 function fizzBuzz2(num) {
    for (let i = 1; i <= num; i++) {
        let f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
      }
 }



 /**
  * Implementation 3 
  * shortest
  */

  function fizzBuzz3(num) {
    for(let i=1;i<num;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
  }

fizzBuzz3(30);
