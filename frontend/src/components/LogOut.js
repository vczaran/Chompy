import { useDispatch } from "react-redux"
import { logoutUser } from "../store/sessionReducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LogOut () {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleLogout () {
        dispatch(logoutUser()).then(() => history.push("/"));
    }

    return (
        <button id="logout-drop-button" onClick={handleLogout}>Log Out</button>
    )
}

export default LogOut;