export const morseToEnglish = (inputText, dictionary) => {
  const morseWords = inputText.split("/");
  const translatedWords = morseWords.map((morseWords) => {
    const morseChars = morseWords.split(" ");
    return morseChars
      .map((morseChar) => {
        return dictionary[morseChar] || morseChar;
      })
      .join("");
  });

  return translatedWords.join(" ");
};
