import { Link, NavLink } from 'react-router-dom';
function Header() {
    return (
        <div className="header-App">
            <ul>
                <li><NavLink to="/" className="nav-link-hd">Photo App</NavLink></li>
                <li><NavLink to="/photos/add" className="nav-link-hd">Redux project</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;