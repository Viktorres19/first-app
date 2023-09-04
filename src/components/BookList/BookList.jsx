import Book from './Book/Book'

import books from '../../books'
/* import { books } from '../../books' */

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id)
        console.log(book)
    }
    return (
        <section className="book-list">
        {books.map(book => (
            <Book key={book.id} {...book} getBook={getBook} />
        ))}
        </section>
    )
}
export default BookList