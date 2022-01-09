import React from "react";
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import BooksFeed from './components/BooksFeed';
import MyBooks from './components/MyBooks';
import BookState from "./Contexts/BookState";
import BooksNyt from "./components/BooksNyt";
import BookGenres from "./components/BookGenres";
import Genre from "./components/Genre";




function App() {

  
  return (
    <div className="App">
    
    <>
    <BookState>
    <Header/> 
      <Routes>
        <Route exact path='/' element={          
            <BooksFeed/>
        }/>
        <Route exact path='/mybooks' element={
              <MyBooks/>
        }/>
        <Route exact path='/nytbooks' element={
              <BooksNyt/>
        }/>
        <Route exact path='/genre/:genre' element={
              <Genre/>
        }/>
        <Route exact path='/genres' element={
              <BookGenres/>
        }/>
      </Routes>
      </BookState>
    </>
    </div>
  );
}

export default App;
