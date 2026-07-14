
import { Link } from "react-router-dom";
{/* <a> page ko reload karta hai.
<Link> page reload kiye bina page change karta hai. */}
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🧠Salim AI Research
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
      </div>

      <button className="github-btn">
        GitHub
      </button>
    </nav>
  );
}