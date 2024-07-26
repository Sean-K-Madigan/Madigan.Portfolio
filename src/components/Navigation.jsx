import { Link } from "react-router-dom";

export default function Navigation({ onPageChange}) {

  return (
    <nav className="navbar">

      <ul>

      <li><a onClick={() => onPageChange('Home')}>Home</a></li>
        <li><a onClick={() => onPageChange('About')}>About</a></li>
        <li><a onClick={() => onPageChange('Skills')}>Skills</a></li>
        <li><a onClick={() => onPageChange('Projects')}>Projects</a></li>
        <li><a onClick={() => onPageChange('Resume')}>Resume</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

    </nav>
  );
}

{/* <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/skills">Skills</Link></li>
<li><Link to="/projects">Projects</Link></li>
<li><Link to="/resume">Resume</Link></li> */}