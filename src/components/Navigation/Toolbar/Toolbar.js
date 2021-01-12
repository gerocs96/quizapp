import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <div>LOGO</div>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar
