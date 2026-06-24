const myNums=[1, 2, 3, 4, 5];
const newNum=myNums.filter((num)=>{
    return num>2;
});
console.log(newNum);

const books=[
    {title: 'Book 1', author: 'Author 1'},
    {title: 'Book 2', author: 'Author 2'},
    {title: 'Book 3', author: 'Author 3'}
];  
let userBook=books.filter((book)=>{book.author==='Author 2'});
console.log(userBook);

