import { morseToEnglish } from "./morseToEnglish";
import { morseCode } from "./data";

describe("morse code to text", () => {
  it("returns morse code as text", () => {
    const morse = ".... . .-.. .-.. ---";
    const expectedText = "HELLO";
    expect(morseToEnglish(morse, morseCode)).toBe(expectedText);
  });

  it("returns morse code as a sentence", () => {
    const morse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
    const expectedText = "HELLO WORLD";
    expect(morseToEnglish(morse, morseCode)).toBe(expectedText);
  });
});
