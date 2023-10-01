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
    
    const { showMenu, setShowMenu, setShowMenuItem, setActiveItem } = useValue();

    const displayMenuItem = () => {
        playaudio();
        if(showMenu) {
            setShowMenu(false);
            setShowMenuItem(true);
        }
    }

    let angles = []
    const handleRotate = (e) => {
        angles.push(e.detail.angle);
        let relative_angle = e.detail.angle - angles[0];

        // Navigation for Positive angles
        if ( relative_angle >= 0 && relative_angle < 120 )
            setActiveItem(0);
        else if ( relative_angle >= 120 && relative_angle < 240 )
            setActiveItem(1);
        else if ( relative_angle >= 240 && relative_angle < 360 )
            setActiveItem(2);

        // Navigation for Negative angles
        if ( relative_angle < 0 && relative_angle > -120 )
            setActiveItem(2)
        else if ( relative_angle <=-120 && relative_angle >-240 )
            setActiveItem(1)
        else if ( relative_angle <=-240 && relative_angle >-360 )
            setActiveItem(0)
    };

    const targetRef = useRef(null);

    useEffect(() => {
        if (targetRef.current) {
            const region = new ZingTouch.Region(targetRef.current);
            region.bind(targetRef.current, 'rotate', handleRotate);
        }
    });

    return (
            <div className={styles.ipodcontrollerbox}>
                <div ref={targetRef} className={styles.outercircle}>
                    <Ipodicons />
                    <div onClick={displayMenuItem} className={styles.innercircle}></div>
                </div>
            </div>
    );
}
