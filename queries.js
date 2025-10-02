// create database and collections
db = db.getSiblingDB('plp_bookstore');

// drop the collection if it already exists to start fresh
db.books.drop();

// insert data into the newly created collection
db.books.insertMany([
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
]);

// Find all books in a specific genre
print("_____________________________________________")
print("\nFiction Books:");
print("_____________________________________________")
const fictionBooks = db.books.find({ genre: 'Fiction' }).toArray();
printjson(fictionBooks);

// Find books published after 1950
print("_____________________________________________")
print("\nBooks Published After 1950:");
print("_____________________________________________")
const recentBooks = db.books.find({ published_year: { $gt: 1950 } }).toArray();
printjson(recentBooks);

// Find books by a specific author
print("_____________________________________________")
print("\nBooks by George Orwell:");
print("_____________________________________________")
const orwellBooks = db.books.find({ author: 'George Orwell' }).toArray();
printjson(orwellBooks);

// Update the price of a The Great Gatsby
print("\nUpdating Price of 'The Great Gatsby':");
db.books.updateOne(
    { title: 'The Great Gatsby' },
    { $set: { price: 8.99 } }
);
print("\nUpdated Price of 'The Great Gatsby':");
const updatedGatsby = db.books.find({ title: 'The Great Gatsby' }).toArray();
printjson(updatedGatsby);

// Delete a book by its title
print("\nDeleting 'Moby Dick':");
db.books.deleteOne({ title: 'Moby Dick' });
print("\nDeleted 'Moby Dick':");
const deletedMobyDick = db.books.find({ title: 'Moby Dick' }).toArray();
printjson(deletedMobyDick);

// Write a query to find books that are both in stock and published after 2010
print("_____________________________________________")
print("\nBooks In Stock and Published After 2010:");
print("_____________________________________________")
const recentInStockBooks = db.books.find({ published_year: { $gt: 2010 }, in_stock: true }).toArray();
printjson(recentInStockBooks);

// Use projection to return only the title, author, and price fields in your queries
print("_____________________________________________")
print("\nProjected Books:");
print("_____________________________________________")
const projectedBooks = db.books.find({}, { title: 1, author: 1, price: 1 , _id: 0}).toArray();
printjson(projectedBooks);

// Implement sorting to display books by price (both ascending and descending)
print("_____________________________________________")
print("\nBooks Sorted by Price (Ascending):");
print("_____________________________________________")
const booksSortedAsc = db.books.find({}).sort({ price: 1 }).toArray();
printjson(booksSortedAsc);

print("_____________________________________________")
print("\nBooks Sorted by Price (Descending):");
print("_____________________________________________")
const booksSortedDesc = db.books.find({}).sort({ price: -1 }).toArray();
printjson(booksSortedDesc);

// Use the `limit` and `skip` methods to implement pagination (5 books per page)
print("_____________________________________________")
print("\nPagination - Page 1 (5 books):");
print("_____________________________________________")
const page1Books = db.books.find({}).skip(0).limit(5).toArray();
printjson(page1Books);

print("_____________________________________________")
print("\nPagination - Page 2 (5 books):");
print("_____________________________________________")
const page2Books = db.books.find({}).skip(5).limit(5).toArray();
printjson(page2Books);

print("_____________________________________________")
print("\nPagination - Page 3 (5 books):");
print("_____________________________________________")
const page3Books = db.books.find({}).skip(10).limit(5).toArray();
printjson(page3Books);

// Create an aggregation pipeline to calculate the average price of books by genre
print("_____________________________________________")
print("\nAverage Price of Books by Genre:");
print("_____________________________________________")
const avgPriceByGenre = db.books.aggregate([
    { $group: {_id: "$genre", averagePrice: { $avg: "$price"}}}
]).toArray();
printjson(avgPriceByGenre);

// Create an aggregation pipeline to find the author with the most books in the collection
print("_____________________________________________")
print("\nAuthor with Most Books:");
print("_____________________________________________")
const authorWithMostBooks = db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } }},
    { $sort: { bookCount: -1 }},
    { $limit: 1 }
]).toArray();
printjson(authorWithMostBooks);

// Implement a pipeline that groups books by publication decade and counts them
print("_____________________________________________")
print("\nBooks Count by Publication Decade:");
print("_____________________________________________")
const booksByDecade = db.books.aggregate([
    { $group: {
            _id: { $substr: ["$published_year", 0, 3] },
            bookCount: { $sum: 1 }
        }
    },
    {  $project: {
            _id: 0,
            decade: { $concat: ["$_id", "0s"] },
            bookCount: 1
        }
    }
]).toArray();
printjson(booksByDecade);

// Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 });
print("\nCreated index on title")

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 });
print("\nCreated indexes on author and published year")

// Use the `explain()` method to demonstrate the performance improvement with your indexes
const explainResult = db.books.find({ title: "Animal Farm" }).explain("executionStats");
printjson(explainResult);

print("\nShell script executed successfully.");