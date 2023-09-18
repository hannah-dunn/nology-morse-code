// testing should have
// -if empty return from line 58 "No Input Provided";
// -if its a not allowed character//// or add all the characts if this is hard
// -it returns words
// -it returns morse code

//SHOULD ADD
//info on how translates eg the spaces in the morse code are actually / slashes

const { translateToMorse, translateToText } = require("./script");

describe("Morse Code Translation", () => {
  it("returns the translation of text to morse code", () => {
    it("Translates a word to Morse code", () => {
      const text = "HELLO";
      const expectedMorse = ".... . .-.. .-.. ---";
      expect(translateToMorse(text)).toBe(expectedMorse);
    });

    it("Translates a sentence to Morse code", () => {
      const text = "HELLO WORLD";
      const expectedMorse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
      expect(translateToMorse(text)).toBe(expectedMorse);
    });

    // Add more tests for different cases
  });

  describe("Morse Code to Text", () => {
    it("Translates Morse code to a word", () => {
      const morse = ".... . .-.. .-.. ---";
      const expectedText = "HELLO";
      expect(translateToText(morse)).toBe(expectedText);
    });

    it("Translates Morse code to a sentence", () => {
      const morse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
      const expectedText = "HELLO WORLD";
      expect(translateToText(morse)).toBe(expectedText);
    });

    // Add more tests for different cases
  });
});
