const myNumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber=myNumber.map((number)=>number+10);
console.log(newNumber);

const newNumber=myNumbers
                .map((number)=>number+10)
                .map((number)=>number*2)
                .filter((number)=>number>30);
                console.log(newNumber);