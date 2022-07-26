// solution for fizzbuzz
function fizzbuzz(a) {
    // if it's divisible by 3 return fizz
    // if it's divisble by 5 return buzz
    // if it's divisble by both 3 and 5 return fizzbuzz
    if((a % 3 == 0) && (a % 5 == 0)) {
        return 'fizzbuzz';
    } else if(a % 3 == 0) {
        return 'fizz';
    } else if(a % 5 == 0) {
        return 'buzz';
    } else {
        return '';
    }
}

console.log('result of 15: ' + fizzbuzz(15)); // fizzbuzz 
console.log('result of 20: ' + fizzbuzz(20)); // buzz
console.log('result of 18: ' + fizzbuzz(18)); // fizz
console.log('result of 17: ' + fizzbuzz(17)); // ''