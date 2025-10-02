# MongoDB Data Layer Fundamentals and Advanced Techniques

## Overview

This project demonstrates MongoDB fundamentals and advanced techniques using both Node.js and MongoDB Shell scripts. It covers CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Project Structure

- `insert_books.js` — Node.js script to populate the `plp_bookstore` database with sample book data.
- `queries.js` — MongoDB Shell script containing queries and operations.
- `examples/` — Example scripts for MongoDB connection and shell usage.
- `SETUP_INSTRUCTIONS.md` — Step-by-step setup guide.
- `Week1-Assignment.md` — Assignment instructions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) (or MongoDB Atlas)
- [MongoDB Shell (mongosh)](https://www.mongodb.com/docs/mongodb-shell/)

## Setup Instructions

1. **Install dependencies**  
   In the project directory, run:
   ```sh
   npm install
   ```

2. **Start MongoDB**  
   Ensure your MongoDB server is running locally on `mongodb://localhost:27017`.

3. **Insert Sample Data**  
   Run the following command to populate the database:
   ```sh
   node insert_books.js
   ```

4. **Run MongoDB Queries**  
   Execute all queries using the MongoDB Shell:
   ```sh
   mongosh --file queries.js
   ```

   > **Note:** `queries.js` is written for the MongoDB Shell, not Node.js.

## Example Usage

- To connect and test with Node.js, see [examples/mongodb_connection_example.js](examples/mongodb_connection_example.js).
- To see a shell script example, check [examples/mongodb_shell_example.js](examples/mongodb_shell_example.js).

## Troubleshooting

- If you see `Cannot find module 'mongodb'`, run `npm install mongodb`.
- Make sure MongoDB is running before executing scripts.
- For more help, see [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md).

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
- [MongoDB University](https://university.mongodb.com/)

---
**Author:**  
Gabriel Sakwa
