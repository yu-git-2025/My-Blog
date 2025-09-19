import { Carousel } from 'antd';
import './index.css';
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.jpg';

function CarouselComponent() {
  return (
      <Carousel arrows  autoplay={{ dotDuration: true }} autoplaySpeed={3000} className='carousel'>
        <div>
          <img src={img1} className='carousel-item'/>
        </div>
        <div>
          <img src={img2} className='carousel-item'/>
        </div>
      </Carousel>

  )
}

export default CarouselComponent;