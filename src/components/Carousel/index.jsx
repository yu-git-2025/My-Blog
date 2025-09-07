import { Carousel } from 'antd';
import './index.css';

function CarouselComponent() {
  return (
      <Carousel arrows  autoplay={{ dotDuration: true }} autoplaySpeed={3000} className='carousel'>
        <div>
          <h3 className='carousel-item'>1</h3>
        </div>
        <div>
          <h3 className='carousel-item'>2</h3>
        </div>
        <div>
          <h3 className='carousel-item'>3</h3>
        </div>
        <div>
          <h3 className='carousel-item'>4</h3>
        </div>
      </Carousel>

  )
}

export default CarouselComponent;