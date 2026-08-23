import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <div className="header-content">

                <Link to="/">
                    <h1>🎬 Cineva</h1>
                </Link>

                <p>Find your next movie</p>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>

            </div>

        </header>
    );
}

export default Header;