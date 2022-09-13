import React, {useState} from 'react';
import styles from "./LoginButton.module.css";
import MyButton from "./MyButton/MyButton";
import MyForm from "./MyForm/MyForm";

const LoginButton = () => {

    const [visibleLogIn, setVisibleLogIn] = useState(false)
    const [visibleSignIn, setVisibleSignIn] = useState(false)

    return (
        <div className={styles.loginBtn__Pos}>
            <MyButton text={"Log In"} callback={setVisibleLogIn} style={styles.loginBtn__Log}/>
            <MyButton text={"Sign In"} callback={setVisibleSignIn} style={styles.loginBtn__Sign}/>
            <MyForm
                visibleLogIn={visibleLogIn}
                setVisibleLogIn={setVisibleLogIn}
                visibleSignIn={visibleSignIn}
                setVisibleSignIn={setVisibleSignIn}
            />

        </div>
    );
};

export default LoginButton;