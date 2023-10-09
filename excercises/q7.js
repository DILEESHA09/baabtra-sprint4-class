var num1;
var num2;
var temp;
   num1 = Number(prompt("enter first number"))
   num2 = Number(prompt("enter second number"))
if (num1 != num2)
{
   temp= num1;
   num1=num2;
   num2=temp; 
}

console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);



// var a = 10;
// var b = 20;
// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);