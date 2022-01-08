import React,{useContext,useState} from 'react'
import './BookCard.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BookContext from "../Contexts/bookContext";
import Button from '@material-ui/core/Button';



function BookCard({type,id,title,book_image,desc,link}) {

    const {handleAddClick,handleRemoveClick}=useContext(BookContext)
    
    const [disable, setDisable] = useState({add:false,remove:true});


    

    return (
        <div className='bookCard'>
        <div className="bookCard__start">
            <Button id='bookCard__addIcon' size='small' variant="outlined" color="primary" disabled={disable.add} onClick={()=>handleAddClick(id,type,setDisable)}><AddIcon/></Button>
            <img src={book_image?book_image:'https://storage.jainebooks.org/uploads/front-image/742014794-default-book.png'} alt="book" />
            <Button id='bookCard__removeIcon' size='small' variant="outlined" color="secondary" disabled={disable.remove} onClick={()=>handleRemoveClick(id,setDisable)}><RemoveIcon/></Button>
        </div>
            <div className="bookCard__container">
            <a href={link} target="_blank" rel="noreferrer">
            <div className="bookCard__title"><h4>{title}</h4></div>
            </a>   
            <div className="bookCard__desc">{desc?(desc.length>100?(desc.slice(0,90).slice(0,desc.lastIndexOf(' '))+'. . .'):desc):('')}</div>                  
            </div>
        </div>
    )
}

export default BookCard
