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
					<Like id={props.id} clickHandler={(x) => setDump(x)} dump={dump} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image2} alt='clothing' />
					<Like id={props.id} clickHandler={(x) => setDump(x)} dump={dump} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image3} alt='clothing' />
					<Like id={props.id} clickHandler={(x) => setDump(x)} dump={dump} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={element.image4} alt='clothing' />
					<Like id={props.id} clickHandler={(x) => setDump(x)} dump={dump} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
