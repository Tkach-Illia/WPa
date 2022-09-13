import React from 'react';
import styles from "../LoginButton.module.css";

const MyButton = ({text, callback,style}) => {
    return (
        <div
            className={[style, styles.loginBtn].join(" ")}
            onClick={()=> callback(true)}
        >
            <h1 className={styles.btnText}>{text}</h1>
        </div>
    );
};

export default MyButton;