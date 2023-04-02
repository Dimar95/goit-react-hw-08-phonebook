// import StartPage from "components/StartPage/StartPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLogggedInSelector } from "redux/selector/selector";


export default function PrivateRoute ({children}) {
    const isLogggedIn = useSelector(isLogggedInSelector)

    return isLogggedIn ? children: <Navigate to="/login" replace={true} />
}