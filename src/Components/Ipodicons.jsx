import { icons } from '../Data/Icondata';
import styles from '../Styles/ipod.module.css';
import audio from "../Audio/buttonclick.mp3";
import { useReducer } from "react";
import { useValue } from "../context";

export const Ipodicons = () => {
    
    const { showMenu, setShowMenu, activeItem, setActiveItem } = useValue();

   const playaudio=()=>{
    const clickSound = new Audio(audio);
    clickSound.play();
  }

  const reducer = (state, action) => {
    switch (action.type){
        case 1: // Menu button                 
            const displayMenu = () => {
                setShowMenu(!showMenu);
            }     
            displayMenu();
            return;
        case 2: // playpause button
        if (showMenu) {
          if(activeItem === 2)
            setActiveItem(0);
          else
            setActiveItem(activeItem+1);
        }
            return;
        case 3:  // Backward button
            return;
        case 4:   // Forward button
            return;
        default:
            return state;
  }
}
  
  const [ , dispatch] = useReducer(reducer, {});
  const handleClick=(id, button)=>{
    playaudio();
    dispatch({type: id, payload: button });
    }

  return (
    <div className={styles.buttons}>
      {icons.map((icon) => {
        return (
          <img key={icon.id} className={`${styles[icon.alt]}`} src={icon.src} alt={icon.alt}  
            onClick={ () => { handleClick(icon.id, icon.alt) }}
            draggable="false"   // This property along with user-select: none; for the page BODY disables any unncessary select and highlighting
          />
        );
      })}
    </div>
  );
}