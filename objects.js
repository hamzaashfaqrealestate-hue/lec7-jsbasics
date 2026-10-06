let project1 = '@myfirstproject'
let project2 = '@mysecondproject'



// objects are collection of key value pairs


let monthnames = [
    '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]


let projectonename = "Project One"
let projectonelanguages = ['html', 'css', 'javascript']

let projectone = {
    projectname: "Project One",
    projectlanguages: ['html', 'css', 'javascript'],
    projectdurationindays: 40,
    projectmembers: ['member1', 'member2'],
    time: {
        date: 22,
        month: 'Oct',
        year: 2026
    }
}


let someoneispass = true;

let projecttwo = {
    projectname: "Project Two",
    projectlanguages: ['html', 'javascript'],
    projectdurationindays: 60,
    projectmembers: ['member4', 'member5'],
    time: {
        date: 29,
        month: 'Dec',
        year: 2026
    }
}

console.log(projecttwo.projectmembers)


let listofprojects = [
    projectone,
    projecttwo
]

console.log(listofprojects)


console.log(listofprojects[1].projectmembers)
console.log(listofprojects[1].projectmembers[0])
console.log(listofprojects[0].time.year)

let index = 1;

// let date = listofprojects[1].time.date + ' ' + listofprojects[1].time.month + ' ' + listofprojects[1].time.year
let date = listofprojects[index].time.date + ' ' + listofprojects[index].time.month + ' ' + listofprojects[index].time.year



console.log(date)
'10 Aug 2026'

let a = 'abc 3';
let b = 3;
let x = 'z'
let c = a + b + x;  // concatination / Addition / combination


console.log(c)
console.log(typeof c)

var studentname = 'ali';
var studentage = 20;
var studentgrade = 'A';
var studentactive = true;