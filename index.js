const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let box1El = document.querySelector(".generatedPass1");
let box2El = document.querySelector(".generatedPass2");
let randomNum1 = "";
let randomNum2 = "";
let s = 0;

function generator() {
  for (let i = 0; i < 15; i++) {
    randomNum1 += characters[Math.floor(Math.random() * characters.length)];
    randomNum2 += characters[Math.floor(Math.random() * characters.length)];
  }
  if (s === 0) {
    box1El.textContent = randomNum1;
    box2El.textContent = randomNum2;
  } else {
    randomNum1 = "";
    randomNum2 = "";
    for (let i = 0; i < 15; i++) {
      randomNum1 += characters[Math.floor(Math.random() * characters.length)];
      randomNum2 += characters[Math.floor(Math.random() * characters.length)];
    }
    box1El.textContent = randomNum1;
    box2El.textContent = randomNum2;
  }

  s++;
}
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("generatedPass1");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
