let guests = ['Charoo Chaman' , 'Tanzila Iman' , 'Chaman Arah']; 
console.log( guests[0] + ", Please come to dinner.");
console.log( guests[1] + ", please come to dinner.");
console.log( guests[2] + ", please come to dinner.");

let name1 = guests[1];
console.log("\nsorry, " + name1 + " cant make it to dinner.");

delete(guests[1]);
guests[1] = ['Harry potter']

let name2 = guests[0];
console.log("\n" + guests[0] + ", please come to dinner.");
console.log( guests[1] + ", please come to dinner.");
console.log( guests[2] + ", please come to dinner.");

//now we got a biiger table lets invite some more people

console.log("\nWe got a bigger table");

guests.unshift('hunzila imanat');

let index = 2;
let element = ('mumtanat janzaib');
guests.splice(index, 0, element);

guests.push('kainat shafiq');

console.log("\n" + guests[0] + ", please come to dinner.");
console.log( guests[1] + ", please come to dinner.");
console.log( guests[2] + ", please come to dinner.");
console.log( guests[3] + ", please come to dinner.");
console.log( guests[4] + ", please come to dinner.");
console.log( guests[5] + ", please come to dinner.");


// the table wont arrive on time

console.log("\nSorry, we can only invite two people to dinner \n");

let name3 = guests.pop();
console.log("Sorry, " + name3 + " there's no room at the table.");

let name4 = guests.pop();
console.log("Sorry, " + name4 + " there's no room at the table.");

let name5 = guests.pop();
console.log("Sorry, " + name5 + " there's no room at the table.");

let name6 = guests.pop();
console.log("Sorry, " + name6 + " there's no room at the table.");


// now only two pwoplw are left

let name7 = guests[0];
console.log(name7 + ", please come to dinner");

let name8 = guests[1];
console.log(name8 + ", please come to dinner");


//list is empty
delete(guests[0])
delete(guests[1])
console.log(guests)   