import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
  import Home from './components/Home';
  import About from './components/About';
  import Contact from './components/Contact';
  import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} />

          
          <Route path="/about" element={<About />} />
            
         
          <Route path="/contact" element={<Contact />} />
           
          
          <Route path="/blog" element={<Blog />} />
            
         
        </Routes>
      </div>
    </Router>
  );
}


export default App;
