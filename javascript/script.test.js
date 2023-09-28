import { noInput, cantRead } from "./script";

describe("morse code tests", () => {
  it("Should throw an error if textarea empty", () => {
    expect(inputField === "").toThrow(noInput);
  });

  it("should throw an error if special characters are used", () => {
    expect(inputField === "/W/").toThrow(cantRead);
  });
});
