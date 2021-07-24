console.log("script.js ...");

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "retail", start: 1971, end: 2008},
    {name: "Company three", category: "auto", start: 1921, end: 2010},
    {name: "Company four", category: "Finance", start: 1981, end: 1996},
    {name: "Company five", category: "Finance", start: 1981, end: 2004}
]

const ages = [10,20,30,22,81,12];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(item => {
//     console.log(item);
// })

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 20){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(age => age >= 20);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => company.category === 'retail');
// console.log(retailCompanies);

// const moreThenTen = companies.filter(company => (company.end - company.start) > 20);
// console.log(moreThenTen);

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const agesSquares = ages.map(age => Math.sqrt(age));
// console.log(agesSquares);

// const sortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
// console.log(sortedCompanies);

// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce((total, num) => total + num, 0);
// console.log(ageSum);

// const combined = ages
// .map(age => age * 2)
// .filter(age => age >= 40)
// .sort((a, b) => a - b)
// .reduce((a, b) => a+b, 100);

// console.log(combined);

// const showPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     console.log(posts);
// }
// showPosts();

let arr = ["Janishar", "Ali", "Answer"];

let displayArr = function(arr) {
    for(let x in arr){
        console.log(arr[x]);
    }
}
displayArr(arr);

class Person {
    constructor(firstname, lastname, age){
        console.log(arguments);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get firstname () { return this._firstname; }
    set firstname (value) { this._firstname = value; }
}

class Author extends Person{
    constructor(firstname,lastname,age,subject){
        super(firstname,lastname,age);
        this.subject = subject;
    }
    get subject() { return this._subject; }
    set subject(value) { this._subject = value; }
    writeArticle() {
        console.log(this.firstname, "just wrote an article on", this.subject);
    }
}
let mark = new Author("Mark", "Richards", 55, "Architecture");

mark.writeArticle();
