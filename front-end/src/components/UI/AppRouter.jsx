import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../router";

function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/*" element={<Navigate to="/posts_find" replace />} />
    </Routes>
  );
}

export default AppRouter;
