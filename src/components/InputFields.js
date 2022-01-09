import React from 'react'
import './InputFields.css'
import SearchIcon from "@mui/icons-material/Search";
function InputFields({handleSubmit,search,setSearch}) {

  
  

  // const inputRef = useRef();

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
      };
    
      

    return (
      <div className="inputFields">
          <form onSubmit={handleSubmit} className="InputFields__search">
        <input
            type="text"
            className="InputFields__searchInput"
            name="searchText"
            value={search.searchText}
            onChange={handleInputChange}
            placeholder="Search for any book you like..."
          />
          <input
            
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
