import React from "react";
import { useNavigate } from "react-router-dom";
import cl from "./NavButton.module.css";

function NavButton({ text, path = "/", callback }) {
  const router = useNavigate();
  return (
    <div
      className={cl.button}
      onClick={() => {
        router(`..${  path}`);
        callback(false);
      }}
    >
      <h1 className={cl.text}>{text}</h1>
    </div>
  );
}

export default NavButton;
