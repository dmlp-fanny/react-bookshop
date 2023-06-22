import { Link } from "react-router-dom"

export default function TopmenuLink ({ label, href, currentPage, setCurrentPage,  setTitle }) {
    const handleClick = () => {
        setCurrentPage(href)
        setTitle(label)
    }

    return (
        <Link to={'/' + href} className={`link` + (currentPage === href ? ` link--highlighted` : '')} onClick={ handleClick }> 
            { label }
        </Link>
    )
}