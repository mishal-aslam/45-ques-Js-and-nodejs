const magicians = ["Houdini", "David Copperfield", "David Blaine"];

function showMagicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians) {
  const greatMagicians = [];
  for (let magician of magicians) {
    greatMagicians.push("the Great " + magician);
  }
  return greatMagicians;
}

const originalMagicians = magicians.slice();
const greatMagicians = makeGreat(magicians);

console.log("Original magicians:");
showMagicians(originalMagicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);
