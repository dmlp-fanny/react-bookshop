import { useContext, useEffect, useState } from "react";
import './Booklist.scss'
import Context from '../../Context'
import Book from "./Book"


export default function Booklist () {
    const [booklist, setBooklist] = useState(null)
    const [page, setPage] = useState(1)

    const { context , dispatch } = useContext(Context)
    const { currency, exchangeRate, shoppingCart } = context


    const books = async () => {
        const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=' + page)
        const data = await response.json()
        setBooklist(data)
    }

    useEffect(() => {
        books()
    }, [])

    useEffect(() => {
        books()
    }, [page])

    return (
        <div className="booklist">
            {   booklist === null 
                ?
                'Loading'
                :
                booklist.map((book, index) => <Book key={index} data={book} />)
            }
            <div className="pageBtn">
                <button onClick={() => {page == 1 ? setPage(page) : setPage(page - 1)}}>Previous page</button>
                <section>Page {page} </section>
                <button onClick={() => {setPage(page + 1)}}>Next page</button>
            </div>
        </div>
    )
}