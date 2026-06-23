let a=300
if(true){
    let a=100
    console.log(a)
}
console.log(a)

function one(){
    const username = "John Doe";
    function two(){
        const website = "www.example.com";
        console.log(username);
    }
    console.log(website);
    two();
}
one();


function addOne(num1){
    return num1 + 1;
}
const result = addOne(5);
console.log(result);