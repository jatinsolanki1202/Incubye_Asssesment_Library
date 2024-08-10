import { KataLibrary } from "./index";

const kl = new KataLibrary();
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
})