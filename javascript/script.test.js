// testing should have
// -if empty return from line 58 "No Input Provided";
// -if its a not allowed character//// or add all the characts if this is hard
// -it returns words
// -it returns morse code

const { translateToMorse, translateToText, noInput } = require("./script");

describe("morse code tests", () => {
  it("returns the translation of text to morse code", () => {
    it("translates a word to morse code", () => {
      const text = "hello";
      const expectedMorse = ".... . .-.. .-.. ---";
      expect(translateToMorse(text)).toBe(expectedMorse);
    });

    it("translates a sentence to morse code", () => {
      const text = "hello world";
      const expectedMorse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
      expect(translateToMorse(text)).toBe(expectedMorse);
    });

    it("Should throw an error if textarea empty", () => {
      expect(inputField === "").toThrow(noInput);
    });
  });

  describe("morse code to text", () => {
    it("returns morse code as text", () => {
      const morse = ".... . .-.. .-.. ---";
      const expectedText = "HELLO";
      expect(translateToText(morse)).toBe(expectedText);
    });

    it("returns morse code as a sentence", () => {
      const morse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
      const expectedText = "HELLO WORLD";
      expect(translateToText(morse)).toBe(expectedText);
    });
  });
});
