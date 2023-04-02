
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLogggedInSelector } from "redux/selector/selector";


export default function PublicPoute ({children}) {
    const isLogggedIn = useSelector(isLogggedInSelector)

    return isLogggedIn ?<Navigate to="/" replace={true} /> : children
}