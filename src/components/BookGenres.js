import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './BookGenres.css'

function BookGenres() {


    const genres=[
        'Classics','Fiction','Biographies','Horror','Thriller','Romance'
    ]

    
    const names=genres.map((genre)=>{
        return (
        <div key={genre} className='bookGenres__row'>
            <h3><Link to={`/genre/${genre}`} state={{from :genre}}>{genre}</Link></h3>
        </div> ); 
    })
    return (
        <div className='bookGenres__genres'>
            {names} 
        </div>
    )
}

export default BookGenres;
