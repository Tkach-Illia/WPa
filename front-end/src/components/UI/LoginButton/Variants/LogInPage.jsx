import React from "react";
import cl from "./Page.module.css";

function LogInPage({ userData, setUserData, callback }) {
  return (
    <div className={cl.box}>
      <div className={cl.text_box} />
      <span className={cl.text}>Log In</span>
      <input
        className={cl.input}
        value={userData.login}
        type="text"
        onChange={(e) => setUserData({ ...userData, login: e.target.value })}
        placeholder="login"
      />
      <input
        className={cl.input}
        style={{ marginTop: "15%" }}
        value={userData.password}
        type="text"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        placeholder="password"
      />
      <button
          type="button"
          className={cl.button} onClick={() => callback(userData)}>
        Confirm
      </button>
    </div>
  );
}

export default LogInPage;
