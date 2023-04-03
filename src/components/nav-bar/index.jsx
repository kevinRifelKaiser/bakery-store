import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <p>
        <Link to="/">Bakery Store</Link>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
