import React,{useContext} from 'react'
import './BooksFromSearch.css'
import BookCard from './BookCard'
import BookContext from "../Contexts/bookContext";


const BooksFromSearch=()=> {

    const {books}=useContext(BookContext);
    

    const cards=books.books.map((book) => {
        const { id, volumeInfo } = book;

        return (
          <BookCard
            type='search'
            key={id}
            id={id}
            title={volumeInfo.title?volumeInfo.title:""}
            book_image={
              volumeInfo.readingModes.image
                ? volumeInfo.imageLinks.smallThumbnail
                : ""
            }
            desc={volumeInfo.description}
            link={volumeInfo.infoLink}
          />
        );
      });



    return (
        <div className='booksFromSearch'>
        
            {cards}   
        </div>
    )
}

export default BooksFromSearch
