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
            isBorrowed: false
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
}