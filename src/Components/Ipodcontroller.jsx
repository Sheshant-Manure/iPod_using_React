import styles from '../Styles/ipod.module.css';
import { Ipodicons } from './Ipodicons';
import audio from "../Audio/buttonclick.mp3";
import { useValue } from '../context';

const playaudio=()=>{
    const clickSound = new Audio(audio);
    clickSound.play();
}

export const Ipodcontroller = () => {
    
    const { showMenu, setShowMenu, setShowMenuItem } = useValue();

    const displayMenuItem = () => {
        playaudio();
        if(showMenu) {
            setShowMenu(false);
            setShowMenuItem(true);
        }
    }

    return (
            <div className={styles.ipodcontrollerbox}>
                <div className={styles.outercircle}>
                    <Ipodicons />
                    <div onClick={displayMenuItem} className={styles.innercircle}></div>
                </div>
            </div>
    );
}
