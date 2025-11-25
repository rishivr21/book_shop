const axios = require('axios');
const BASE = 'http://localhost:3000';

// Task 10 (async callback)
async function getAllBooks(callback) {
  try {
    const res = await axios.get(`${BASE}/books`);
    callback(null, res.data);
  } catch (e) {
    callback(e);
  }
}

// Task 11
function searchByISBN(isbn) {
  return axios.get(`${BASE}/books/isbn/${isbn}`).then(res => res.data);
}

// Task 12
function searchByAuthor(author) {
  return axios.get(`${BASE}/books/author/${author}`).then(res => res.data);
}

// Task 13
function searchByTitle(title) {
  return axios.get(`${BASE}/books/title/${title}`).then(res => res.data);
}

if (require.main === module) {
  getAllBooks((err, data) => {
    console.log("Task 10:", data);
  });

  searchByISBN("9780143127741").then(d => console.log("Task 11:", d));
  searchByAuthor("Yuval").then(d => console.log("Task 12:", d));
  searchByTitle("Sapiens").then(d => console.log("Task 13:", d));
}
