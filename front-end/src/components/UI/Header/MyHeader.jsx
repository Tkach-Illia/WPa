import React from 'react';
import styles from './MyHeader.module.css'
import LoginButton from '../LoginButton/LoginButton';
import Hamburger from '../Hamburger/Hamburger';

const MyHeader = () => {
    return (
        <div className={styles.myHeader}>
            <h1 className={styles.name}>Find Pet</h1>
            <LoginButton/>
            <Hamburger/>
        </div>
    );
};

export default MyHeader;