// import { useSelector } from "react-redux"
// import { selectLoggedInUser } from "../AuthSlice"
// import { Navigate } from "react-router"


// export const Protected = ({children}) => {
//     const loggedInUser=useSelector(selectLoggedInUser)

//     if(loggedInUser?.isVerified){
//         return children
//     }
//     return <Navigate to={'/login'} replace={true}/>
// }


import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router";
import { selectIsAuthChecked } from "../AuthSlice";  // Add isAuthChecked from Redux

export const Protected = ({ children }) => {
    const loggedInUser = useSelector(selectLoggedInUser);
    const isAuthChecked = useSelector(selectIsAuthChecked);  // Track if authentication check is complete
    console.log("Protected Route Check:", loggedInUser); // Debugging log
    if (!isAuthChecked) {
        return null;  // Wait until authentication check is done
    }

    if (loggedInUser?.isVerified) {
        return children;
    }

    return <Navigate to="/login" replace={true} />;
};
