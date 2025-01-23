function LibraryOfBooks() {
    const library: {title: string, author: string}[] = [
        {title: "The Book of the Dead", author: "H.P. Lovecraft"},
        {title: "Harry Potter", author: "J.K. Rowling"},
        {title: "Bilbo", author: "J. R. Tolkien"},
    ];

    const libraryTitle: string = "Library Of Books"
    return <>
    <h1>{libraryTitle}</h1>
    <ul>
        {library.map((book) => {
            return <li>{book.title} by {book.author}</li>
        })}
    </ul>
    </>
}

export default LibraryOfBooks