import styles from '../Styles/ipod.module.css';
import { Ipodicons } from './Ipodicons';

export const Ipodcontroller = () => {
    return (
            <div className={styles.ipodcontrollerbox}>
                <div className={styles.outercircle}>
                    <Ipodicons />
                    <div className={styles.innercircle}></div>
                </div>
            </div>
    );
}
