//ques02
let name1 = "Bob";
let message = `Hello ${name1}, would you like to learn some python today?`;
console.log(message);     

//ques03
const name2 = 'mIsHal AsLam';
console.log(name2.toLowerCase());
console.log(name2.toUpperCase());

//ques04
console.log(" Paulo Coelho once said, “There is only one thing that makes a dream impossible to achieve: the fear of failure”")

//ques05
var famous_person = "Albert Einstein";
var message1 = `"${famous_person}" once said, A person who never made a mistake never tried anything new.`;
console.log(message1);

//ques06
let name_1 = " Mishal \n Aslam ";
let  name_2 = " MIshal \t Aslam"
let  name3 = " MIshal \0 Aslam"
console.log(name_1.trim());
console.log(name_2.trim());
console.log(name3.trim());

//ques07
console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16 / 2);  

//ques08
console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16 / 2);  

//ques09
let favNum = 17;
let message_11 = `My Favorite Number is "${favNum}".` 
console.log(message_11);

//ques10
//This program shows my favorite number
let favNum1 = 17;
let message11 = `My Favorite Number is "${favNum1}".` 
console.log(message11);

//this program show personal message.
let name = "shabnam";
let message2 = `Hello "${name}", would you like to learn some python today?`;
console.log(message2);   
//ques11
var names = ['kainat' , 'reshaa' , 'ayesha' , 'adam' , 'chaman' , 'charoo'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);   

//ques12
let names1 = ['kainat' , 'reshaa' , 'ayesha' , 'adam' , 'chaman' , 'charoo'];

let message0 = `Hello ${names1[0]}, How are you?`;
console.log(message0);

let message10 = `Hello ${names1[1]}, Would you like to have some tea?`;
console.log(message10);

let message20 = `Hello ${names1[2]}, how was your job going?`;
console.log(message20);

let message3 = `Hello ${names1[3]}, What is your favorite food?`;
console.log(message3);

let message4 = `Hello ${names1[4]}, Do you do exercises in the morning?`;
console.log(message4);

let message5 = `Hello ${names1[5]}, What time do you start university?`;
console.log(message5);
   
//ques13
let fav_trasportation = ["car", "bike", "aeroplane"];
console.log(`I go to work using ${fav_trasportation[0]}.` );
console.log(`I go to class using ${fav_trasportation[1]}.` );
console.log(`I travel overseas using  ${fav_trasportation[2]}.` );

//ques14
let guests = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
console.log( guests[0] + ", Please come to dinner.")
console.log( guests[1] + ", please come to dinner.")
console.log( guests[2] + ", please come to dinner.")
  
//ques15
let guests1 = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
console.log( guests1[0] + ", Please come to dinner.");
console.log( guests1[1] + ", please come to dinner.");
console.log( guests1[2] + ", please come to dinner.");

let name0 = guests1[1];
console.log("\nsorry, " + name0 + " cant make it to dinner.");

delete(guests1[1]);
guests1[1] = 'Harry potter'

let name9 = guests1[0];
console.log("\n" + guests1[0] + ", please come to dinner.");
console.log( guests1[1] + ", please come to dinner.");
console.log( guests1[2] + ", please come to dinner.");


//ques16
let guests2 = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
console.log( guests2[0] + ", Please come to dinner.");
console.log( guests2[1] + ", please come to dinner.");
console.log( guests2[2] + ", please come to dinner.");

let name_0 = guests2[1];
console.log("\nsorry, " + name_0 + " cant make it to dinner.");

delete(guests2[1]);
guests2[1] = ['Harry potter']

let name$1 = guests2[0];
console.log("\n" + guests2[0] + ", please come to dinner.");
console.log( guests2[1] + ", please come to dinner.");
console.log( guests2[2] + ", please come to dinner.");

//now we got a biiger table lets invite some more people

console.log("\n We got a bigger table");

guests2.unshift('hunzila imanat');

let index = 2;
let element = ('mumtanat janzaib');
guests2.splice(index, 0, element);

guests2.push('kainat shafiq');

console.log("\n" + guests[0] + ", please come to dinner.");
console.log( guests2[1] + ", please come to dinner.");
console.log( guests2[2] + ", please come to dinner.");
console.log( guests2[3] + ", please come to dinner.");
console.log( guests2[4] + ", please come to dinner.");
console.log( guests2[5] + ", please come to dinner.");

  
//ques17

let guests3 = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
console.log( guests3[0] + ", Please come to dinner.");
console.log( guests3[1] + ", please come to dinner.");
console.log( guests3[2] + ", please come to dinner.");

let name$2 = guests3[1];
console.log("\nsorry, " + name$2 + " cant make it to dinner.");

delete(guests3[1]);
guests3[1] = ['Harry potter']

let name$3 = guests3[0];
console.log("\n" + guests3[0] + ", please come to dinner.");
console.log( guests3[1] + ", please come to dinner.");
console.log( guests3[2] + ", please come to dinner.");

