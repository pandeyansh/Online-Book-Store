import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import img from '../BookLogo.png';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import { useCart } from './CartContext';

function BookCatalog({ addBook }) {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');
  const { addBookToCart, cart } = useCart(); // Destructure cart directly from useCart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://192.168.68.47:8081/books/all')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false); // Data is loaded
      });
  }, []);

  const handleAddToCart = (book) => {
    addBookToCart(book);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleGenreFilter = (e) => {
    const genreValue = e.target.value;
    setFilterGenre(genreValue);
  };

  const handleAuthorFilter = (e) => {
    const authorValue = e.target.value;
    setFilterAuthor(authorValue);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filterBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(searchQuery);
    const genreMatch = filterGenre === '' || book.genre.toLowerCase() === filterGenre.toLowerCase();
    const authorMatch = filterAuthor === '' || book.author.toLowerCase() === filterAuthor.toLowerCase();
    return titleMatch && genreMatch && authorMatch;
  });

  const uniqueAuthors = Array.from(new Set(books.map((book) => book.author)));
  const uniqueGenres = Array.from(new Set(books.map((book) => book.genre)));

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img} alt="Logo" className="logo" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <select className="select me-2" onChange={handleGenreFilter}>
              <option value="">Genres</option>
              {uniqueGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <select className="select me-2" onChange={handleAuthorFilter}>
              <option value="">Filter by Author</option>
              {uniqueAuthors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
            <Link to="/login">
              <button className="btn btn-outline-success me-2" type="button"id='b3'>
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-success" type="button" id="b2">
                Sign Up
              </button>
            </Link>
            <Link to="/ShoppingCart">
            <div className="cart-icon" onClick={handleToggleCart}>
          <i className="fas fa-shopping-cart fa-lg mx-2"></i>
          <span className="cart-item-count">{cart.length}</span>
        </div>
            </Link>
          </form>
        </div>
      </nav>
      {isCartOpen && (
        <div className="cart-popup">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Price: ₹ {item.price}</p>
                </div>
              ))}
              <p>Total Price: ₹ {cart.reduce((total, item) => total + item.price, 0)}</p>
            </div>
          )}
          <button onClick={handleToggleCart}>Close Cart</button>
        </div>
      )}
      <div style={{ margin: '30px 0' }}>
        <ImageSlider />
      </div>
      <div className="my-5">
        <div className="row-cart">
          {filterBooks.map((book) => (
            <div key={book.id} className="c1">
              <div className="card-container">
                <div className="card">
                  <img src={book.imageUrl} alt={book.title} height={300} width={200} className="card-img" />
                  <div className="card-content">
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-price">Price: ₹ {book.price}</p>
                    <p className="card-author">Author: {book.author}</p>
                    <p className="card-genre">{book.genre}</p>
                    {/* Add to Cart button with onClick handler */}
                    <div className="b1">
                      <button className="add-to-cart" onClick={() => addBookToCart(book)}>
                        Add to Cart
                      </button>
                      <button className="buy-now">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookCatalog;