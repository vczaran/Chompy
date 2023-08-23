import { Link } from "react-router-dom";
import './NotFoundPage.css';

export default function NotFoundPage () {

    return (
        <div className="not-found-page">
            <img src="/images/collage-2.jpg"/>
            <div className="not-found-text">
                <h1>404</h1>
                <p>Oops! Something's not right. The Chompy pack is on the case!</p>
                <Link to="/">Visit our homepage</Link>
            </div>
        </div>
    )
}