export const englishToMorse = (inputText, morseCode) => {
  const words = inputText.split(" ");
  const translatedWords = words.map((word) => {
    const chars = word.split("");
    const morseChars = chars.map((char) => {
      return morseCode[char] || char;
    });
    return morseChars.join(" ");
  });

  return translatedWords.join(" ");
};
