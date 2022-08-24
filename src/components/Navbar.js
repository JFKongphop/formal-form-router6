import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="About">About</Link>
            <Link to="Products">Products</Link>
            <Link to="Service">Service</Link>
            <Link to="Login">Login</Link>
        </nav>
    )
}

export default Navbar