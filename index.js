const superheroes = require("superheroes");
const supervillains = require("supervillains");

const mySuperHeroName = superheroes.random();
const mySuperVillain = supervillains.random();

// supervillains.all;

console.log('mySuperHeroName :',mySuperHeroName);
console.log('mySuperVillain :',mySuperVillain);
// console.log(supervillains.all)