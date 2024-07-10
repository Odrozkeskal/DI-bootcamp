const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }
  const jsonMarioGame = JSON.stringify(marioGame);
console.log(jsonMarioGame);
debugger;

//What happens to the nested objects ?
//Each nested object becomes a nested JSON object.The properties and values within each nested object are preserved as key-value pairs in 
//the JSON format.

//In Scope Window, after debugging:
//marioGame
// : 
// characters
// : 
// bowser
// : 
// {description: 'Big and green, Hates princesses.', height: 16, weight: 6, speed: 4}
// mario
// : 
// {description: 'Small and jumpy. Likes princesses.', height: 10, weight: 3, speed: 12}
// princessPeach
// : 
// {description: 'Beautiful princess.', height: 12, weight: 2, speed: 2}
// [[Prototype]]
// : 
// Object
// detail
// : 
// "An amazing game!"