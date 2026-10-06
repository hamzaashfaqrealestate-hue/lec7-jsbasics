
// objects

let student = {

    name: 'Ali',
    age: 20,
    email: 'ali@example.com',
    PhoneNumber: '123-456-7890',
    marks: 75
}

console.log(student.name);

student.marks = 50;
console.log(student.marks);

// conditionals

if (student.marks == 50 || student.marks > 50) {
    console.log("Student is pass.");
}
else {
    console.log("Student is fail.");
}

let number = '-12jk';
if (number == 0) {
    console.log('Number is Zero')
} else if (number > 0) {
    console.log('Number Is Positive')
} else if (number < 0) {
    console.log('Number is Negative');
}
else {
    console.log("Enter an integer.");
}


let age = 20;

if (age >= 18 && age <= 25) {
    console.log('Eligible');
}
else {
    console.log('Not eligible');
}


let student1 = {
    name: 'Ahmed',
    age: 19,
    email: 'ahmed@example.com',
    PhoneNumber: '098-765-4321',
    marks: 80
};
if (student1.marks >= 50) {
    console.log('Student is pass.');
}
else {
    console.log('Student is fail.');
}

let product = {
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    stock: true
};
if (product.stock) {
    console.log('Available');
}
else {
    console.log('Not Available');
}

let user = {
    username: 'Ali',
    password: 'password123',
    email: 'ali@example.com',
    age: 20,
    isStudent: true
};

if (user.age >= 18 && user.isStudent === true) {

    console.log('User is eligible as student.');

}


