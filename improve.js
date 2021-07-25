console.log('improve-------');
//good and bad writing code

const foo = {name: 'foo', age: 30};
const bar = {name: 'bar', age: 40};
const baz = {name: 'baz', age: 50};

// Bad Code
console.log(foo);
console.log(bar);
console.log(baz);

// good code
console.log({foo, bar, baz});
console.log("%c my Friends", "color: red");
console.table({foo, bar, baz});
console.log([foo, bar, baz]);

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibios',
    meal: 10,
    diet: 'berries'
}

//bad code
function feed(animal){
    return `Feed ${animal.name} ${animal.meal} Kilos of ${animal.diet}`;
}
//good code
function feed2({name, meal, diet}){
    return `Feed ${name} ${meal} Kilos of ${diet}`;
}

function feed3(animal){
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} Kilos of ${diet}`;
}
console.log(feed3(turtle));

const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

//bad code
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');

//good code
const {name, size, skills} = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`;

console.log(bio);

//advanced tag example
function horseAge(str, age){
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This is ${horse.age}`;
console.log(bio2);

const pikachu = {name: 'pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};
//Bad code
// pikachu['hp'] = stats.hp;
// pikachu['attack'] = stats.attack;
// pikachu['defense'] = stats.defense;
console.log(pikachu);
//or
const pikachu3 = Object.assign(pikachu, {hp: 45});
console.log('pikachu3',pikachu3);

const pikachu2 = Object.assign(pikachu,stats);
console.log('pikachu2',pikachu2);

//good code
delete pikachu.attack;
delete pikachu.hp;
delete pikachu.defense;
console.log('pikachu',pikachu);
const pikachu5 = {...pikachu, hp: 50}
console.log('pikachu5',pikachu5);
const pikachu4 = {...pikachu, ...stats};
console.log('pikachu4',pikachu4);


let pokemon = ['AAA','BBB','CCC'];
//bad code
pokemon.push('ddd');
pokemon.push('eee');
pokemon.push('fff');
console.log('pokemon', pokemon);
//good code
pokemon3 = [...pokemon, 'ggg', 'hhh'];
console.log('pokemon3', pokemon3);
const pokemon1 = ['ggg', ...pokemon,'hhh'];
console.log('pokemon1', pokemon1);
const pokemon2 = ['ggg','hhh',...pokemon];
console.log('pokemon2', pokemon2);

//bad code
const orders = [];
// const total = 0;
// const withTax = [];
// const highValue = [];
for(let i = 0; i < orders.length; i++){
    //reduce
    total += orders[i];
    //map
    withTax.push(orders[i] * 2);
    //filter
    if(orders[i] > 100){
        highValue.push(orders[i]);
    }
}
//good code
//reduce
const total = orders.reduce((acc,cur) => acc+cur, 0);
//map
const withTax = orders.map(v => v * 2);
//filter
const highValue = orders.filter(v => v > 100);

//async-await

const random = () => {
    return Promise.resolve(Math.random());
}
//bad code
const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;
    return random()
            .then(v => {
                first = v;
                return random();
            })
            .then(v => {
                second = v;
                return random();
            })
            .then(v => {
                third = v;
                return first + second + third;
            })
}
const promise = fetch('https://jsonplaceholder.typicode.com/todos');
promise
    .then(res => res.json())
    .then(user => {
        throw new Error('uh oh');
        return user;
    })
    .then(user => console.log(user.title))
    .catch(err => console.error(err))

//good code
const sumRandomAsyncNums2 = async() => {
    const first = await random();
    const second = await random();
    const third = await random();
    console.log(`Result ${first + second + third}`);
}

//basic
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pineapple',
        strawberry: 'strawberry'
    }
    return Promise.resolve(fruits[name])
}
getFruit('pineapple').then(console.log);

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    return [a, b];
}
makeSmoothie().then(console.log);

const makeSmoothie3 = async() => {
    try {
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b])
        return smoothie;
    } catch(err) {
        console.error(err);
    }
}
makeSmoothie3().then(console.log);

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
            .then(v => {
                a = v;
                return getFruit('strawberry')
            })
            .then(v => [a,v])
}
makeSmoothie2().then(console.log);