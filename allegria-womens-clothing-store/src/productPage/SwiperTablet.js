import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/productPage/cardFull.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import image39 from '../image/products/image39.png';
import image40 from '../image/products/image40.png';
import image31 from '../image/products/image31.png';

export default function SwiperTablet() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={image39} alt='clothing' />
					<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
					<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={image40} alt='clothing' />
					<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
					<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={image31} alt='clothing' />
					<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
					<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
