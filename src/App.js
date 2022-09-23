import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ErrorPage from './components/ErrorPage';
import Search from './components/products/Search';
import List from './components/products/List';
import Add from './components/products/Add';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/products/:pid' element={<Products />} /> */}
          <Route path='/products' element={<Products />}>
            <Route path='search' element={<Search />} />
            <Route path='list' element={<List />} />
            <Route path='add' element={<Add />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <div className='footer'>
        <h1>
          React Router Dom Version 6
        </h1>
      </div>
    </Router>
  );
}

export default App;
