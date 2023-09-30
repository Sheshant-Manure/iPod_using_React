import styles from '../Styles/ipod.module.css';
import { Ipodicons } from './Ipodicons';
import audio from "../Audio/buttonclick.mp3";
import { useValue } from '../context';
import ZingTouch from 'zingtouch'
import { useEffect, useRef } from 'react';

const clickSound = new Audio(audio);
const playaudio=()=>{
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

    const handleRotate = (e) => {
        console.log(e.detail.angle);
    };

    const targetRef = useRef(null);

    useEffect(() => {
        if (targetRef.current) {
            const region = new ZingTouch.Region(targetRef.current);
            region.bind(targetRef.current, 'rotate', handleRotate);
        }
    }, []);

    return (
            <div className={styles.ipodcontrollerbox}>
                <div ref={targetRef} className={styles.outercircle}>
                    <Ipodicons />
                    <div onClick={displayMenuItem} className={styles.innercircle}></div>
                </div>
            </div>
    );
}