//now we got a biiger table lets invite some more people

console.log("\nWe got a bigger table");

guests3.unshift('hunzila imanat');

let index1 = 2;
let element1 = ('mumtanat janzaib');
guests3.splice(index1, 0, element1);

guests3.push('kainat shafiq');

console.log("\n" + guests3[0] + ", please come to dinner.");
console.log( guests3[1] + ", please come to dinner.");
console.log( guests3[2] + ", please come to dinner.");
console.log( guests3[3] + ", please come to dinner.");
console.log( guests3[4] + ", please come to dinner.");
console.log( guests3[5] + ", please come to dinner.");


// the table wont arrive on time

console.log("\nSorry, we can only invite two people to dinner \n");

let name$4 = guests3.pop();
console.log("Sorry, " + name$4 + " there's no room at the table.");

let name$5 = guests3.pop();
console.log("Sorry, " + name$5 + " there's no room at the table.");

let name$6 = guests3.pop();
console.log("Sorry, " + name$6 + " there's no room at the table.");

let name$7 = guests3.pop();
console.log("Sorry, " + name$7 + " there's no room at the table.");


// now only two pwoplw are left

let name$8 = guests3[0];
console.log(name$8 + ", please come to dinner");

let name$9 = guests3[1];
console.log(name$9 + ", please come to dinner");


//list is empty
delete(guests3[0])
delete(guests3[1])
console.log(guests3)     

//ques18
let locations = ['karakaram' , 'italy' , 'Eiffel Tower' ,  'Great Wall of China'];

console.log("original order:")
console.log(locations);

console.log("\nAlphabetical:")
console.log((locations.sort()))

console.log("\nOriginal order:");
console.log(locations);

console.log("\nReverse alphabetical:")
console.log(locations.reverse());

console.log("\nOriginal order:");
console.log(locations);

console.log("\nReversed:");
locations.reverse();
console.log(locations);

console.log("\nOriginal order:");
locations.reverse();
console.log(locations);

console.log("\nAlphabetical:");
locations.sort();
console.log(locations);

console.log("\neverse alphatical:");
// locations.sort(reverse=true)
console.log(locations)
  
//ques19
let guests4 = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
// console.log( guests4[0] + ", Please come to dinner.")
// console.log( guests4[1] + ", please come to dinner.")
// console.log( guests4[2] + ", please come to dinner.")
  
let no_guests4 = guests4.length;
console.log(`${no_guests4} people will come to my dinner party`);

//ques21
var array_items =["cat", "7.8","false","henry"];
console.log(array_items);


//ques22

let list = ["henry",23,true];
console.log("Intentional Error calling for del element at -4 which is out of range ");

//ques23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');


console.log("Is car != 'sabaru'? I predict true.");
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

console.log("num <! 8? i predict false.")
console.log(num <! 8);   



//ques24
let car1 = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car1 == 'subaru');


console.log("Is car == 'toyota'? I predict false.");
console.log(car1 == 'toyota');


console.log("Is car != 'sabaru'? I predict false.");
console.log(car1 != 'sabaru');


console.log("Is car != 'toyota'? I predict True.");
console.log(car1 != 'toyota');

console.log("Is car == 'sabaru'.toUpperCase()? I predict false.");
console.log(car1 == 'sabaru'.toUpperCase());

let num11 = 8;

console.log("num == 8? i predict true.")
console.log(num11 == 8);

console.log("num != 8? i predict false.")
console.log(num11 != 8);

console.log("num < 8? i predict false.")
console.log(num11 < 8);

console.log("num > 7? i predict true.")
console.log(num11 > 7);

console.log("num <= 8? i predict true.")
console.log(num11 <= 8);

console.log("num >= 9? i predict false.")
console.log(num11 >= 9);

//Tests for equality and inequality with strings

let num2 = 5;
num2 == 2;    // false
num2 == 5;    // true
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


//ques25
let alien_color = "green";
if (alien_color == 'green'){
    console.log("You just earned 5 points")
};

if (alien_color == 'red'){
    console.log("")
};

  
//ques26
let alien_color_1 = 'green';
if (alien_color_1 == 'green'){
    console.log("You just earned 5 points")
}
else{
    console.log("You just earned 10 points")
}


let alien_color1 = 'red';
if (alien_color1 == 'green'){
    console.log("You just earned 5 points")
}
else{
    console.log("You just earned 10 points")
}

   
//ques27
let alien_color_2 = 'red';
if (alien_color_2 == 'green'){
    console.log("You just earned 5 points")
}
else if (alien_color_2 == 'yello'){
    console.log("You ust earned 10 points")
}
else{
    console.log("You just earned 15 points")    
}   


//ques28


let age = 19;

if(age < 2){
    console.log("You're a baby!");
}
else if(age < 4){
    console.log("You're a toddler!");
}
else if(age < 13 ){
    console.log("You're a kid!");
}
else if(age < 20 ){
    console.log("You're a teenager!");
}
else if (age < 65 ){
    console.log("You're an adult!");
}
else{
    console.log("You're an elder!");
}   


