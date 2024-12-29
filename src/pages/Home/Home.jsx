import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation , Autoplay  } from 'swiper/modules';
import { Link } from 'react-router-dom';
import pic1 from '../../images/11.jpg';
import pic2 from '../../images/22.jpg';
import pic3 from '../../images/33.jpg';
import pic4 from '../../images/bluelist.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Home() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}

        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={pic1} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic2} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic3} className="card-img-top" alt="..." />
        </SwiperSlide>
      </Swiper>

        <div className='About-website'>
        <div className='container p-3'>
          <div className='details w-100  justify-content-center align-items-center text-center '>
            <h2  className="fs-3">Welcome to my website!</h2>
            <p className="fs-6"> With this simple and effective tool, you can easily organize your daily tasks. Whether you’re working on an important project or just need a quick reminder, this to-do list offers a convenient and flexible way to keep track of everything you need to do. Let us help you boost your productivity and accomplish your tasks with ease and organization!</p>
          </div>
          <div className='image w-100 d-flex flex-column '>
          <img className='w-100' src= {pic4} alt="img" />
          <Link to="/tasklist" className="btn btn-primary">Go to your list </Link>
          </div>
          
        </div>
         
        </div>





    </>
  );
}

export default Home;
