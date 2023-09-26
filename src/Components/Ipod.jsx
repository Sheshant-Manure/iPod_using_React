import styles from '../Styles/ipod.module.css'

const Ipod = () => {
    return (
        <div className={styles.ipod}>
            <div className={styles.ipodscreen}></div>
            <div className={styles.ipodcontrollerbox}>
                <div className={styles.outercircle}>
                    <div className={styles.buttons}>
                        <button>MENU</button>
                        <img className={styles.playpause} src='https://cdn-icons-png.flaticon.com/128/7960/7960808.png' alt='play/pause' />
                        <img className={styles.backward} src='https://cdn-icons-png.flaticon.com/128/39/39712.png' alt='backward' />
                        <img className={styles.forward} src='https://cdn-icons-png.flaticon.com/128/660/660276.png' alt='forward' />
                    </div>
                    <div className={styles.innercircle}></div>
                </div>
            </div>
        </div>
    );
}

export default Ipod;