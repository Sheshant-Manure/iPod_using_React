import { menuitems } from "../Data/Menuitems";
import { useValue } from "../context";
import styles from '../Styles/ipod.module.css';

const Menu = () => {
    const { activeItem, setShowMenuItem } = useValue(); 
        setShowMenuItem(false);
        return (
        <div className={styles.screenmenu}>
            <h3>iPod.js</h3>
            <ul>
                {
                    menuitems.map((item, i)=>{
                        return (<li key={i} className = { activeItem === i ? styles.itemactive : "" }>{item.label}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Menu;