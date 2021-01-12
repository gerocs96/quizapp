import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const SideDrawer = (props) => {

    return (
        <div className="SideDrawer">
            <div className="Logo">
                LOGO
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}

export default SideDrawer
