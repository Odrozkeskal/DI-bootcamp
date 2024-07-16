//EX1

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//  .then(response => {
//     if(response.ok){
//       return response.json();
//     }
//     else 
//     {
//         throw new Error("Server response was not ok")
//     }
//  })
//  .then(data => {
//     data.data.forEach(element => {
//         console.log(`type ${element.type}, id: ${element.id}, url: ${element.url}, slug: ${element.slug}`);
//     });
//  })
//  .catch(error => {
//     console.error('Fetch error', error)
//  })
/**====================================================================================================================================== */
//EX2

// const searchQuery = 'sun';
// const limit = 10;
// const offset = 2;

// fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
// .then(response => {
//     if(response.ok){
//         return response.json();
//     }
//     else{

//         throw new Error("Server response was not ok")
//     }
// })
// .then(data => {
//     data.data.forEach(gif => {
//         console.log("gif about'sun': ", gif);
//     });
    
    
// })
// .catch(error => {
//     console.error('Fetch error', error)
// });

/**====================================================================================================================================== */
//EX3

async function getStarShip(){
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    .catch(error =>{
        console.error('Error featchin starship data', error);
        throw error;
    })
    if(!response.ok) {
        const errorMessage = `HTTP error! Status: ${response.status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
    const data = await response.json()
    .catch(error => {
        console.error('Error parsing JSON:', error);
        throw error;
    })
    console.log(data.result);
}
getStarShip();

/**====================================================================================================================================== */
//EX4

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// output wouldbe "calling", and after 2 seconds "resolved"
/**=============================================================================================================================== */

//drafts

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//  .then(response => {
//     if(response.ok){
//       return response.json();
//     }
//     else 
//     {
//         throw new Error("Server response was not ok")
//     }
//  })
//  .then(data => {
//     data.data.forEach(element => {
//         console.log(`type ${element.type}, id: ${element.id}, url: ${element.url}, slug: ${element.slug}`);
//     });
//  })
//  .catch(error => {
//     console.error('Fetch error', error)
//  })

// const searchQuery = 'sun';
// const limit = 10;
// const offset = 2;

// fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
// .then(response => {
//     if(response.ok){
//         return response.json();
//     }
//     else{

//         throw new Error("Server response was not ok")
//     }
// })
// .then(data => {
//     data.data.forEach(gif => {
//         console.log("gif about'sun': ", gif);
//     });
    
    
// })
// .catch(error => {
//     console.error('Fetch error', error)
// });

// async function getStarShip(){
//     const response = await fetch("https://www.swapi.tech/api/starships/9/")
//     .catch(error =>{
//         console.error('Error featchin starship data', error);
//         throw error;
//     })
//     if(!response.ok) {
//         const errorMessage = `HTTP error! Status: ${response.status}`;
//         console.error(errorMessage);
//         throw new Error(errorMessage);
//     }
//     const data = await response.json()
//     .catch(error => {
//         console.error('Error parsing JSON:', error);
//         throw error;
//     })
//     console.log(data.result);
// }
// getStarShip();