import NavigationCSS from './navigation.css';
const Navigation = () => {
    return (
        <section className="navigation" style={NavigationCSS}>
            <section className="navigation__links">
                <a href="#">Home</a>
                <span>/</span>
                <a href="#">Accessories</a>
                <span>/</span>
                <span>Beat Solo2 on Ear Headphones-Black</span>
            </section>
        </section>
    );
}

export default Navigation;