// to run a specific bloock of code multiple times. or for a specific iteration number. 

// while loop
// do while loop
// for loop

// for in loop
// for of loop

// parenthesis ()  

let condition = true;
let number = 110;

if (number > 15) {
    condition = false;
}

console.log('Loop is started...')
while (number < 99) {
    console.log(number);
    number++;
}

console.log('Loop is ended...')


console.log('Do while is started...')
do {
    console.log(number);
    number++;
    
} while (number < 115);
console.log('Do while is ended...')


// declaration, condition , incrementation
for (let i = 0; i < 3; i++) {
    console.log('i = ', i)
}

console.log(i)