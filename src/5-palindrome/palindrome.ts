export const isPalindrome = (str: string): boolean => {
  const cleanedWord = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
};
