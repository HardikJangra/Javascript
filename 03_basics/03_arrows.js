const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}!`);
    }
}
user.welcomeMessage(); // Output: Welcome, hitesh!
user.username = "john";
user.welcomeMessage(); // Output: Welcome, john!

console.log(this); // Output: Window object (in browser) or global object (in Node.js)


const chai =()=> {
    let username = "hitesh";
    console.log(this); // Output: Window object (in browser) or global object (in Node.js);
}
chai();


const addtwo = (a, b) => {
    return a + b;
}

const addtwoShort = (a, b) => a + b;

const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo (3, 4))
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach ()