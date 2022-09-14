import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
  import Home from './components/Home';
  import About from './components/About';
  import Contact from './components/Contact';
  import Blog from './components/Blog';
import Pricing from './components/Pricing';

function App() {
  
  return (
    <div className="container">
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/about">About</Link>
            </li>
            <li className="item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="item">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="toggle"><a href="/"><i class="fas fa-bars"></i></a></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} />

          
          <Route path="/about" element={<About />} />
            
         
          <Route path="/contact" element={<Contact />} />
           
          
          <Route path="/blog" element={<Blog />} />
            
         <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}


export default App;
