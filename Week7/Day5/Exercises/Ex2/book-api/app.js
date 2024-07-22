const express = require('express');
const app = express();
const PORT = 5000;

let data = [
    {id:1, title:"That's what Zarathustra said", author: "Friedrich Nietzsche", publishedYear: "1911"},
    {id:2, title:"The first scientific history of the Patriotic War of 1812", author: "Евгений Понасенков", publishedYear: "2015"},
    {id:3, title:"Poker with the shark", author: "Дарья Донцова", publishedYear: "2002"}
];
app.use(express.json());

app.get('/api/books', (req, res)=> {
    res.json(data);
})
app.get('/api/books/:bookId', (req, res)=> {
    const bookId = parseInt(req.params.bookId);
    const book = data.find(book => book.id === bookId);
    if(book) {
        res.json(book);
        res.status(200).send('OK');
    }
    else{
        res.status(400).send('Book was not found');
    }
});

app.post('/api/books', (req,res)=> {
     const {title, author, publishedYear} = req.body;
    if (!title || !author || !publishedYear){
        return res.status(400).send('Not enough data for creating the post')
    }
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; //unique id generating

    const newBook = {
         id: newId,
         title,
         author,
         publishedYear
        }
    data.push(newBook);
    res.status(201).json(newBook);
});


app.listen(PORT, () => {
    console.log(`Server runs on: http://localhost:${PORT}`);
});