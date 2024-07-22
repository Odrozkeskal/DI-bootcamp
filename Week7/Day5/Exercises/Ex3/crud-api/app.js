const express = require("express");
const app = express();
const PORT = 5000;
const { fetchPosts } = require("./data/data-service.js")
app.use(express.json());
app.get('/api/posts', (req, res) => {
    fetchPosts()
        .then(data => {
            res.json(data); 
            console.log('data has been successfully extracted and sent in response:', data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            res.status(500).send('Fetch error'); 
        });
});
app.listen(PORT, ()=> {
    console.log(`Server run into: http/localhost:${PORT}`);
});

