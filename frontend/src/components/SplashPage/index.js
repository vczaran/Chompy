import ProductsIndex from '../ProductsIndex';
import './SplashPage.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function SplashPage () {
    return (
        <div className='SplashPage'>
            <h1>Popular Products</h1>
            <ProductsIndex />
        </div>
    )
}


export default SplashPage;