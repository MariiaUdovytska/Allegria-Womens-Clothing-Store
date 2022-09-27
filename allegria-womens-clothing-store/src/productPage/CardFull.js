import React, { useRef, useState } from 'react';
import '../css/productPage/cardFull.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import image37 from '../image/products/image37.png';
import image39 from '../image/products/image39.png';
import image40 from '../image/products/image40.png';
import image31 from '../image/products/image31.png';

function CardFull(props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className='card-full'>
			<div className='card-full__body'>
				<div className='card-full__body-imgs'>
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						loop={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: ((thumbsSwiper != null && thumbsSwiper.activeIndex) !== undefined ? thumbsSwiper : null) }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper2"
					>
						<SwiperSlide>
							<img src={image37} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image40} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image39} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image31} alt='clothing' />
						</SwiperSlide>
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						loop={true}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src={image37} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image40} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image39} alt='clothing' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image31} alt='clothing' />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='card-full__body-info'></div>
			</div>
		</div>
	);
}
export default CardFull;