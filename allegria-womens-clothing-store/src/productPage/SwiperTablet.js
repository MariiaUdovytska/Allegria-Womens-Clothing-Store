import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/productPage/cardFull.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import stockCards from '../data/stockCards.json';
import Like from "../Like";


export default function SwiperTablet(props) {
	const [dump, setDump] = useState(0);
	const element = stockCards[props.id];

	let slidesWithLike = element.images.map((image, index) =>
		<SwiperSlide key={index}>
			<img src={image} alt='clothing' />
			<Like id={props.id} clickHandler={(x) => setDump(x)} dump={dump} />
		</SwiperSlide>
	);

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
				{slidesWithLike}
			</Swiper>
		</>
	);
}
