const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)
const obj4 = {...obj1, ...obj2}
console.log(obj4)

const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "some2@gmail.com"
    }
]
console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))