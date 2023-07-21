import { useDispatch } from "react-redux"
import { logoutUser } from "../store/sessionReducer";

function LogOut () {
    const dispatch = useDispatch();

    function handleLogout () {
        dispatch(logoutUser());
    }

    return (
        <button onClick={handleLogout}>Log Out</button>
    )
}

export default LogOut;