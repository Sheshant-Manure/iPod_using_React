import styles from '../Styles/ipod.module.css'
import Menu from './Menu';
import { useValue } from '../context';

export const Ipodscreen = () => {
    const { showMenu, showMenuItem, renderMenuItem } = useValue();
    return (
        <div className={styles.ipodscreen}>
            { showMenu ? <Menu /> : showMenuItem ? renderMenuItem() : null }
        </div>
    );
}