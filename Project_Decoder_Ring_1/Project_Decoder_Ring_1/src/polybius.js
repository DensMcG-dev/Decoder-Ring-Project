// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
        const alphKeys = {a: '11', b: '21', c: '31', d: '41', e: '51',
    f: '12', g: '22', h: '32', i: '42', j: '42', k: '52',
    l: '13', m: '23', n: '33', o: '43', p: '53',
    q: '14', r: '24', s: '34', t: '44', u: '54',
    v: '15', w: '25', x: '35', y: '45', z: '55'};
    //constructs a base array of number values keyed to letters

    const numKeys = {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
    12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'};
    //constructs a base array of letters keyed to number values

    const returnArray = [];
    let tempArray;
    let lower = input.toLowerCase();
    const encodeArray = lower.split('');
    const decArrayInp = input.split(' ');//if decoding, splits decode input at any spaces for ease of input evaluation
    
    

    if(encode) {
      for(let i = 0; i < encodeArray.length; i++) {
        let key = encodeArray[i];
        if(key === " ") returnArray.push(" ");
        else {returnArray.push(alphKeys[key])};
      }
      return returnArray.join('');
    }

    if(!encode) {
      if (input.replace(/\s/g, "").length % 2 !== 0) return false;//checks if decode input is an odd number of characters, as input must be even number of chars to decode properly 
      for(let i = 0; i < decArrayInp.length; i++) {
        let decoding = decArrayInp[i];
        tempArray = [];
        for(let j = 0; j < decoding.length; j += 2) {
          if(decArrayInp.length > 1){
            let firstChar = decoding[j];
            let secondChar = decoding[j+1];
            let combo = `${firstChar}${secondChar}`
            tempArray.push(numKeys[combo]);
          }
          else {
            let firstChar = decoding[j];
            let secondChar = decoding[j+1];
            let combo = `${firstChar}${secondChar}`
            returnArray.push(numKeys[combo]);
          }
          }//checks if decode input was split, and proceeds differently for split or un-split inputs
          returnArray.push(tempArray.join(''));
        }
        if(decArrayInp.length > 1) {
          return returnArray.join(' ');
        }
        else {return returnArray.join('')} 
      }//checks if decode input was split, and returns differently for split or un-split inputs
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
