import { morseCode } from "./data";
import { morseToEnglish } from "./morseToEnglish";
import { englishToMorse } from "./englishToMorse";

const reverseMorseCode = () => {
  for (const key in morseCode) {
    if (morseCode.hasOwnProperty(key)) {
      const value = morseCode[key];
      reverseMorseCode[value] = key;
    }
  }
};

const inputField = document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");

const noInput = new Error("No Input Provided");
const cantRead = new Error("Cannot translate special characters(e.g !@#$%)");

const validateString = (string) => {
  if (string === "") {
    throw noInput;
  }
  if (!/^[a-zA-Z]*$/.test(string)) {
    throw cantRead;
  }
  return string;
};

translateButton.addEventListener("click", () => {
  try {
    const str = validateInput(inputText);
    if (isMorse(str)) {
      const translation = morseToEnglish(str, obj);
      outputField.textContent = translation;
    } else {
      const translation = englishToMorse(str, reversedObj);
      outputField.textContent = translation;
    }
  } catch (e) {
    // add the error to the dom
  }
});

const isMorse = (string) => string.includes(".");
outputField.textContent = translatedWords.join(" ");
