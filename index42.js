const magicians = ["Houdini", "David Copperfield", "David Blaine"];

function showMagicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

makeGreat(magicians);
showMagicians(magicians);
