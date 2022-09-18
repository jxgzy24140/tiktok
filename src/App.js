import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
function App() {

  return (
    <>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/news" >News</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
