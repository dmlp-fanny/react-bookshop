import { useContext } from 'react';
import Context from '../../Context'
import { Link } from 'react-router-dom';

export default function Book ({ data }) {
    const { id, title, authors, price } = data

    const { context } = useContext(Context)
    const { currency, exchangeRate } = context

    return (
        <div className="book"> 
            <section><strong>{title}</strong></section>
                    <section>By { authors !== null ? authors.map(author => author.name).join(', ') : ''}</section>
                    <Link to={'/book/' + id}>More Information <i class="fa-solid fa-arrow-right"></i> </Link>
                    <br />
                    <br />
        </div> 
    )
}