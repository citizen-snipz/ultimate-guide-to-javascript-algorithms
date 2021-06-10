/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//for loop method
function longestWord(text) {
  let wordArray = text.split(" ")
  let maxLength = 0
  let result = ""

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length
      result = wordArray[i]
    }
  }
  return result
}

//reduce method
function longestWord(text) {
  let result = text.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      return currentWord
    } else {
      return maxLengthWord
    }
  }, "")
  return result
}

//sort method
function longestWord(text) {
  let sortedArray = text.split(" ").sort((a, b) => b.length - a.length)
  return sortedArray[0]
}

module.exports = longestWord
