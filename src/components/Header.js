import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import BookContext from "../Contexts/bookContext";

function Header() {
  const { selectedBooks } = useContext(BookContext);
  // console.log("length is"+len)
  return (
    <nav className="header">
      <div className="header__img">
        <Link to="/" className="header__bookShelf">
          <h3>BookShelf</h3>
        </Link>
      </div>
      <div className="header__middle">
        <Link to="/nytbooks" className="header__melement">
          Best Sellers
        </Link>
        <Link to="/genres" className="header__melement">
          Genres
        </Link>
        <Link to="/mybooks" className="header__melement">
          My books
          <span className="w3-badge w3-red">{selectedBooks.length}</span>
        </Link>
      </div>
      <div className="header__end">
        {/* <form className="header__search">
          <input type="text" placeholder="Filter..." />
          <button>Search</button>
        </form> */}
      </div>
    </nav>
  );
}

export default Header;
