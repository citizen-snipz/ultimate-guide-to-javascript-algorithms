/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// for of method to map characters into an object
let text = "aaabbcbcb"
let charMap = {}

for (let char of text) {
  if (charMap.hasOwnProperty(char)) {
    charMap[char]++
  } else {
    charMap[char] = 1
  }
}

// for in method to compare value of char properties
function maxRecurringChar(text) {
  let charMap = {}
  let maxCharValue = 0
  let maxChar = ""

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

// es6 solution
function maxRecurringChar(text) {
  let charMap = {}
  let charArray = []
  let valuesArray = []
  let maxCharValue = 0

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  charArray = Object.keys(charMap) // returns charArray = ['a', 'b', 'c','d']
  valuesArray = Object.values(charMap) // returns valuesArray = [4,3,2,1]
  maxCharValue = Math.max(...valuesArray) //spreads valueArray so Math.max can find the highest number

  return charArray[valuesArray.indexOf(maxCharValue)] // searches valuesArray for the position of maxChar value so we can correspond the position of the maxCharValue to the position of its char in the charArray
}

module.exports = maxRecurringChar
