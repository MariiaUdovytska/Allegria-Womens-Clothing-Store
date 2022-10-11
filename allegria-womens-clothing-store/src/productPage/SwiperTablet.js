import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/productPage/cardFull.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import stockCards from '../data/stockCards.json';
import { useSearchParams } from 'react-router-dom';

function getIds() {
	let idsArray = localStorage.getItem("idsWishlist");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

function arrayRemove(arr, value) {
	return arr.filter(function (element) {
		return element != value;
	});
}

export default function SwiperTablet(props) {
	let ids = getIds();
	const [liked, setLiked] = useState(ids.includes(props.id));

	let handleClickLike = () => {
		let ids_l = getIds();

		if (liked === false) {
			ids_l.push(props.id);
		} else {
			ids_l = arrayRemove(ids_l, props.id)
		}

		setLiked(!liked);
		localStorage.setItem("idsWishlist", JSON.stringify(ids_l));
	}
	const [searchParams] = useSearchParams();
	let id = searchParams.get('id');
	const element = stockCards[id];
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
					<img src={element.image} alt='clothing' />
					<div onClick={() => handleClickLike()} className='card__body-icons'>
						{liked === true
							? <div className='card__body-up-like'>
								<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i>
							</div>
							: <div className='card__body-up-like'>
								<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
							</div>
						}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image2} alt='clothing' />
					<div onClick={() => handleClickLike()} className='card__body-icons'>
						{liked === true
							? <div className='card__body-up-like'>
								<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i>
							</div>
							: <div className='card__body-up-like'>
								<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
							</div>
						}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image3} alt='clothing' />
					<div onClick={() => handleClickLike()} className='card__body-icons'>
						{liked === true
							? <div className='card__body-up-like'>
								<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i>
							</div>
							: <div className='card__body-up-like'>
								<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
							</div>
						}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image4} alt='clothing' />
					<div onClick={() => handleClickLike()} className='card__body-icons'>
						{liked === true
							? <div className='card__body-up-like'>
								<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i>
							</div>
							: <div className='card__body-up-like'>
								<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
							</div>
						}
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
