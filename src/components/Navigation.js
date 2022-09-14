import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

function Navigation() {
  return (
    <>
    Do I need a router here?
      <ul>
        <li>
          <NavLink to="/" element={Home} />
          
        </li>
        <li>
          <NavLink to="/about" element={About} />
        </li>
        <li>
          <NavLink to="/contact" element={Contact} />
        </li>
        <li>
          <NavLink to="/blog" element={Blog} />
        </li>
      </ul>
    </>
  );
}

export default Navigation;
