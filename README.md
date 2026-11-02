# Library Management System REST API

**Student Name:** Aditya Kumar Shah  
**Roll Number:** 2500320100089  
**Branch and Section:** CSE - 11 
**Project Title:** Library Management System

## Technologies
- Node.js
- Express.js
- In-memory JavaScript array (no database or file storage)

## Installation and Run
```bash
npm install
npm start
```

Server runs at **http://localhost:3000** (or the port specified in `PORT`).

## Sample in-memory book
```json
{
  "id": 101,
  "title": "Java Programming",
  "author": "Herbert Schildt",
  "category": "Programming",
  "quantity": 5,
  "available": 5
}
```

## API Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/books` | Add a book |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a book by ID |
| PUT | `/api/books/:id` | Update book details (ID cannot change) |
| DELETE | `/api/books/:id` | Delete a book only when no copies are issued |
| GET | `/api/books/search?title=java` | Case-insensitive title search |
| POST | `/api/books/:id/issue` | Issue one copy |
| POST | `/api/books/:id/return` | Return one issued copy |

## Example POST body (`/api/books`)
```json
{
  "id": 102,
  "title": "C++ Programming",
  "author": "Bjarne Stroustrup",
  "category": "Programming",
  "quantity": 3,
  "available": 3
}
```

## Notes
- Data exists only in memory and resets when the server restarts.
- `node_modules/` should not be uploaded to GitHub.
