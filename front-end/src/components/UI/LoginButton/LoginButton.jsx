import React, { useState } from "react";
import styles from "./LoginButton.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import LoginForm from "./LoginForm/LoginForm";

function LoginButton() {
  const [visibleLogIn, setVisibleLogIn] = useState(false);
  const [visibleSignIn, setVisibleSignIn] = useState(false);

  return (
    <div className={styles.loginBtn__Pos}>
      <ToggleButton
        text="Log In"
        callback={setVisibleLogIn}
        style={styles.loginBtn__Log}
      />
      <ToggleButton
        text="Sign In"
        callback={setVisibleSignIn}
        style={styles.loginBtn__Sign}
      />
      <LoginForm
        visibleLogIn={visibleLogIn}
        setVisibleLogIn={setVisibleLogIn}
        visibleSignIn={visibleSignIn}
        setVisibleSignIn={setVisibleSignIn}
      />
    </div>
  );
}

export default LoginButton;
