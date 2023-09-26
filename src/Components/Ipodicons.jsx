import { icons } from "../Icondata/Icondata";
import styles from '../Styles/ipod.module.css';
import audio from "../Audio/buttonclick.mp3";
import { useReducer } from "react";
import { useValue } from "../context";

export const Ipodicons = () => {
    
    const { showMenu, setShowMenu } = useValue();

   const playaudio=()=>{
    const clickSound = new Audio(audio);
    clickSound.play();
  }

  const reducer = (state, action) => {
    switch (action.type){
        // Menu toggle
        case 1:                    
            const displayMenu = () => {
                setShowMenu(!showMenu);
            }     
            displayMenu();
            console.log(action.payload, showMenu);
            return;
        case 2:
            console.log(action.payload);
            return;
        case 3:
            console.log(action.payload);
            return;
        case 4:
            console.log(action.payload);
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
          />
        );
      })}
    </div>
  );
}