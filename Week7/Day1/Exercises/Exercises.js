//EX1
// function compareToTen(num){return new Promise((resolve, reject) => {
//     if(num <= 10){
//         resolve("Number less or equal 10")
//     }
//     else{
//         reject("Number more than 10")
//     }
// });
// }

// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error));

// compareToTen(8)
// .then(result => console.log(result))
// .catch(error => console.log(error));
/**============================================================================================================================================== */
//EX2

// let successStr = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(console.log("Success"));
//     },4000)
// })
/**============================================================================================================================================== */
//EX3

// let promiseVal = new Promise(resolve => resolve(3));
// let error = "Boo";
// promiseVal.then(result => {
//     console.log("value is: ", result);
// }).catch(error => {
//     console.log("Error");
// });


// let promiseErr = Promise.reject(error);
// promiseErr.then(result =>{
//     console.log("Good");
// }).catch(error => {
//     console.log(error);
// });
/**============================================================================================================================================== */
//EX1 GOLD

function promAll(promises) {
    return Promise.all(promises)
      .then(results => {
        console.log(results);
        return results;
      })
      .catch(error => {
        console.error('Error in promises', error);
        throw error;
      });
  }
  
  const promise1 = Promise.resolve(3); 
  const promise2 = Promise.resolve(42); 
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
  });
  
  promAll([promise1, promise2, promise3])
    .then(results => {
      console.log("Resolved values:", results);
    })
    .catch(error => {
      console.error("Outer error handler:", error);
    });

    //Promise.all it's an utility for manage many asynchronous operations. I used .then(), which will activate only when all promises would've
    // succsesfully resoved. So " results" contains an array of resoved values of each promise. Then I print array in console with 
    //console.log(results); return results passes these resolved values forward in the promise chain. 
    // I used .catch() method, which will activate if some of promise would rejected. "error" contains a reason of rejection, then I used
    // console.error to send the error message, throw errorre throws the error to propagate it further down the promise chain.
    //The function promAll are calling with array, with all promises as elements. .then(result)... result is array with all resolved promises
    // and if even one of them would've reject, then .catch() function would activate, and send an error message.

    /**============================================================================================================================================== */
//EX2 GOLD
function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });

    //The output would [2,4,6]. because promise is resolve, and .then(result) function shows resplved promise, and resolve
    // have parameter (x*2) in argument, that's why all elements of arr are multiplice 2