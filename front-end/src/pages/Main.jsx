import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const router = useNavigate();
  return (
    <div style={{ marginTop: "15%" }}>
      <button type="button" onClick={() => router("../")}>main</button>
      <button type="button" onClick={() => router("../map")}>map</button>
      <button type="button" onClick={() => router("../posts_lost")}>lost</button>
    </div>
  );
}

export default Main;
