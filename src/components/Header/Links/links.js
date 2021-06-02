import LinksCSS from './links.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

const Links = () => {
    return (
        <Router>
            <section className="links">
                <nav className="links__nav">
                    <ul className="links__nav--links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Store</Link></li>
                        <li><Link to="/">iPhone</Link></li>
                        <li><Link to="/">iPad</Link></li>
                        <li><Link to="/">MacBook</Link></li>
                        <li><Link to="/">Accessories</Link></li>
                    </ul>
                </nav>
            </section>
        </Router>
    );
}

export default Links;