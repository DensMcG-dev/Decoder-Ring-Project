// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    let lowerCase = input.toLowerCase();
    const letterArray = Array.from(lowerCase);
    const asciiValueArray =[];
    const finalArray = [];
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    for(let i = 0; i < letterArray.length; i++) {
      if(letterArray[i] === " ") {
        asciiValueArray.push(32);
      }
      else {
        let ascii = letterArray[i].charCodeAt();
        asciiValueArray.push(ascii);
      }
  }
    

    if(!encode) {shift = -shift};

     for(let j = 0; j < asciiValueArray.length; j++) {
      if(asciiValueArray[j] !== 32 && asciiValueArray[j] > 96 && asciiValueArray[j] < 123) {
        if(asciiValueArray[j] + shift < 123 && asciiValueArray[j] + shift > 96) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] + shift);
          finalArray.push(fromCharCode);
        }
        else if(asciiValueArray[j] + shift > 122) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] - 26 + shift);
          finalArray.push(fromCharCode);
        }
        else if(asciiValueArray[j] + shift < 97) {
          const fromCharCode = String.fromCharCode(asciiValueArray[j] + 26 + shift);
          finalArray.push(fromCharCode);
        }
      }
      else if(asciiValueArray[j] === 32) {finalArray.push(" ")}
      else if(asciiValueArray[j] < 97) {
         finalArray.push(String.fromCharCode(asciiValueArray[j]))
       }
      else if(asciiValueArray[j] > 122) {
        finalArray.push(String.fromCharCode(asciiValueArray[j]))
       }
    }

return finalArray.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
