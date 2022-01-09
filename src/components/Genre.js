import React,{useEffect,useContext,useState} from 'react'
import axios from 'axios'
import BookContext from '../Contexts/bookContext';
import BooksFromSearch from './BooksFromSearch';
import InputFields from './InputFields'
import {useLocation} from 'react-router-dom'
import Spinner from './Spinner';
import BookCard from './BookCard';
import './Genre.css'

function Genre() {

    const {books,setBooks}=useContext(BookContext);
    const location = useLocation()
  const { from } = location.state
  const [loading,setLoading]=useState(true);

console.log(from)
    const fetchBooks=async()=>{
        const url=`https://www.googleapis.com/books/v1/volumes?q=subject:${from}`
        console.log(url)
        await axios.get(url).then((result) => {  
            setBooks({books:result.data.items})
    })
    setLoading(false)
    console.log(books)
}

useEffect(() => {

    fetchBooks();
}, [])

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



    return (
        <div className='genre__books'>
            {loading?<Spinner/>:cards}
        </div>
    )
}

export default Genre
