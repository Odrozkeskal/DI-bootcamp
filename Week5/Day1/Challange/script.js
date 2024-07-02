// Challnage 1

// var sentence = "The movie is not that bad, I like it";
// var wordNot = sentence.indexOf("not");
// var wordBad = sentence.indexOf("bad");


// if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {

//         let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad +3);
//     console.log(result);
// } else {
    
//     console.log(sentence);
// }

//================================================================================================================================================
// Challnage 2

for (let i = 0; i <= 6; i++) {
  let stars = "*".repeat(i);
  console.log(stars);
}

for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}

