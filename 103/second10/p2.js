//18.JavaScript Program to Find the Largest Among Three Numbers
let num1=1, num2=3, num3=3;
if(num1>=num2 && num1>=num3){
    console.log(num1)
}
else if(num2>=num1 && num2>=num3){
    console.log(num2)
}
else {
    console.log(num3)
}

//option2
let large = Math.max(num1, num2, num3);
console.log(large)
let least = Math.min(num1, num2, num3);
console.log(least)

//19.find largest and second largest
const arr = [10,2,9,7,5];
let max = 0, smax = 0;
for(let i=0; i<=arr.length; i++){
    if(arr[i]>max) {
        max = arr[i]
    }
    else if(arr[i]>smax && arr[i] != max){
        smax = arr[i]
    }
}
console.log(max);
console.log(smax);

//20.reverse the string
const str = "itrA gninroM dooG";
let splitStr = str.split('').reverse().join('');
console.log(splitStr);

//21.JavaScript Program to Check Prime Number
function isPrime(no) {
    if (no === 1) {
        return false
    }
    else if (no === 2) {
        return true
    }
    else {
        for(let i=2; i<no; i++) {
            if( no % i === 0) {
                return false
            }
        }
        return true;
    }
}
console.log(isPrime(15));

//22.JavaScript Program to Print All Prime Numbers in an Interval
var lNo = 2, bNo = 10
for(let i=lNo; i<=bNo; i++ ) {
    let flag = 0;
    for (let j=2; j<i; j++) {
    if( i % j === 0) {
        flag = 1
        break;
    }
  }
  if(i>1 && flag == 0) {
    console.log(i)
  }
}

//23.JavaScript Program to Find the Factorial of a Number
function fact(n) {
    if (n == 0) {
        return 1
    }
    return n*(n-1)*(n-2)*(n-3)*(n-4);
}
console.log(fact(5)) //=> 5*4*3*2*1


function factorial(factNo) {
    let facto = 1;
    for(let i=1; i<=factNo; i++) {
        facto *= i;
    }
    console.log(`tha factorial of ${factNo} is ${facto}`);
}

//4.JavaScript Program to Print the Fibonacci Sequence
function fiboo(num) {
    let a = 0; let b = 1; let c;
    for(let i=1; i<=num; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
fiboo(5)

//5.sum of natural numbers
const numbers = 100;
let sum = 0;
for(let i=1; i<=numbers; i++){
    sum += i
}
console.log(sum);

const num = [2,4,6,8,10,12];
let total = 0;
for(let i=0; i<num.length; i++) {
    total = total + num[i];
}
console.log(total)

//6.duplicates
const arrD = [1,4,3,3,3,4];
let dup = []
for(let i=0; i<arrD.length; i++) {
    for(let j=1; j<i; j++) {
            if(arrD[i] === arrD[j])
            {
            dup.push(arrD[i])
        }
      
    }
}
console.log(dup);

let duo = arrD.filter((item, index) => arrD.indexOf(item) != index)
console.log(duo)

//7.guess random number
let no = 3;
let rno = Math.floor(Math.random() * 10) + 1;
// while (no !== rno) {
//     console.log('no is not correct guess');
// }
if(no == rno){
    console.log("yes it is correct guess");
}
else {
    console.log('no is not correct');
}
console.log(rno)