// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = numbers.filter(number =>number%2===0)

// console.log(evenNumbers);


// let numStr = [1,2,3,4,5,6,7]
// const sumEvens = (numStr) => {
//     let sum=[];
//     for (let i=0;i<numStr.length;i++){
//         if(i %2  === 0){
//             sum.push(numStr[i])
//         }
//     }
//     return sum;
// }
// console.log(sumEvens(numStr));

const arr = [1,2,3,4,5,6,7,8,9,10]
const even = [];
sum = 0;

arr.forEach(number =>{
    if(number % 2 === 0){
        even.push(number);
    }
});
console.log(even);
even.forEach(number =>{
    sum+=number;

});
console.log(sum);




