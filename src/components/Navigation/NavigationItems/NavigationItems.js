import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/editor">Editor</NavigationItem>
            <NavigationItem link="/quiz">Play</NavigationItem>
        </ul>
    )
}

export default NavigationItems
