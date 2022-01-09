import React,{useContext,useState} from 'react'
import './BooksFromSearch.css'
import BookCard from './BookCard'
import BookContext from "../Contexts/bookContext";
import Spinner from './Spinner';



const BooksFromSearch=({loading})=> {

    const {books}=useContext(BookContext);
    const cards=books.books?.map((book) => {
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


console.log(loading);
    return (
      
                <div className='booksFromSearch'>
                  {loading? <Spinner/>:cards}   
                </div>
        
    )
}

export default BooksFromSearch
