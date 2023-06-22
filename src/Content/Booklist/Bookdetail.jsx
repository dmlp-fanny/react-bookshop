import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Context from '../../Context'
import './Bookdetail.scss'

export default function BookDetail () {

    const { id } = useParams();

    const [book, setBook] = useState(null)

    const { context , dispatch } = useContext(Context)
    const { currency, exchangeRate } = context

    const fetchData = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id)
        const data = await response.json()
        setBook(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <h1>Book Detail</h1>
        {
            book !== null 
            ?
                <div className="book_detail">

                    <h3>{book.title}</h3>
                    <img src={book.image} alt={ `book` + book.title} />
                    <p>By {book.authors.map(author => author.name).join(', ')}</p>
                    { book.description }

                    <li><strong>Edition:</strong> {book.edition}</li>
                    <li><strong>Format:</strong> {book.format} {book.pages} pages</li>
                    <li><strong>Price: </strong>{ exchangeRate !== null ? (book.price * exchangeRate).toFixed(2) : book.price} {currency}</li>

                    <button className="cartBtn" onClick={() => {dispatch({
                            type: 'cart/addItem',
                            payload: id})}}>
                        Add to Cart
                    </button>
                </div>

            :
            ""
        }
        </>
    )
}