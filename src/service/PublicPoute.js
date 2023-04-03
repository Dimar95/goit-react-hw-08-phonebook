
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLogggedInSelector } from "redux/selector/selector";


export default function PublicPoute ({children}) {
    
    const isLogggedIn = useSelector(isLogggedInSelector)
    console.log("🚀 ~ isLogggedIn:", isLogggedIn);

    return isLogggedIn ?<Navigate to="/" replace={true} /> : children
}