import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';

export default function Curiosidades() {
  return (
    <>
      <Carousel
        className="carousel-container"
        autoPlay
        infiniteLoop
        showThumbs={false}
        dynamicHeight={false}
      >
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />

        </div>
      </Carousel>
    </>
  );
}
