import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {
    return(
        <Routes>
            {routes.map(route =>
                <Route 
                Component={route.component}
                path={route.path}
                exact={route.exact}
                element={
                <Navigate to='/posts/' replace={false}/>}/>
                )}
        </Routes>
    )
}

export default AppRouter;