

let myage = 17;

// if else  elseif
if (myage > 18) {
    console.log('I can drive a car')
}

if (myage < 18) {
    console.log('I cant drive a car')
}


// Grade F (marks < 50)
// Grade D (marks >= 50)
// Grade C (marks >= 60)
// Grade B (marks >= 70)
// Grade A (marks >= 80)


let marks = 80;

// if (marks >= 80) {
//     console.log('you are pass');
// } else {
//     console.log('you are fail')
// }


// AND  Operator

// T && T = T
// T && F = F
// F && T = F
// F && F = F


//   OR  Operator

// T && T = T
// T && F = T
// F && T = T
// F && F = F



if (marks >= 50 && marks < 60) {
    console.log('Grade D')
}
if (marks >= 60 && marks < 70) {
    console.log('Grade C')
}
if (marks >= 70 && marks <= 80) {
    console.log('Grade B')
}
if (marks >= 80 && marks < 100) {
    console.log('Grade A')
}
if (marks < 50) {
    console.log('Grade F')
}



// console.log(grade)

if (marks < 0 || marks > 100) {
    console.log('You cant Give marks Greater than 100 OR Less than 0')
} else if (marks >= 80) {
    console.log('grade A')
} else if (marks >= 70) {
    console.log('Grade B');
} else if (marks >= 60) {
    console.log('Grade C');
} else if (marks >= 50) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}