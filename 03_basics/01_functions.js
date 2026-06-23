function sayMyName(){
    console.log("My name is John Doe");
    console.log("I am a software developer");
    console.log("I love coding");
    console.log("I enjoy learning new technologies");
    console.log("I am passionate about open source");
}
sayMyName();

function addtwoNumbers(num1, num2){
    return num1 + num2;
}
let result = addtwoNumbers(5, 10);
console.log("The sum is: " + result);

function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    return sum;
}
const result2 = addTwoNumbers(15, 25);
console.log("The sum is: " + result2);

function loginUserMessage(username){
    return `Welcome back, ${username}!`;
}
const message = loginUserMessage("JohnDoe");
console.log(message);


function calculateCartPrice(...num1){
    return nums1
}
conole.log(calculateCartPrice(10, 20, 30, 40, 50)); 

const user = {
    name: "John Doe",
    age: 30,
    email: "hardik@google.com"
}
function handleObject(anObject){
    console.log(anObject.name);
    console.log(anObject.age);
    console.log(anObject.email);
}
handleObject(user); 

const myArray = [1, 2, 3, 4, 5];
function returnSecondIndex(anArray){
    return anArray[2];
}
const secondIndexValue = returnSecondIndex(myArray);
console.log("The value at the second index is: " + secondIndexValue);
