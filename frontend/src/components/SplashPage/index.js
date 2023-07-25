import './SplashPage.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function SplashPage () {
    return (
        <div className='SplashPage'>
            <h1>Popular Products</h1>
            <div className='product'>
                <img src="images/hills-example.png" alt="example"/>
                <p className="description">Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food</p>
                <p className="price">$45.99</p>
            </div>
        </div>
    )
}


export default SplashPage;