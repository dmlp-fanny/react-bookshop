
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import './content.scss';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import BookDetail from './Booklist/Bookdetail';

export default function Content ({title}) {

    return (
        <main className="main">
            <Routes>
                <Route path="" element={ <Homepage title={ title }/> } />
                <Route path="/about" element={ <AboutUs title={ title }/> } />
                <Route path="/book/:id" element={ <BookDetail/> } />
                <Route path="/contact" element={ <Contact title={ title }/> } />
            </Routes>
        </main>
    )
}