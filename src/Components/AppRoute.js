import React from "react";
import { Navigate, Route } from "react-router-dom";

import { useAuthState } from "../Context";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const userDetails = useAuthState();

    return (
        <Route
            path={path}
            render={(props) =>
                isPrivate && !Boolean(userDetails.token) ? (
                    <Navigate to={{ pathname: "/login" }} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default AppRoutes;
