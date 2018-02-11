function fibonacci(position){
    //Base Case
    if(position < 3) return 1;
    else return fibonacci(position -1) + fibonacci(position - 2);
}

// bad as run in O(2^n) exponential runtime

console.log(fibonacci(6));
console.log(fibonacci(12));
console.log(fibonacci(20));