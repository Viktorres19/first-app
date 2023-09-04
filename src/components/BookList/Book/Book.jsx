import Image from './components/Image'
import Title from './components/Title'
import Author from './components/Author'
const Book = ({id, img, alt, title, author, getBook}) => {
    return (
        <div className="book">
            <Image src={img} alt={alt} />
            <Title title={title} />
            <Author author={author} />
            <button onClick={() => getBook(id)}>Get Book</button>
        </div>
    )
}
export default Book