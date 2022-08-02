// Write your solution here!
const  cats = ["Milo", "Otis", "Garfield"];

// console.log(cats);

function destructivelyAppendCat(name) {
    return cats.push(name);
}

// console.log(destructivelyAppendCat(""Ralph"));

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

// console.log(destructivelyPrependCat("Bob"))

function destructivelyRemoveLastCat() {
    return cats.pop();
}

// console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// console.log(destructivelyRemoveFirstCat());

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// console.log(appendCat("Broom"))

function prependCat(name) {
    const prependedCats = [name, ...cats];
    return prependedCats;
}

// console.log(prependCat("Arnold"));

function removeLastCat() {
    const lastCatRemovedArray = cats.slice(0,cats.length-1);
    return lastCatRemovedArray;
}

// console.log(removeLastCat());

function removeFirstCat() {
    const firstCatRemovedArray = cats.slice(1);
    return firstCatRemovedArray;
}

// console.log(removeFirstCat());