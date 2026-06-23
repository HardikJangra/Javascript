//Immediately Invoked Function Expression (IIFE)
(function() {
    //named IIFE
    console.log('This function runs immediately!');
})();
((name)=>{
    console.log(`This function runs immediately! ${name}`);
})("John");