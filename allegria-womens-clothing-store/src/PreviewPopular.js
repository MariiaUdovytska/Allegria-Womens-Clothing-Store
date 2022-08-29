import './css/previewPopular.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import stockCards from './data/stockCards.json';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ProductCard from './ProductCard';

class PreviewPopular extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let dataCard = stockCards;
		let arrayLi = [];
		for (let index = 0; index < dataCard.length; index++) {
			const element = dataCard[index];
			arrayLi.push(
				<SwiperSlide key={index} className='swiper-card'>
					<ProductCard
						image={element.image}
						name={element.name}
						price={element.price}
						sale={element.sale}
						categories={element.categories}
						oldPrice={element.oldPrice}
					/>
				</SwiperSlide>);
		}
		return (
			<div className='preview-popular'>
				<div className='preview-popular__body'>
					<h2>Популярное</h2>
					<Swiper
						slidesPerView={4}
						spaceBetween={30}
						pagination={{
							clickable: true
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						{arrayLi}
					</Swiper>
				</div>
			</div>
		)
	}
}
export default PreviewPopular;