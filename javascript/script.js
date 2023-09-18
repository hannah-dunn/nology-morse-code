// const { join } = require("path");
// what is this??

// morse code dictionary
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

const reverseMorseCode = {};
for (const key in morseCode) {
  if (morseCode.hasOwnProperty(key)) {
    const value = morseCode[key];
    reverseMorseCode[value] = key;
  }
}

const inputField = document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");

const noInput = new Error("No Input Provided");
const cantRead = new Error("Cannot translate special characters(e.g !@#$%)");

translateButton.addEventListener("click", () => {
  const inputText = inputField.value.trim().toUpperCase();
  if (inputField === "") {
    throw noInput;
    // outputField.textContent = "No Input Provided";
    // return;
  }

  if (inputText.includes(".")) {
    const morseWords = inputText.split("/");
    const translatedWords = morseWords.map((morseWords) => {
      const morseChars = morseWords.split(" ");
      return morseChars
        .map((morseChar) => {
          return reverseMorseCode[morseChar] || morseChar;
        })
        .join("");
    });
    outputField.textContent = translatedWords.join(" ");
  } else {
    const words = inputText.split(" ");
    const translatedWords = words.map((word) => {
      const chars = word.split("");
      const morseChars = chars.map((char) => {
        return morseCode[char] || char;
      });
      return morseChars.join(" ");
    });
    outputField.textContent = translatedWords.join("/");
  }
});
