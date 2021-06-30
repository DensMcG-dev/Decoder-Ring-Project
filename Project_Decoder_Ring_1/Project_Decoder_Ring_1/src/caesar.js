// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    let lowerCase = input.toLowerCase(); //changes all letters to lowercase, per directions to ignore capital letters
    const letterArray = Array.from(lowerCase);
    const asciiValueArray =[];
    const finalArray = [];
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //checks if shift input is within correct parameters
    
    for(let i = 0; i < letterArray.length; i++) {
      if(letterArray[i] === " ") {
        asciiValueArray.push(32);
      }
      else {
        let ascii = letterArray[i].charCodeAt();
        asciiValueArray.push(ascii);
      }
  }
    //constructs array of ASCII value codes for each characters

    if(!encode) {shift = -shift};
    //checks if decoding, and if so changes shift value

     for(let j = 0; j < asciiValueArray.length; j++) {
      if(asciiValueArray[j] !== 32 && asciiValueArray[j] > 96 && asciiValueArray[j] < 123) {
        if(asciiValueArray[j] + shift < 123 && asciiValueArray[j] + shift > 96) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] + shift);
          finalArray.push(fromCharCode);
        }// checks if a shift will remain within the alphabet properly, and if so shifts
        else if(asciiValueArray[j] + shift > 122) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] - 26 + shift);
          finalArray.push(fromCharCode);
        }//checks if a shift will move above 'z', and if so wraps around to 'a'
        else if(asciiValueArray[j] + shift < 97) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] + 26 + shift);
          finalArray.push(fromCharCode);
        }//checks if a shift will move below 'a', and if so wraps around to 'z'
      }
      else if(asciiValueArray[j] === 32) {finalArray.push(" ")}
      else if(asciiValueArray[j] < 97) {
         finalArray.push(String.fromCharCode(asciiValueArray[j]))
       }
      else if(asciiValueArray[j] > 122) {
        finalArray.push(String.fromCharCode(asciiValueArray[j]))
       }//checks if a given character to shift is not a standard alphabet letter, and if so simply returns the character
    }

return finalArray.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
