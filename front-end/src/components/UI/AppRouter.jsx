import React from 'react';
import {routes} from "../../router";
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(
                    route => <Route key={route.path} path={route.path} element={route.element} />
                )
            }
            <Route path="/*" element={<Navigate to="/posts_find" replace />} />
        </Routes>
    );
};

export default AppRouter;