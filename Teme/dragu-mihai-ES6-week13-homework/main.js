class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  displayInfo() {
    console.log(`${this.title} was written by ${this.author} and has the ISBN code: ${this.isbn}.`);
  }
}

class FictionBook extends Book {
  constructor(title, author, isbn, genre) {
    super(title, author, isbn);
    this.genre = genre;
  }

  displayInfo() {
    console.log(`${this.title} was written by ${this.author}. It's a ${this.genre.toLowerCase()} book and has the ISBN code: ${this.isbn}.`);
  }
}

class Library {
  constructor (books) {
    this.books = books;
  }

  addBook(newBook) {
    this.books.push(newBook);
    console.log(`The following book was addded to the library: ${newBook.title}`);
  }

  displayBooks() {
    console.log('The library has the following books: ');
    this.books.forEach(function(book) {
      console.log(`${book.title}`);
    })
  }
}

class BorrowedBooksList {
    constructor(books) {
      this.books = books;
    }

    borrowNewBook(newBorrowedBook) {
      this.books.push(newBorrowedBook);
      console.log(`You borrowed the following book from the library: ${newBorrowedBook.title} (by ${newBorrowedBook.author}).`);
    }

    displayListOfBooks() {
      this.books.forEach(function(books) {
        console.log(`Your list of borrowed books has ${books.title}`);
      });
    }
  }

class LibraryMember {
    constructor(name, borrowedBooksList) {
      this.name = name;
      this.borrowedBooksList = borrowedBooksList;
    }

    borrowBooks() {
      console.log(`You borrowed the following books from the library: `);
      this.borrowedBooksList.books.forEach(function(book) {
        console.log(`${book.name}`);
      });
    }
  }


// 1. Create the books

const drive = new Book('Drive', 'Daniel Pink', '978-973-1931-89-0');
const htmlCss = new Book('HTML & CSS', 'Jon Duckett', '978-1-118-00818-8');
const javascriptJquery = new Book('Javascript & Jquery', 'Jon Duckett', '978-1-118-53164-8');
const theThreeMusketeers1 = new FictionBook('The Three Musketeers: Volume 1', 'Alexandre Dumas', "978-0543916266", "Fiction"); 
const theThreeMusketeers2 = new FictionBook('The Three Musketeers: Volume 2', 'Alexandre Dumas', "978-0543916228", "Fiction");

/*
console.log(drive);
console.log(htmlCss);
console.log(javascriptJquery);
console.log(theThreeMusketeers1);
console.log(theThreeMusketeers2);
drive.displayInfo();
htmlCss.displayInfo();
javascriptJquery.displayInfo();
theThreeMusketeers1.displayInfo();
theThreeMusketeers2.displayInfo();
*/

// 2. Add the books to the library

let libraryBooksArray = [];
let library = new Library (libraryBooksArray);
library.addBook(drive);
library.addBook(htmlCss);
library.addBook(javascriptJquery);
library.addBook(theThreeMusketeers1);
library.addBook(theThreeMusketeers2);
library.displayBooks();

// 3. Create members that can borrow books

let mihaiBorrowedBooksArray = [];
const mihaiListOfBooks = new BorrowedBooksList(mihaiBorrowedBooksArray);
const mihaiMembership = new LibraryMember('Mihai', mihaiListOfBooks);

mihaiListOfBooks.borrowNewBook(theThreeMusketeers1);
mihaiListOfBooks.borrowNewBook(theThreeMusketeers2);
mihaiListOfBooks.displayListOfBooks();
console.log(mihaiMembership);


let ioanaBorrowedBookArray = [];
const ioanaListOfBooks = new BorrowedBooksList(ioanaBorrowedBookArray);
const ioanaMembership = new LibraryMember('Ioana', ioanaListOfBooks);

ioanaListOfBooks.borrowNewBook(drive);
ioanaListOfBooks.borrowNewBook(htmlCss);
ioanaListOfBooks.borrowNewBook(javascriptJquery);
ioanaListOfBooks.displayListOfBooks();
console.log(ioanaMembership);







