//falsy values
flase,0,-0,NaN,null,undefined,"",BigInt(0)

//truthy values
 "0", 'false', " ", [], {},function (){} 

 if(userEmail.length===0){
    console.log("Please provide an email address");
 }
 const emptyObject = {}
    if(Object.keys(emptyObject).length === 0){
        console.log("Object is empty");
    }
let vall;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

//Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80? console. log("less than 80") : console.log("more than 80")