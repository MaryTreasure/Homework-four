//1 
const showString = (text, times) => {
    for ( i = 0; i < times; i++) {
        console.log (text);
    }

}
showString('Привет', 5); 



//2 
let letter = 'Ф'
let isVowelOrNot = (x) => {
    x = x.toLowerCase()
    if (x == 'а' || x == 'о' || x == 'у' || x  == 'ы' || x  == 'э' || x == 'я' || x == 'ё' || x == 'ю' || x == 'и' || x == 'е') {
        return true
    } else {
        return false
    }
}
let result = isVowelOrNot(letter);
console.log(result);


// 3


let userWord = 'довод'
let isPalindromeOrNot = (word) => {
    word = word.toLowerCase()
    let reverseWord = word.split('').reverse().join('')
    if (userWord === reverseWord) {
        return true
    } else {
        return false
    } 
};
let conclusion = isPalindromeOrNot (userWord);
console.log(conclusion);