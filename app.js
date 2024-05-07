/* Functions */

// conditionals
// skip blocks 

// if(true){
//     // run this block
// }

// // loops - repeat blocks of code 

// while(true){
//     // repeat this block
// }

// Function- Js function is like a recipe in a cookbook(cake)
// 1. eggs, flour, sugar, butter - ingredients 
// 2. instructions - a set of rules that tell us what do with the ingredients
// 3. result - cake 

// functions help us save code and execute blocks of code later 

/* Why are functions cool? */
// reduce repeatable code 
// we choose when they run 
// functions can give blocks of code value 

// function cake(){
//     // save this block of code 
// }


// cake() // invoke the function to execute the block 

// function name(){
//     // statement 

//     // return(optional)
// }


function printBanner(text){
    console.log('===========');
    console.log(`${text}`);
    console.log('===========');
}


printBanner("We can make this say anything! ");

const phrase = "I love coding!";
printBanner(phrase);




// Paramaters - are placeholders for input data
function sayHello(name){
    console.log(`Hello ${name}`);
}

// arguments - actual value 
// sayHello("Chris");
// sayHello("Chandler");
// sayHello("Phil");



function add(numA, numB, numC){
 let sum = numA + numB + numC;
 return sum;
}

console.log(add(2,10, 5));


function planetHasWater(planet){
 if(planet === 'Earth' || planet === 'Mars'){
    console.log(true);
 }else{
    console.log(false);
 }
}

planetHasWater('Earth');   // should print true
planetHasWater('Venus');   // should print false
planetHasWater('Mars');    // should print true
planetHasWater('Jupiter'); // should print false





