const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
    { id: 1, title: 'Book 1', author: 'Author A', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author B', publishedYear: 2021 },
    { id: 3, title: 'Book 3', author: 'Author C', publishedYear: 2019 },
];

app.get('/api/books', (req, res) => {
    res.json(books);
});
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
});

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});