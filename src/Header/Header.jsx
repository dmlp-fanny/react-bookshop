import { useState } from 'react';
import Topmenu from '../Topmenu/Topmenu';
import './header.scss';

export default function Header ({ setTitle }) {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <header className="header">
            <Topmenu currentPage={ currentPage } setCurrentPage={ setCurrentPage }  setTitle={ setTitle } />
            <div className="header__sitename">
                Flourish and Blotts
            </div>
        </header>
    )
}