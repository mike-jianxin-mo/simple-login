import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import routes from "./Config/routes.js";
import { AuthProvider, useAuthState } from "./Context";
import AppRoute from "./Components/AppRoute";

function App() {
    // const userDetails = useAuthState();
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        // console.log(route);
                        // 1. wrong
                        // return (
                        //     <AppRoute
                        //         key={route.path}
                        //         path={route.path}
                        //         component={route.component}
                        //         isPrivate={route.isPrivate}
                        //     />
                        // );
                        // 2. the following updates work
                        // return (
                        //     <Route
                        //         key={route.path}
                        //         path={route.path}
                        //         element={<route.component />}
                        //     />
                        // );
                        return (
                            <Route
                                path={route.path}
                                element={<route.component />}
                                // render={
                                //     (props) => (
                                //         // route.isPrivate &&
                                //         // !Boolean(userDetails.token) ? (
                                //         //     <Navigate to={{ pathname: "/login" }} />
                                //         // ) : (
                                //         <route.component />
                                //     )
                                //     // )
                                // }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
