/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner text-error loading-lg flex justify-center items-center mx-auto my-10"></span>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;