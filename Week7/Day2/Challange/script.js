document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector('form');
    const input = document.getElementById('search-input');
    const button = document.getElementById('submit');
    const gifContainer = document.getElementById('gif-container');
    

    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const searchTerm = input.value.trim();
         fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${apiKey}`)
         .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error(`Server response error: ${response.status} ${response.statusText}` )
            }
         })
         .then(data => {

            
             const gifURL = data.data.images.fixed_height.url;
             const gifTitle = data.data.title;
             const gifElement = document.createElement('img');
             gifElement.src = gifURL;
             gifElement.alt = gifTitle
            

            gifContainer.innerHTML = '';

            gifContainer.appendChild(gifElement);

            const category = document.createElement('p');
            category.textContent = `Random gif from category: ${searchTerm}`;
            gifContainer.appendChild(category);

         })
         .catch(error => {
            console.error('Fetch error', error)
         });

         
    });
    
});