import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Home</NavigationItem>
            <NavigationItem link="/">Editor</NavigationItem>
            <NavigationItem link="/">Play</NavigationItem>
        </ul>
    )
}

export default NavigationItems
