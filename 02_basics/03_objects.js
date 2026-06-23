//object literals
const mySymbol = Symbol("Key1")
const JsUser = {
name: "Hitesh",
age: 18,
location: "Jaipur",
[mySymbol]: "key1",
email: "hiteshagoogle.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySymbol])
JsUser.email = "hitesh@google.com"
object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());