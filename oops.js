console.log("Object Oriented Programmings (OOPS)...!!!");

//factory functions
function createElf(name, weapon){
    return {
        name: name,
        weapon: weapon,
        attack(){
            return `Attack with ${weapon}`
        }
    }
}
const peter = createElf('Peter','stones');
console.log('peter: ', peter.attack());

//Object.create()
const elfFunction = {
    attack(){
        return `Attack with ${this.weapon}`;
    }
}
function createElf2(name, weapon){
    let newElf = Object.create(elfFunction);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}
const peter2 = createElf2('peter 2', 'stones');
console.log('peter2', peter2.attack());
const peter3 = createElf2('peter 3', 'fire');
console.log('peter3', peter3.attack());

//Constructor Functions
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function(){
    return 'Attack with ' + this.weapon;
}
const peter4 = new Elf('Peter 4','Fire 4');
console.log('peter4:', peter4.attack());