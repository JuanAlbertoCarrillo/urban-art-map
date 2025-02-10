import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/submit">Submit Art</Link></li>
      </ul>
    </nav>
  );
}
