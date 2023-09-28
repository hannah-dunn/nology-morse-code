import { morseCode } from "./data";
import { englishToMorse } from "./englishToMorse";

it("returns the translation of text to morse code", () => {
  it("translates a word to morse code", () => {
    const text = "hello";
    const expectedMorse = ".... . .-.. .-.. ---";
    expect(englishToMorse(text)).toBe(expectedMorse);
  });

  it("translates a sentence to morse code", () => {
    const text = "hello world";
    const expectedMorse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
    expect(englishToMorse(text)).toBe(expectedMorse);
  });
});
