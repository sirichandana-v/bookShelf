import React, {useContext} from 'react'
import './MyBooks.css'
import BookContext from "../Contexts/bookContext";


function MyBooks() {


    const {handleRemoveClick,selectedBooks}=useContext(BookContext)

console.log("myBooks",selectedBooks)

    const rows=selectedBooks.map((book,index)=>{
        return (

        <tr key={book.id?book.id:book.rank}>
            <td>{index+1}</td>
            <td>{<img src={book.volumeInfo?(book.volumeInfo.readingModes.image
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : ""):book.book_image} alt="book" style={{height:'90px',objectFit: 'contain', padding:'6px'}}/>
            }</td>
            
            <td><a href={book.volumeInfo?book.volumeInfo.infoLink:book.amazon_product_url} target="_blank" rel="noreferrer">{book.volumeInfo?book.volumeInfo.title:book.title}</a></td>
            <td><button onClick={()=>handleRemoveClick(book.id?book.id:book.rank)}>Remove</button></td>
        </tr>);

    })

console.log(rows,"rows are")
    return (
        <div className='myBooks'>
            <table className='myBooks__table'>
                <thead>
                <tr>
                <th>S.no</th>
                <th>Book</th>
                <th>Purchase</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            {rows.length?(<h3 className='myBooks__msgS'>Happy Reading 😊 </h3>):(<h3 className='myBooks__msgF'>☹️</h3>)}
        </div>
    )
}

export default MyBooks
