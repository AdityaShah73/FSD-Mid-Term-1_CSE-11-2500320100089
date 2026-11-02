
const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Java", author: "James",
    quantity: 5, available: 5 }
];

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// POST add book
app.post('/api/books', (req, res) => {
  books.push(req.body);
  res.status(201).json(req.body);
});

// PUT update book
app.put('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");

  Object.assign(book, req.body);
  res.json(book);
});

// DELETE book
app.delete('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");

  books = books.filter(b => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

// Search book
app.get('/api/books/search/:title', (req, res) => {
  const result = books.filter(b =>
    b.title.toLowerCase().includes(req.params.title.toLowerCase())
  );
  res.json(result);
});

// Issue book
app.post('/api/books/:id/issue', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) return res.status(404).send("Book not found");
  if (book.available <= 0)
    return res.status(400).send("Book not available");

  book.available--;
  res.json(book);
});

// Return book
app.post('/api/books/:id/return', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) return res.status(404).send("Book not found");
  if (book.available >= book.quantity)
    return res.status(400).send("All books already returned");

  book.available++;
  res.json(book);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
