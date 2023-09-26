import { useValue } from "../context";
import styles from '../Styles/ipod.module.css'

const Menu = () => {
    const { showMenu } = useValue();
    if(showMenu) 
        return (
        <div className={styles.screenmenu}>
            <h3>iPod.js</h3>
            <ul>
                <li>Music</li>
                <li>Games</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default Menu;