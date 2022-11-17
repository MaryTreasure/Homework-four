//1
function funk1(value) {
    let sq = value ** 8;
    return sq;
};
console.log (funk1 (2));


//2

function funk2(num1, num2) {
    let sum = num1 + num2;
    return sum;
};
console.log (funk2 (2, 16));

//3


function funk3(num1, num2, num3) {
    let calc = (num1 - num2) / num3;
    return calc;
};
console.log (funk3 (14, 2, 2));

//4

function funk4(num) {
    if (num === 1 ) {
        return "Понедельник"
    } else if (num === 2 ) {
        return "Вторник"
    }  else if (num === 3 ) {
        return "Среда"
    }  else if (num === 4 ) {
        return "Четверг"
    }  else if (num === 5 ) {
        return "Пятница"
    }  else if (num === 6 ) {
        return "Суббота"
    }  else if (num === 7 ) {
        return "Воскресенье"
    }  else {
        return "Введите число от 1 до 7"
    }
};
console.log (funk4 (81));

//5

function funk5(num1, num2 ) {
    if (num1 === num2 ) {
        return true
    } else {
        return false
    }
};

console.log (funk5 (8, 9))


//6

function funk6(num1, num2 ) {
    if (num1 + num2 > 10 ) {
        return true
    } else {
        return false
    }
};

console.log (funk6 (1, 2))

//7

function funk7(num1 ) {
    if (num1 > 0 ) {
        return true
    } else {
        return false
    }
};

console.log (funk7 (1));

//8 

function funk8(num1 ) {
    if (num1 > 0 && num1 < 10) {
        return true
    } else {
        return false
    }
};

console.log (funk8 (11));

//9

let array = [-4, 4, 2, -6, 5, 0, 10, -9, 2];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (funk8 (array[i])) {
        newArray.push(array[i]);
    }
};
console.log (newArray);



//12
function funk12 (num) {
    if (num % 2 === 0) {
        return true
    } else{
        return false
    }
};
console.log (funk12 (9));

//16


let usWord = 'довод'
let funk16 = (word) => {
    word = word.toLowerCase()
    let reverseWord = word.split('').reverse().join('')
    if (usWord === reverseWord) {
        return true
    } else {
        return false
    } 
};
let concl = funk16 (usWord);
console.log(concl);