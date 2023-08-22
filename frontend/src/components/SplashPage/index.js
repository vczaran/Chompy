import ProductsIndex from '../ProductsIndex';
import './SplashPage.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';  
import { Carousel } from 'react-responsive-carousel';

function SplashPage () {
    return (
        <div className='SplashPage'>
            <Carousel autoPlay infiniteLoop>  
                <img src="/images/raven.jpg" />  
                <img src="/images/playtime.avif" />  
            </Carousel>
            <h1>Popular Products</h1>
            <ProductsIndex />
        </div>
    )
}


export default SplashPage;