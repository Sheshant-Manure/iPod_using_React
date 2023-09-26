import { icons } from "../Icondata/Icondata";
import styles from '../Styles/ipod.module.css';
import audio from "../Audio/buttonclick.mp3";

export const Ipodicons = () => {
  const playaudio=()=>{
    console.log("hi");
    const audio1 = new Audio(audio);
    audio1.play();
  }
  return (
    <div className={styles.buttons}>
      {icons.map((icon) => {
        return (
          <img key={icon.id} className={`${styles[icon.alt]}`} src={icon.src} alt={icon.alt}  
            onClick={playaudio}
          />
        );
      })}
    </div>
  );
}