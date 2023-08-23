// console.log("Hello world");


// Number, string, boolean, undefined, null

// let name = "Dipanakar";
// name = "Priyanka";
// console.log(name);

// const firstName = "Sujata";
// // firstName = "Mousumi";
// console.log(firstName);

// var secondName = "Mandal";
// var secondName = "Mondal";
// console.log(secondName);



// let x = 10;
// x++;
// x--;
// x += 10;
// x -= 20;
// x += 10;
// x *= 2;
// x /= 10;
// console.log(x);

// String

// const name = "Dipankar";
// const job = "teacher";
// const age = 23;

// console.log(`My name is ${name},I'm a ${job} and my age is ${age}.`);


// let age = 36;
// age <= 26 ? console.log(`I'm ${age} year old`) : console.log(`I'm not ${age} year  old`);

// function myName() {
//     console.log("My name is Dipankar");
// }
// myName();
// myName();
// myName();


// function fruit(Apple, Orange) {
//     console.log(`The fruit is ${Apple} and ${Orange}`);
//     const juise = (`The fruit is ${Apple} and ${Orange} total`)
//     return (juise);
// }
// const fruitJuice = fruit(5, 10);
// console.log(fruitJuice);

// function sum(a, b, c) {
//     console.log(`Sum of three number is ${a + b + c}.`)
//     return (a + b + c);
// }
// sum(10, 20, 30);



// const myAge = function (age) {
//     // console.log(`My age is ${age}`);
//     return 2023 - age;
// }

// const age1 = myAge(1996);
// console.log(age1);


// const ageMy = myAge1 => 2023 - myAge1;
// const age21 = ageMy(1996);
// console.log(`The age is ${age21}`);

// const calcAge1 = function (birthyear) {
//     return 2023 - birthyear
// }
// const age2 = calcAge1(1996);
// console.log(age2);

// Arrow Function

// const yearRetiarment = (birthYear, name) => {
//     const age = 2023 - birthYear;
//     const retiarment = 65 - age;
//     // return retiarment;
//     return (`${name} and age ${retiarment}`);
// }
// console.log(yearRetiarment(1996, 'Dipankar'));


// function sum1(x) {
//     return x * 3;
// }
// function sum(a, b) {
//     const num1 = sum1(a);
//     const num2 = sum1(b);
//     return num1 + num2;
// }
// console.log(sum(10, 20));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 5, 8));


// let dolScore = calcAverage(44, 23, 71);
// let KoalScore = calcAverage(65, 54, 49);
// console.log(dolScore, KoalScore);


// const checkWinner = function (avgDolfhins, avgKoalas) {
//     if (avgDolfhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win 🏆 (${avgDolfhins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolfhins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolfhins})`);
//     }
//     else {
//         console.log("Not win...");
//     }
// }
// checkWinner(dolScore, KoalScore);

// dolScore = calcAverage(85, 54, 41);
// KoalScore = calcAverage(23, 34, 27);
// console.log(dolScore, KoalScore);
// checkWinner(dolScore, KoalScore);



// const friends = ["Ashis", "Ujjwal", "Bidhan", "Sumanta", "Priyanka"];
// console.log(friends);
// console.log(friends.toString());
// console.log(friends.unshift());
// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[friends.length - 1]);

// const friends1 = new Array("Ashis", "Bidhan", 'Om - Prakash');
// console.log(friends1);
// console.log(friends1[friends1.length - 1]);

// friends[0] = "Dipankar";
// console.log(friends);

// let name = "Priyanka";
// const myArray = [name, "Dipankar", 2023 - 1996, friends];
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[2]);
// console.log(myArray[myArray.length - 1]);

// Method
// const friends1 = ["Ashis", "Ujjwal", "Bidhan", "Sumanta", "Priyanka"];

// friends1.push("Amit");
// console.log(friends1);

// friends1.unshift("Mousumi");
// console.log(friends1);

// friends1.pop();
// console.log(friends1);

// friends1.shift();
// console.log(friends1);

// const position = friends1.indexOf("Priyanka");
// console.log(position);

// console.log(friends1.includes("Ashis"));
// console.log(friends1.includes("dev"));

// if (friends1.includes("Sumanta")) {
//     console.log("Sumanta calling");
// }
// console.log(friends1);
// const revArray = friends1.reverse();
// const newString = (revArray[0], revArray[1], revArray[2], revArray[3], revArray[4]);
// console.log(newString.split(" ' "));


// Object

// const dipankar = {
//     firstName: "Dipankar",
//     lastName: "Mandal",
//     age: 2023 - 1996,
//     job: "Student",
//     friends: ["Ashis", "Priyanka", "Ujjwal"]
// };

// console.log(dipankar);
// console.log(dipankar.firstName);
// console.log(dipankar['firstName']);

// const nameKey = "Name";
// console.log(dipankar["first" + nameKey]);
// console.log(dipankar["last" + nameKey]);


// const allData = prompt("Hello! You can choose you choices firstName,lastName,age,job and friends");

// console.log(dipankar[allData]);

// dipankar.location = "india";
// console.log(dipankar);

// console.log(`${dipankar.firstName} has ${dipankar.friends.length} friends,and his best friend is called ${dipankar.friends[0]}`);

// const dipankar = {
//     firstName: "Dipankar",
//     lastName: "Mandal",
//     age: 2023 - 1996,
//     job: "Student",
//     friends: ["Ashis", "Priyanka", "Ujjwal"],
//     isCycle: true,
//     calcAge: function () {
//         return this.age;
//     },
//     rideCycle: function () {
//         return (`${this.firstName} is known to ride ${this.isCycle ? "a" : "not"} cycle`);
//     }
// };
// console.log(dipankar.calcAge());
// console.log(dipankar.rideCycle());

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`I going to gyg ${rep} time`);
// }

const myArray = [
    "Dipankar",
    "Mandal",
    2023 - 1996,
    "Student",
    ["Ashis", "Priyanka", "Ujjwal"],
    true
];

const types = [];

for (let i = 0; i <= myArray.length - 1; i++) {
    console.log(i, myArray[i]);
    types.push(myArray[i]);
}
console.log(types);


const year = [1996, 1999, 2010, 2020, 2023];
const age = [];
for (let i = 0; i < year.length; i++) {
    age.push(2030 - year[i]);
}
console.log(age);


for (i = myArray.length - 1; i >= 0; i--) {
    console.log(i, myArray[i]);
}










































