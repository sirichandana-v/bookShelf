import React,{useContext,useState,useRef} from 'react'
import './InputFields.css'
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import BookContext from "../Contexts/bookContext";
function InputFields() {

const {books,setBooks}=useContext(BookContext)
  const [search, setSearch] = useState({ searchText: "", maxResults: "" });
  
  const initialState = { searchText: "", maxResults: "" };
  
  console.log("inputfield*****************************")
    console.log(books)
  

  const inputRef = useRef();

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        console.log("in hadle000000000000000000000000000000000000000000000")
        e.preventDefault();
        const maxResults = search.maxResults === "" ? 10 : search.maxResults;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search.searchText}&startIndex=0&maxResults=${maxResults}&key=AIzaSyBqMun0O5K02V9N3nVHD7ADM8_KX9lo5aw`;
        console.log("url set@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2")
        await axios.get(url).then((result) => {
          console.log("begore the step setBooks")
          // setInitial(false);
          const presentBooks={books:result.data.items}
          setBooks({...books,...{initial:false},...presentBooks})
          
          console.log("after the setinitial")
          // setBooks(result.data.items);
          
          console.log("after the step setBooks")
        });
        
        console.log("before search initialization")
        setSearch(initialState);
        
      };





    return (
        <div className='inputFields'>
        <form onSubmit={handleSubmit}>
        <div className="booksFeed__search">
          <input
            ref={inputRef}
            type="text"
            className="booksFeed__searchInput"
            name="searchText"
            value={search.searchText}
            onChange={handleInputChange}
            placeholder="Search for any book you like..."
          />
          <input
            // ref={searchRef}
            type="text"
            className="booksFeed__resultNo"
            name="maxResults"
            value={search.maxResults}
            onChange={handleInputChange}
            placeholder="max results"
          />
          <button className="booksFeed__searchIcon">
            <SearchIcon />
          </button>
        </div>
      </form>
            
        </div>
    )
}

export default InputFields