//ques29

let favorite_fruits = ['mangoes','banana','apple'];

if (favorite_fruits['1']){
    console.log("You really like bananas!");
}

if (favorite_fruits['0']){
    console.log("You really like mangoes!");
}

if (favorite_fruits['2']){
    console.log("You really like apple!");
}

if (favorite_fruits['3']){
    console.log("You really like orange!");
}

if (favorite_fruits['4']){
    console.log("You really like peaches!");
}

    
//ques30

let usernames = ['eric', 'chaman', 'admin', 'chiraag', 'charo'];

for(let i = 0 ; i < usernames.length ; i++){
if (usernames[i] == 'admin'){
    console.log("Hello admin, would you like to see a status report?")
}

else{
    console.log(`Hello  ${usernames[i]} , thank you for logging in again!`)
}
}




//ques31
let usernames1 = [];


if (usernames1 === []) {
    if (usernames1 === 'admin') {
        console.log("Hello admin, would you like to see a status report?")
    }

     else {
         console.log(`Hello  ${usernames1} , thank you for logging in again!`)
     }
}

else {
    console.log("We need to find some users!");
}     


//ques32

let current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];

let new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];

const lowercased_newUser = new_users.map(name => name.toLowerCase());



for (let i = 0; i < current_users.length; i++) {
    if (current_users[i] === lowercased_newUser[i]) {
        console.log(lowercased_newUser[i] + ' already exist.')
    } else {
        console.log("Great, " + lowercased_newUser[i] + ' is still available.')
    }
}




//ques33

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    console.log(numbers[i] + "st");
  } else if (numbers[i] === 2) {
    console.log(numbers[i] + "nd");
  } else if (numbers[i] === 3) {
    console.log(numbers[i] + "rd");
  } else {
    console.log(numbers[i] + "th");
  }
}

//ques34

const pizzas = ["pepperoni", "vegetarian", "hawaiian"];

for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");


//ques35

const animals = ["dog", "cat", "bird"];

for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");



//ques36

function makeShirt(size, message) {
    console.log(`The shirt is a size ${size} and has the message "${message}" printed on it.`);
  }
  
  makeShirt("large", "I love JavaScript!");
  




//ques37

function makeShirt(size = "large", message = "I love JavaScript") {
    console.log(`The shirt is a size ${size} and has the message "${message}" printed on it.`);
  }
  
  makeShirt();
  makeShirt("medium");
  makeShirt("small", "I love Python!");
  
//ques38
function describeCity(city, country = "the United States") {
    console.log(`${city} is in ${country}.`);
  }
  
  describeCity("New York");
  describeCity("Karachi", "Pakistan");
  describeCity("Delhi", "India");
  


//ques39

function cityCountry(city, country) {
    return `${city}, ${country}`;
  }
  
  console.log(cityCountry("Lahore", "Pakistan"));
  console.log(cityCountry("New York", "the United States"));
  console.log(cityCountry("Delhi", "India"));
  
//ques40

function makeAlbum(artist, title, tracks) {
    const album = {
      artist: artist,
      title: title
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(makeAlbum("Michael Jackson", "Thriller"));
  console.log(makeAlbum("The Beatles", "Abbey Road", 17));
  console.log(makeAlbum("Pink Floyd", "The Dark Side of the Moon", 8));

  

//ques41


const magicians = ["Houdini", "David Copperfield", "David Blaine"];

function showMagicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

showMagicians(magicians);



//ques42

const magicians1= ["Houdini", "David Copperfield", "David Blaine"];

function showMagicians(magicians) {
  for (let magicians1 of magicians) {
    console.log(magicians1);
  }
}

function makeGreat(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians1[i] = "the Great " + magicians1[i];
  }
}

makeGreat(magicians1);
showMagicians(magicians1);

//ques43

const magicians3 = ["Houdini", "David Copperfield", "David Blaine"];

function showMagicians1(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians3) {
  const greatMagicians = [];
  for (let magician of magicians3) {
    greatMagicians.push("the Great " + magician);
  }
  return greatMagicians;
}

const originalMagicians = magicians3.slice();
const greatMagicians = makeGreat(magicians3);

console.log("Original magicians:");
showMagicians1(originalMagicians);

console.log("\nGreat magicians:");
showMagicians1(greatMagicians);



//ques44

function makeSandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(", ")}.`);
  }
  
  makeSandwich("lettuce", "tomato", "mayonnaise");
  makeSandwich("turkey", "bacon", "lettuce", "tomato");
  makeSandwich("peanut butter", "jelly");
  
//ques45


function createCar(manufacturer, model, ...options) {
    const car = {
      manufacturer: manufacturer,
      model: model
    };
    for (let i = 0; i < options.length; i += 2) {
      car[options[i]] = options[i + 1];
    }
    return car;
  }
  
  console.log(createCar("Toyota", "Camry", "color", "red", "optional feature", "sunroof"));
  


