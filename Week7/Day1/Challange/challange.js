//Challange 1
function makeAllCaps(words){return new Promise((resolve, reject)=>{
    const capitalizedWords = [];
    for(let i = 0; i < words.length; i++){
        if(typeof words[i] == 'string'){
            capitalizedWords.push(words[i].toUpperCase())
        }
        else{
            reject("Some elements of array isn't string")
        }
        
    };
    resolve(capitalizedWords)
})};

function sortWords(bigWords){return new Promise((resolve,reject)=>{
    if(bigWords.length > 4){
        const sortedWords = bigWords.slice().sort();
        resolve(sortedWords);
    }
    else{
        reject("Array is less, or equal 4")
    };
})};

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
/**======================================================================================= */

//Challange 2

function toJs() {
    return new Promise((resolve, reject) => {
      const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`;
      
      try {
        const morseObj = JSON.parse(morse);
        
        if (Object.keys(morseObj).length === 0) {
          reject(new Error('Morse JavaScript object is empty'));
        } else {
          resolve(morseObj);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  
  toJs()
    .then(morseObj => {
      console.log('Morse JavaScript object:', morseObj);
      
    })
    .catch(error => {
      console.error('Error converting Morse JSON to JavaScript object:', error.message);
    
    });

    function toMorse(morseJS) {
        return new Promise((resolve, reject) => {
        
          const userInput = prompt('Enter a word or sentence:').toLowerCase();
          const morseTranslation = [];
          let error = false;
      
          for (let char of userInput) {
            if (morseJS[char]) {
              morseTranslation.push(morseJS[char]);
            } else {
              error = true;
              reject(new Error(`Character "${char}" doesn't exist in the Morse JavaScript object`));
              break;
            }
          }
      
          if (!error) {
            resolve(morseTranslation);
          }
        });
      }

      toMorse(morseJS)
  .then(morseTranslation => {
    console.log('Morse translation:', morseTranslation);
    
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n');
    document.getElementById('morseOutput').textContent = morseString;
  }
  

  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
      console.error('Error:', error.message);
    });