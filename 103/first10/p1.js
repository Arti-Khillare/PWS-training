//1.print hello world
console.log("Hello World");

//2.add two number  by using function declaration
function sum (n1,n2) {
    var sum = n1 + n2;
    console.log(sum);
}
sum(4,4)

//3.add two numbers by using function expression
const add = function (p,q) {
     return (p+q)
}
console.log(add(2,2))

//4.add two numbers using arrow function 
const ad = () => {
    return (2+9)
    //console.log((1 + 1));
}
//5.ad()
console.log(ad());

//6.find square root
const arr = [64]
let sq = Math.sqrt(arr)
console.log(sq)

//7.calc area of triangle
var p=2,q=6;
var cal = (p*q)/2
console.log(cal);

//8.for all 3sides used herons formula s = (s1+s2+s3)/2 , a = Math.sqrt(s(s-s1)*s(s-s2)*s(s-s3))
function aot(s1,s2,s3) {
    var s = (s1+s2+s2)/2;
    var calt = Math.sqrt(s*(s-s1) * (s-s2) * (s-s3));
    console.log(Math.round(calt))
}
aot(3,4,5)


//9.swapping number by using arithmatic operator
var m = 3;
var n = 6;
m = m + n; //3+6=9;
n = m - n; //9-6=3;
m = m - n; //9-3=6;
console.log(m,n);

//10.destucting method
let x = 9;
let y = 8;
[x,y] = [y,x]
console.log(x,y)

//11.to convert km to miles *factor = 0.621371
var km = 2;
var miles = km * 0.621371;
console.log(miles)

//12.to convert miles to convert
var miles = 1.242742;
var km = miles/0.621371;
console.log(km)

//13.to convert celsius in fahrenheit celsius*9/5+32 9/5=1.8
var celsius = 2;
var fahrenheit = celsius * 9/5 + 32;
console.log(fahrenheit);

//14.to convert fahrenheit to celcius =  c = f/1.8+32;
var fh = 33.8;
var c = fh/(1.8+32);
// var c = (fh - 32)/1.8
console.log(c);


//15.generating number using Math.random
const h = Math.random()
console.log(h)

//16.to check if number is positve , negative or zero
var pos = -22;
var neg = -2;
var zero = 0;
if(pos > 0) {
    console.log(true);
}
else {
    console.log(false)
}
if(neg < 0) {
    console.log(true)
}
else {
    console.log(false)
}
if(zero == 0) {
    console.log(zero)
}
else {
    console.log(false)
}

//17.Javascript Program to Check if a Number is Odd or Even
const num = 1;
if (num % 2 == 0) {
    console.log('the num is even')
}
else {
    console.log('the num is odd')
}