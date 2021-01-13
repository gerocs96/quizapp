import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    return (
        <> 
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={props.open ? "SideDrawer Open" : "SideDrawer Close"}>
                <div className="Logo">
                    LOGO
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    )
}

export default SideDrawer
