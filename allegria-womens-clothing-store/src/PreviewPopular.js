import './css/previewPopular.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import stockCards from './data/stockCards.json';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ProductCard from './ProductCard';

import a from './image/logo/a.png';
import l from './image/logo/l.png';
import e from './image/logo/e.png';
import g from './image/logo/g.png';
import r from './image/logo/r.png';
import i from './image/logo/i.png';

class PreviewPopular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sizeWidthType: 'desktop',
		}
	}
	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 502)
			this.setState({ sizeWidthType: 'phone' });
		else if (width <= 768)
			this.setState({ sizeWidthType: 'tablet' });
		else
			this.setState({ sizeWidthType: 'desktop' });
	}

	componentDidMount() {
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
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
		let cardsNum = 4;
		switch (this.state.sizeWidthType) {
			case 'desktop': cardsNum = 4; break;
			case 'tablet': cardsNum = 3; break;
			case 'phone': cardsNum = 2; break;
			default: break;
		}
		let spaceBetween = 30;
		switch (this.state.sizeWidthType) {
			case 'desktop': spaceBetween = 30; break;
			case 'tablet': spaceBetween = 20; break;
			case 'phone': spaceBetween = 15; break;
			default: break;
		}
		return (
			<div className='preview-popular'>
				<div className='preview-popular__body'>
					<h2>{this.props.swiperName}</h2>
					<Swiper
						slidesPerView={cardsNum}
						spaceBetween={spaceBetween}
						pagination={{
							clickable: true
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						{arrayLi}
					</Swiper>
					<div className='preview-popular__body-tablet'>
						<div className='preview-popular__body-tablet-logo'>
							<img src={a} alt="logo" />
							<img src={l} alt="logo" />
							<img src={l} alt="logo" />
							<img src={e} alt="logo" />
							<img src={g} alt="logo" />
							<img src={r} alt="logo" />
							<img src={i} alt="logo" />
							<img src={a} alt="logo" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default PreviewPopular;