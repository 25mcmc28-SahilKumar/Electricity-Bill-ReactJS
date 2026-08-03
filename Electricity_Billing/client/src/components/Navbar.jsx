import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/customers">Customers</Link>

      <Link to="/generate-bill">Generate Bill</Link>

      <Link to="/pay-bill">Pay Bill</Link>
    </nav>
  );
}

export default Navbar;