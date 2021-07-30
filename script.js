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


let person = {
    name: 'hareesh',
    age: 27,
}
function callPerson(person){
    const { name, age } = person;
    return `The ${name} was ${age} years old`;
}
console.log(callPerson(person));

//check equal to 100
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTo100(10,90));

//find File extension
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.js'));

const moveCharsForward = (str) => 
        str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
console.log(moveCharsForward('abcd'));

const checkEvenOdd = (num) => num % 2 === 0;
console.log(checkEvenOdd('a'))

const formatDate = (date = new Date()) => {
    let days = date.getDate() + 1;
    let months = date.getMonth() + 1;
    let years = date.getFullYear();
    if(days <= 9) {
        days = 0 + days;
    }
    if(months <= 9){
        months = '0'+months;
    }
    return `${days}/${months}/${years}`;
}
console.log(formatDate());

function checkNewString(str){
    let temp = str.slice(0,4);
    if(temp === "New!"){
        return str;
    }
    return `New! ${str}`;
}
const checkNewString2 = (str) => str.indexOf("New!") === 0 ? str : `New! ${str}`;
console.log(checkNewString('New! string'));
console.log(checkNewString2('New office'));

//FIZZBUZZ
console.log('FizzBuss Example');
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'

function fizzBuzz(input){
    if(isNaN(input)){
        return 'Not a number';
    }else if(input % 3 === 0 && input % 5 === 0){
        return 'FizzBuzz';
    }else if(input % 3 === 0){
        return 'Fizz';
    }else if(input % 5 === 0){
        return 'Buzz'
    }
    return input;
}
const output = fizzBuzz(15);
console.log(output);

//reverse a string
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

//reverse a number
function reverseNumber(num){
    return parseInt((num.toString()).split('').reverse().join(''));
}
console.log(reverseNumber(123));

//validate a palindrome
function isPalindrome(str){
    let tempStr = str.split('').reverse().join('');
    return str === tempStr;
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('race'));

//capitalise letter
function capitaliseLetter(str){
    return str.split(' ')
                .map(letter => letter[0].toUpperCase() + letter.slice(1))
                .join(' ');
}
console.log(capitaliseLetter('the simple sentance...'));

//Max character
function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    str.split('').forEach(char => {
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return {maxChar,maxNum};
}
console.log(maxCharacter('there'));

//longest world
function longestWord(sent){
    let wordsArr = [];
    let max = 0;
    let maxWord = '';
    // let arr = sent.split(' ');
    let arr = sent.toLowerCase().match(/[a-z0-9]+/g); //it removes camma's
    arr.forEach(word => {
        if(word.length > max){
            max = word.length;
            maxWord = word;
        }
    })
    arr.filter(word => {
        if(word.length === max){
            wordsArr.push(word);
        }
    })
    return { sent, ...wordsArr, max };
}
console.log(longestWord('hi hello there, i am hareesh !!!'));

function longestWord2(sen){
    //create filtered array
    const wordsArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    //sort by length
    const sorted = wordsArr.sort((a,b) => b.length - a.length);
    //If multiple words
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);
    console.log(longestWordArr);
}
console.log(longestWord2('this is second longest word array in this example'));
