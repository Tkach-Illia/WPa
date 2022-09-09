import React from 'react';
import styles from './MyHeader.module.css'

const MyHeader = () => {
    return (
        <div className={styles.myHeader}>
            <h1 className={styles.name}>Find Pet</h1>

            <div className={styles.loginBtn__Pos}>
                <div className={[styles.loginBtn__Log, styles.loginBtn].join(" ")}>
                    <h1 className={styles.btnText}>Log in</h1>
                </div>
                <div className={[styles.loginBtn__Sign, styles.loginBtn].join(" ")}>
                    <h1 className={styles.btnText}>Sign in</h1>
                </div>
            </div>

            <div>
                <hr className={styles.hamburger} style={{marginTop: '1%'}}/>
                <hr className={styles.hamburger} style={{marginTop: '2%'}}/>
                <hr className={styles.hamburger}/>
            </div>

        </div>
    );
};

export default MyHeader;