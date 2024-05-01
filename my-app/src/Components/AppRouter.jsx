import React, { useContext } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
    return (
        
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    Component={route.component}
                    path={route.path}
                    exact={route.exact}
                    element={
                        <Navigate to='/posts/' replace={false} />} />
            )}

            {publicRoutes.map(route =>
                <Route
                    Component={route.component}
                    path={route.path}
                    exact={route.exact}
                    element={
                        <Navigate to='/posts/' replace={false} />} />
            )}
        </Routes>
    )
}

export default AppRouter;