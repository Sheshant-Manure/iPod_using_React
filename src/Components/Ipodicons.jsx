import { icons } from "../Icondata/Icondata";
import styles from '../Styles/ipod.module.css';

export const Ipodicons = () => {
    return (
        <div className={styles.buttons}>
            {
                icons.map((icon) => {
                    return (
                        <img key={icon.id} className={`${styles[icon.alt]}`} src={icon.src} alt={icon.alt}/>
                    )
                })
            }
        </div>
    );
}