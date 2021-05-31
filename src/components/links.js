import LinksCSS from './css/links.css';

const Links = () => {
    return (
        <section className="links">
            <nav className="links__nav">
                <ul className="links__nav--links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="">Store</a></li>
                    <li><a href="page9.html">Iphone</a></li>
                    <li><a href="">ipad</a></li>
                    <li><a href="">macbook</a></li>
                    <li><a href="page10.html">accessories</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Links;