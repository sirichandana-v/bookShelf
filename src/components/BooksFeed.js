import React,{useContext} from "react";
import "./BooksFeed.css";
import { useEffect } from "react";
import axios from "axios";
import InputFields from "./InputFields";
import BooksNyt from "./BooksNyt";
import BooksFromSearch from "./BooksFromSearch";
import BookContext from "../Contexts/bookContext";

function BooksFeed() {

  console.log("first*******************************************");
  const {books,setBooks,countMount}=useContext(BookContext)
  console.log(books.initial);
  console.log(books.books,"books present")
  

  // useEffect(() => {
  //   if(countMount.current===0)
  //   {
  //     countMount.current++;
  //     console.log("in mount**********")
      
  //     const fetchBooks = async () => {
  //       const res = await axios.get(
  //         "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DFJhsRrABZE7KayCwR3PQY5TVarCK7LE"
  //       );
  //       // setBooks(res.data.results.books);

  //       const presentBooks={books:res.data.results.books}
  //       console.log(presentBooks,"present books")
  //       setBooks({...books,...presentBooks})
  //     };
  //     fetchBooks();
  //   }
    
  // }, []);

  
console.log("before return")
  return (

    <div className="booksFeed">
    <InputFields/>
      
      {books.initial ? (
        <BooksNyt />
      ) : (
        
        <BooksFromSearch />
      )}
    </div>
  );
}

export default BooksFeed;
