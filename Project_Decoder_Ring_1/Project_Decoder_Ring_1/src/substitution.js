// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if(alphabet === undefined) return false;
    if(alphabet.length !== 26) return false;
    for (letter of alphabet){ //unique letter's index will always equal last index
      if(alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
    }
    let alphString = "abcdefghijklmnopqrstuvwxyz";
    let lowerCase = input.toLowerCase();
    let finalMessage = [];
    
    if(encode) {
    for(let i = 0; i < lowerCase.length; i++) {
      if(lowerCase[i] === " ") finalMessage.push(" ");
      else {
        const index = alphString.indexOf(lowerCase[i]);
        finalMessage.push(alphabet[index]);
      }
    }
    return finalMessage.join('')
    }
    
    if(!encode) {
      for(let i = 0; i < lowerCase.length; i++) {
      if(lowerCase[i] === " ") finalMessage.push(" ");
      else {
        const index = alphabet.indexOf(lowerCase[i]);
        finalMessage.push(alphString[index]);
      }
    }
    return finalMessage.join('')
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
