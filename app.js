const express = require("express");
const fs = require("fs");
const path = require("path");
const books = require("./books");   // <-- IMPORT books.js


const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book Shop API");
});

// Get all books (from JSON file)
app.get("/books", (req, res) => {
  const dataPath = path.join(__dirname, "data", "books.json");

  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading books data");
    res.send(JSON.parse(data));
  });
});

// Task 2: Get book by ISBN (from books.js)
app.get("/isbn/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
