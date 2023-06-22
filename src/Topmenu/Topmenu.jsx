import { useState } from 'react';
import './topmenu.scss';
import TopmenuLink from './TopmenuLink';
import CartOverview from '../Content/CartOverview/CartOverview';
import CurrencySelection from './CurrencySelection/CurrencySelection';

export default function Topmenu ({ currentPage, setCurrentPage, setTitle }) {
    const [open, setOpen] = useState(true)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className="navigation">
            <i className="fa-solid fa-book-open"></i>

            {open ? 
            <nav>
                <TopmenuLink currentPage={currentPage} href='' label='Home' setCurrentPage={setCurrentPage}  setTitle={setTitle} />
                <TopmenuLink currentPage={currentPage} href='about' label='About' setCurrentPage={setCurrentPage}  setTitle={setTitle} />
                <TopmenuLink currentPage={currentPage} href='contact' label='Contact' setCurrentPage={setCurrentPage}  setTitle={setTitle} />

            </nav> 
            :
            <div></div>
            }
            <CartOverview />
            <CurrencySelection />
            
            <div className="burger" onClick={ toggleMenu }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}