function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reverseWordsArr = [];

    wordsArr.forEach(element => {
        var reverseWord = '';
        for(var i =element.length -1 ; i>=0; i--){
            reverseWord += element[i];
        }
        reverseWordsArr.push(reverseWord);
    });

    return reverseWordsArr.join(' ');
}

console.log(reverseWords('this is a string of words'));
console.log(reverseWords('coding javascript'));
// console.log(reverseWords('coding javascript'));
