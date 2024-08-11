export class KataLibrary {
    constructor() {
        this.books = [];
    }

    // Unique ISBN
    isBookUnique(isbn) {
        return !this.books.some(book => book.isbn === isbn);
    }

    // Add books
    addBook(isbn, title, author, year, isBorrowed) {
        const book = {
            isbn,
            title,
            author,
            year,
            isBorrowed: false,
        }
        if (isbn == "" || title == "" || author == "" || year == "") {
            return "Please enter valid book details"
        } else {
            if (this.isBookUnique(isbn)) {
                this.books.push(book);
                return `Book added: ${book.title}`
            } else {
                return `Cannot add book with same isbn number`
            }
        }
    }


    // Borrow books
    borrowBook(isbn) {
        for (let book of this.books) {
            if (book.isbn == isbn && book.isBorrowed == false) {
                book.isBorrowed = true;
                return `Book borrowed: ${book.title}`
            }
        }
        return "No such book avalaible to borrow";
    }


    //Return books
    returnBook(isbn) {
        for (let book of this.books) {
            if (book.isbn == isbn && book.isBorrowed == true) {
                book.isBorrowed = false;
                return `Book returned: ${book.title}`
            }
        }
        return "No such book is borrowed"
    }


    //view Books
    viewBooks() {
        for (let book of this.books) {
            if (!book.isBorrowed) return { isbn: book.isbn, title: book.title, author: book.author, year: book.year }
        }
        return "No books available"
    }
}
