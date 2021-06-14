const string = "baby"

function pigLatin(string) {
    if (string.startsWith(/a-e/gi) ) return string + "way"
    if (string)
  let sliced = string.slice(1)
  return sliced + string[0] + "ay"
}

//imperative method
function pigLatin(str) {
    //covert string to lower case
    str = str.toLowerCase()
    //initialize array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //initialize vowel index to 0
    let vowelIndex = 0

    if (vowels.includes(str[0])) {
        //if first letter is a vowel
        return str + "way"
    } else {
        //if the first letter isn't a vowel
        for (let char of str) {
            //loop through until the first vowel is found
            if (vowels.includes(char)) {
                //store the index at which the first vowel exists
                vowelIndex = str.indexOf(char)
                break;
            }
        }
        //compose final string
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
    }

}

//declarative method
function pigLatin(str) {
    return str.replace(/^([aeiouy])(._)/, '$1$2way').replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}