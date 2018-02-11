function fibMemo(index, cache = []){
    //base Case
    if(cache[index]) return cache[index];
    else {
        if(index < 3) return 1;
        else {
            cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache)
        }
    }
    return cache[index];
}

// This fibonacci runs in O ( n) complexity : linear


console.log(fibMemo(8));
console.log(fibMemo(12));
console.log(fibMemo(15));
console.log(fibMemo(50));