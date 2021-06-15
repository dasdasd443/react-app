import NavigationCSS from './navigation.css';
import {Link} from 'react-router-dom';
const Navigation = () => {
    return (
        <section className="navigation" style={NavigationCSS}>
            <section className="navigation__links">
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to='/store'>Accessories</Link>
                <span>/</span>
                <span>Beat Solo2 on Ear Headphones-Black</span>
            </section>
        </section>
    );
}

export default Navigation;