import React,{useState,useRef} from 'react'
import BookContext from './bookContext';

function BookState({children}) {


    const [books, setBooks] = useState({initial:true,books:[]});
    
    const [nytBooks,setNytBooks]=useState([])
    console.log(books , "*******************after");
    const [selectedBooks,setSelectedBooks]=useState([]);
    const countMount=useRef(0);
    function handleAddClick(id,type,setDisable){
        const newBooks=type==='search'?(books.books.filter(book=>{return (book.id===id)})):(nytBooks.filter(book=>{return (book.rank===id)}))
          setSelectedBooks([...selectedBooks,...newBooks]);
          setDisable({add:true,remove:false});
          
      }
      function handleRemoveClick(id,setDisable){
        setSelectedBooks(selectedBooks.filter((selectedBook)=>{return(selectedBook.id?selectedBook.id!==id:selectedBook.rank!==id)}));
        console.log("in remove")
        setDisable({add:false,remove:true});
      }

      const booksState={
          books,setBooks,selectedBooks,setSelectedBooks,handleAddClick,handleRemoveClick,countMount,nytBooks,setNytBooks
      }
      

    return (
        <BookContext.Provider value={booksState}>
                {children}
        </BookContext.Provider>
        
    )
}

export default BookState
