function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

Book.prototype.displayInfo = function() {
  console.log(`${this.title} was written by ${this.author} and has the ISBN code: ${this.isbn}.`);
}

function FictionBook (title, author, isbn, genre) {
  Book.call(this, title, author, isbn);
  this.genre = genre;
}

FictionBook.prototype = Object.create(Book.prototype);
FictionBook.prototype.contructor = FictionBook;

//console.log(Book);
//console.log(FictionBook);

FictionBook.prototype.displayInfo = function() {
  console.log(`${this.title} was written by ${this.author}. It's a ${this.genre.toLowerCase()} book and has the ISBN code: ${this.isbn}.`);
}


function Library(books) {
  this.books = books;
}

Library.prototype.addBook = function(newBook) {
  this.books.push(newBook);
  console.log(`The following book was addded to the library: ${newBook.title}`);
}

Library.prototype.displayBooks = function() {
  console.log('The library has the following books: ');
  this.books.forEach(function(book) {
    console.log(`${book.title}`);
  })
}

function BorrowedBooksList(books) {
  this.books = books;
}

BorrowedBooksList.prototype.borrowNewBook = function(newBorrowedBook) {
  this.books.push(newBorrowedBook);
  console.log(`You borrowed the following book from the library: ${newBorrowedBook.title} (by ${newBorrowedBook.author}).`);
}

BorrowedBooksList.prototype.displayListOfBooks = function () {
  this.books.forEach(function(books) {
    console.log(`Your list of borrowed books has ${books.title}`);
  });
}

function LibraryMember (name, borrowedBooksList) {
  this.name = name;
  this.borrowedBooksList = borrowedBooksList; 
}

LibraryMember.prototype.borrowBooks = function () {
  console.log(`You borrowed the following books from the library: `);
  this.borrowedBooksList.books.forEach(function(book) {
    console.log(`${book.name}`);
  });
}

// 1. Create the books

var drive = new Book('Drive', 'Daniel Pink', '978-973-1931-89-0');
//console.log(drive); 
//drive.displayInfo();

var htmlCss = new Book('HTML & CSS', 'Jon Duckett', '978-1-118-00818-8');
//console.log(htmlCss);
//htmlCss.displayInfo();

var javascriptJquery = new Book('Javascript & Jquery', 'Jon Duckett', '978-1-118-53164-8');
//console.log(javascriptJquery);
//javascriptJquery.displayInfo();

var theThreeMusketeers1 = new FictionBook('The Three Musketeers: Volume 1', 'Alexandre Dumas', "978-0543916266", "Fiction"); 
//console.log(theThreeMusketeers1);
//theThreeMusketeers1.displayInfo();

var theThreeMusketeers2 = new FictionBook('The Three Musketeers: Volume 2', 'Alexandre Dumas', "978-0543916228", "Fiction");
//console.log(theThreeMusketeers2); 
//theThreeMusketeers2.displayInfo();

// 2. Add the books to the library
var libraryBooksArray = [];
var library = new Library (libraryBooksArray);
library.addBook(drive);
library.addBook(htmlCss);
library.addBook(javascriptJquery);
library.addBook(theThreeMusketeers1);
library.addBook(theThreeMusketeers2);
//console.log(library);
library.displayBooks();


// 3. Create members that can borrow books

var mihaiBorrowedBooksArray = [];
var mihaiListOfBooks = new BorrowedBooksList(mihaiBorrowedBooksArray);
var mihaiMembership = new LibraryMember('Mihai', mihaiListOfBooks);

mihaiListOfBooks.borrowNewBook(theThreeMusketeers1);
mihaiListOfBooks.borrowNewBook(theThreeMusketeers2);
mihaiListOfBooks.displayListOfBooks();
console.log(mihaiMembership);


var ioanaBorrowedBookArray = [];
var ioanaListOfBooks = new BorrowedBooksList(ioanaBorrowedBookArray);
var ioanaMembership = new LibraryMember('Ioana', ioanaListOfBooks);

ioanaListOfBooks.borrowNewBook(drive);
ioanaListOfBooks.borrowNewBook(htmlCss);
ioanaListOfBooks.borrowNewBook(javascriptJquery);
ioanaListOfBooks.displayListOfBooks();
console.log(ioanaMembership);
//mihaiMembership..borrowBooks(drive);
//console.log(mihaiMembership);