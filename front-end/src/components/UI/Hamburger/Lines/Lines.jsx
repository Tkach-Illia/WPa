import React from 'react';
import styles from "./Lines.module.css";

const Lines = ({visible, callback}) => {
    return (
        <div
            className={styles.hamburger}
            onClick={() => callback(!visible)}
        >
            <hr className={styles.hamburger__line}/>
            <hr className={styles.hamburger__line}/>
            <hr className={styles.hamburger__line}/>
        </div>
    );
};

export default Lines;