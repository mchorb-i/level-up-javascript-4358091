// Write your code here
function getNumberOfCombinations(string) {
  const numOfChars = string.length;

  function factorial(num) {
    if (num === 1) {
      return 1;
    }
    return num * factorial (num - 1);
  }

  console.log(factorial(numOfChars));

}

getNumberOfCombinations('scrabble');