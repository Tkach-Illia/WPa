import React from 'react';
import styles from "./Hamburger.module.css";

const Hamburger = () => {
    return (
        <div>
            <hr className={styles.hamburger} style={{marginTop: '1%'}}/>
            <hr className={styles.hamburger} style={{marginTop: '2%'}}/>
            <hr className={styles.hamburger}/>
        </div>
    );
};

export default Hamburger;