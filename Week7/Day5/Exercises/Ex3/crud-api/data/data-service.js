const axios = require("axios");

function fetchPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log('Error fetching posts:', error);
            throw error; 
        });
}

module.exports = {
    fetchPosts
};