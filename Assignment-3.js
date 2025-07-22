// function isPrime(num){
//     if (num<2){
//         return false;

//     }
//     for(let i = 2; i<num; i++){
//         if(num % i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(3));
// console.log(isPrime(5))
// console.log(isPrime(10))

// out put holo 3 hole true and 10 hole false hobe , prime songkha ja 1 dara bivajjo,

// vowels problem 

// function countVowels(charecter){

// const vowels="aeiouAEIOU";
// let count = 0;
// for(let number of charecter){
//     if(vowels.includes(number)){
//         count++
//     }
// }
// return count;
// }
// let result = countVowels("My name is Rimon Boydho. I am a student.")
// console.log(result);


function fibonacci(number) {
  let fibNumber = [0, 1];

  for (let i = 2; i < number; i++) {
    fibNumber[i] = fibNumber[i - 1] + fibNumber[i - 2];
  }

  return fibNumber;
}
let result = fibonacci(20)

console.log(result);