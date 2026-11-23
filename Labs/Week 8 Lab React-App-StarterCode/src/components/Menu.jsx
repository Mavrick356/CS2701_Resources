
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      className="menu"
      aria-label="Main navigation"
      style={{
        display: "flex",
        gap: "30px",
        padding: "15px 20px",
        backgroundColor: "#333"
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
        Register
      </Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
        Login
      </Link>
      <Link to="/help" style={{ color: "white", textDecoration: "none" }}>
        Help
      </Link>
    </nav>
  );
}
