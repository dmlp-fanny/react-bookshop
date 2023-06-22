import Booklist from "../BookList/Booklist";

export default function Homepage ({ title }) {
    return (
        <>
            <h1>{ title }</h1>
            <Booklist />
        </>
    )
}
