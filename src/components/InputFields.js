import React,{useContext,useState,useRef} from 'react'
import './InputFields.css'
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import BookContext from "../Contexts/bookContext";
import BooksFromSearch from './BooksFromSearch';
import Spinner from './Spinner';
function InputFields({handleSubmit,search,setSearch}) {

const {books,setBooks}=useContext(BookContext)
  
  console.log("inputfield*****************************")
    console.log(books)
  

  const inputRef = useRef();

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
      };
    
      

    return (
      <div className="inputFields">
          <form onSubmit={handleSubmit} className="InputFields__search">
        <input
            ref={inputRef}
            type="text"
            className="InputFields__searchInput"
            name="searchText"
            value={search.searchText}
            onChange={handleInputChange}
            placeholder="Search for any book you like..."
          />
          <input
            // ref={searchRef}
            type="text"
            className="InputFields__resultNo"
            name="maxResults"
            value={search.maxResults}
            onChange={handleInputChange}
            placeholder="max results"
          />
            <button className="InputFields__searchIcon">
            <SearchIcon />
          </button>
          

      </form>
      </div>
        
            
      
    )
}

export default InputFields
