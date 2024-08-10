export class KataLibrary {
    constructor() {
        this.books = [];
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
        this.books.push(book);
        return `Book added: ${book.title}`
    }
}