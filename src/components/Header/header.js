import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faSearch} from '@fortawesome/free-solid-svg-icons';
import HeaderCSS from './header.css';

const Header = (props) =>
{
    return (
        <section className="header" style={HeaderCSS}>
            <section className="header__lang">
                <section className="header__lang--item">
                    <span>EN</span>
                    <select name="" id=""></select>
                </section>
                <section className="header__lang--item">
                    <span>USD</span>
                    <select name="" id=""></select>
                </section>
            </section>
            <section className="header__account">
                <section className="header__account--item">
                    <i className="far fa-user"></i><span ><a href="login.html" className="user">My profile</a></span>
                </section>
                <section className="header__account--item">
                    <a href="page11.html"><FontAwesomeIcon icon={faShoppingBasket} />
                        <span>0 Items</span>
                        <small>$0.00</small>
                    </a>    
                </section>
                <section className="header__account--item">
                    <FontAwesomeIcon icon = {faSearch}/>
                </section>
            </section>
        </section>
        
    );
}

/*const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10vh',
    alignItems: 'center',
    fontSize: '14px',
}

const header__AccountStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontWeight: '600',
}

const header__lang = {
    display: 'flex',
    gap: '1rem',
}

const header__langItemStyle = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
}
*/
export default Header;