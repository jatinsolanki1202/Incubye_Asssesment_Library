import { KataLibrary } from "./index";

const kl = new KataLibrary();

// Tests for adding books
describe('tests for adding books', () => {
    test('should add a book', () => {
        expect(kl.addBook(101, "Pursuit of Happyness", "Chris Gardner", 2006)).toBe("Book added: Pursuit of Happyness");
    })

    test('should show error message if book with same isbn received', () => {
        expect(kl.addBook(101, "The Guide", "RK Narayan", 1958)).toBe("Cannot add book with same isbn number")
    })

    test('should show error if any field left empty', () => {
        expect(kl.addBook(101, "", "Chris Gardner", 2006)).toBe("Please enter valid book details");
    })

    test('should properly add books if all details are filled correctly', () => {
        expect(kl.addBook(102, "The Guide", "RK Narayan", 1958)).toBe("Book added: The Guide")
        expect(kl.addBook(103, "The People of the Indus", "Nikhl Gulati", 2022)).toBe("Book added: The People of the Indus")
    })
})


// Tests for borrowing books
describe('tests for borrowing books', () => {
    test('should borrow a book if it is available', () => {
        expect(kl.borrowBook(102)).toBe("Book borrowed: The Guide")
    })

    test('should show error message if book is not available to borrow', () => {
        expect(kl.borrowBook(102)).toBe("No such book avalaible to borrow")
    })
})


// Tests for Returning books
describe('tests for returning books', () => {
    test('should return a book, if it is borrowed', () => {
        expect(kl.returnBook(102)).toBe("Book returned: The Guide")
    })

    test('should show error message if no such book is returned', () => {
        expect(kl.returnBook(101)).toBe("No such book is borrowed")
    })
})


// Tests for Viewing all available books
describe('tests for viewing available books', () => {
    test('should view all the books', () => {
        expect(kl.viewBooks()).toEqual({ isbn: 101, title: "Pursuit of Happyness", author: "Chris Gardner", year: 2006 },
            { isbn: 102, title: "The Guide", author: "RK Narayan", year: 1958 },
            { isbn: 103, title: "The People of the Indus", author: "Nikhl Gulati", year: 2022 }
        )
    })

    test('should view only books which are not borrowed', () => {
        //borrowing book for test
        expect(kl.borrowBook(101))
        expect(kl.viewBooks()).toEqual(
            { isbn: 102, title: "The Guide", author: "RK Narayan", year: 1958 },
            { isbn: 103, title: "The People of the Indus", author: "Nikhl Gulati", year: 2022 })
    })
})