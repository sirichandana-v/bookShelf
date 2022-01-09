import React,{useContext,useState} from "react";
import "./BooksFeed.css";
import { useEffect } from "react";
import axios from "axios";
import InputFields from "./InputFields";
import BooksNyt from "./BooksNyt";
import BooksFromSearch from "./BooksFromSearch";
import BookContext from "../Contexts/bookContext";

function BooksFeed() {
  const [loading,setLoading]=useState();
  const [search, setSearch] = useState({ searchText: "", maxResults: "" });
  const initialState={searchText:"",maxResults:""}
  console.log("first*******************************************");
  const {books,setBooks,countMount}=useContext(BookContext)
  console.log(books.initial);
  console.log(books.books,"books present")
  
  const handleSubmit = async (e) => {
    console.log("in hadle000000000000000000000000000000000000000000000")
    e.preventDefault();
    setLoading(true)
    const maxResults = search.maxResults === "" ? 10 : search.maxResults;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search.searchText}&startIndex=0&maxResults=${maxResults}&key=AIzaSyBqMun0O5K02V9N3nVHD7ADM8_KX9lo5aw`;
    console.log("url set@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2")
    await axios.get(url).then((result) => {
      console.log("begore the step setBooks")
      const presentBooks={books:result.data.items}
      setBooks({...{initial:false},...presentBooks})
      
      console.log("after the setinitial")
      
      console.log("after the step setBooks")
    });
    
    console.log("before search initialization")
    setSearch(initialState);
    setLoading(false);
    
  };

  
console.log("before return")
  return (

    <div className="booksFeed">
    <InputFields handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
    {books.books.length?(<BooksFromSearch loading={loading}/>):(<BooksNyt/>)}
    </div>
  );
}

export default BooksFeed;
