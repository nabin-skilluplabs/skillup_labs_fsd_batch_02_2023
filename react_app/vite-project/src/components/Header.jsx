import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/job-ready-program">Job Ready Program</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/products">Products</Link>
        </div>
    );
}

export default Header;