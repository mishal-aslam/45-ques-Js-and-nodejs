let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');


console.log("Is car != 'sabaru'? I predict false.");
console.log(car != 'sabaru');


console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car == 'sabaru'.toUpperCase()? I predict false.");
console.log(car == 'sabaru'.toUpperCase());

let num = 8;

console.log("num == 8? i predict true.")
console.log(num == 8);

console.log("num != 8? i predict false.")
console.log(num != 8);

console.log("num < 8? i predict false.")
console.log(num < 8);

console.log("num > 7? i predict true.")
console.log(num > 7);

console.log("num <= 8? i predict true.")
console.log(num <= 8);

console.log("num >= 9? i predict false.")
console.log(num >= 9);

//Tests for equality and inequality with strings

let num2 = 5;
num == 2;    // false
num == 5;    // true
console.log("num2 == 5? i predict true" );
console.log("num2 == 2? i predict false" );
console.log(num2 == 5);
console.log(num2 == 2);

// Tests using the lower case function

let item = '6';
if(item == item.toUpperCase()){
    console.log("item == 6? i predict true" );
    console.log(item == 6);
}
if (item == item.toLowerCase()){
    console.log("item == 7? i predict false" );
    console.log(item == 7);
}

// Test whether an item is in a array

let array = [1,2,3,4,5];
console.log("is 1 in array? I predict true");
console.log(1 in array);

// Test whether an item is not in a array

console.log("is 6 in array? I predict false");
console.log(6 in array);

// Tests using "and" and "or" operators

let number = 5;
if(number == 4 || 5){
    console.log("number == 4 || 5 I predict true");
    console.log(number);
}


let number2 = 10;
if(number2 = 3 && 10){
    console.log("number = 3 && 10 I predict true");
    console.log(number2);
}

