import styles from '../Styles/ipod.module.css'
import { Ipodscreen } from './Ipodscreen';
import { Ipodcontroller } from './Ipodcontroller';

const Ipod = () => {
    return (
        <div className={styles.ipod}>
            <Ipodscreen />
            <Ipodcontroller />
        </div>
    );
}

export default Ipod;