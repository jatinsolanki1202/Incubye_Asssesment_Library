import { KataLibrary } from "./index";

const kl = new KataLibrary();
describe('tests for adding books', () => {
    test('should add a book', () => {
        expect(kl.addBook(101, "hello", "world", 2002)).toBe("Book added: hello");
    })
})