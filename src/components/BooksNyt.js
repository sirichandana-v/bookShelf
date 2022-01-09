import React,{useContext, useEffect,useState} from 'react'
import './BooksNyt.css'
import BookCard from './BookCard'
import axios from "axios";
import BookContext from "../Contexts/bookContext";
import Spinner from './Spinner';

const BooksNyt=()=> {

  const {nytBooks,setNytBooks}=useContext(BookContext)
  
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    
      // countMount.current++;
      console.log("in mount**********")
      
      const fetchBooks = async () => {
        const res = await axios.get(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DFJhsRrABZE7KayCwR3PQY5TVarCK7LE"
        );
        setNytBooks(res.data.results.books);
      setLoading(false);
        
        }
      fetchBooks();
    
  }, []);

  console.log(nytBooks,"in initial");
  const cards=nytBooks.map((book) => {
    const {
      title,
      rank,
      book_image,
      description,
      amazon_product_url,
    } = book;
    return (
      
      <BookCard
        type='nyt'
        key={rank}
        id={rank}
        title={title}
        book_image={book_image}
        rank={rank}
        desc={description}
        link={amazon_product_url}
      />
    );
  })
    return (
        <div className="booksNyt">
        <h2>The New York Times Best Sellers</h2>
        <div className="booksNyt__bookCards">  
          {loading?<Spinner/>:cards}
        </div>
      </div>
            
    )
}

export default BooksNyt
