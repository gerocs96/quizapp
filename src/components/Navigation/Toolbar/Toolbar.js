import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div>LOGO</div>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar
