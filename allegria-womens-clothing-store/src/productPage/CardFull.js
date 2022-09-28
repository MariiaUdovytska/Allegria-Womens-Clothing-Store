import React, { useRef, useState } from 'react';
import '../css/productPage/cardFull.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs, EffectCoverflow, Pagination } from "swiper";

import image37 from '../image/products/image37.png';
import image39 from '../image/products/image39.png';
import image40 from '../image/products/image40.png';
import image31 from '../image/products/image31.png';
import SwiperTablet from './SwiperTablet';


function CardFull(props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	if (props.sizeWidthType == 'desktop') {
		return (
			<div className='card-full'>
				<div className='card-full__imgs'>
					<div className='card-full__img-swipers'>
						<Swiper
							style={{
								"--swiper-navigation-color": "#af3c2275",
								"--swiper-pagination-color": "#af3c2275",
							}}
							loop={true}
							spaceBetween={10}
							navigation={true}
							thumbs={{ swiper: ((thumbsSwiper != null && thumbsSwiper.activeIndex) !== undefined ? thumbsSwiper : null) }}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper2"
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
						<Swiper
							onSwiper={setThumbsSwiper}
							loop={false}
							spaceBetween={10}
							slidesPerView={3}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper"
						>
							<SwiperSlide>
								<img src={image39} alt='clothing' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={image40} alt='clothing' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={image31} alt='clothing' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<div className='card-full__info'>
					<p className='card-full__info-name'>American vintage</p>
					<p className='card-full__info-categories'>Classic shirt</p>
					<p className='card-full__info-price'>3800 uah</p>
					<p className='card-full__info-size'>
						Размер
						<ul>
							<li>XS</li>
							<li>s</li>
							<li>m</li>
							<li>l</li>
							<li>xl</li>
							<li>xp</li>
						</ul>
					</p>
					<p className='card-full__info-tabletsize'>Таблица размеров</p>
					<p className='card-full__info-color'>
						Цвет
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</p>
					<div className='card-full__info-btns'>
						<button type='button'>добавить в корзину</button>
						<button type='button'>купить в один клик</button>
					</div>
					<div className='card-full__info-dopinfo'>
						<span>Оплата и доставка</span>
						<span>Возврат и обмен</span>
					</div>
					<div className='card-full__info-info'>
						<span>ИНФОРМАЦИЯ О ТОВАРЕ</span>
						<span>Lorem lorem Lorem ipsum<br></br>Lorem lorem Lorem ipsum</span>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='card-full'>
				<div className='card-full__info'>
					<p className='card-full__info-name'>American vintage</p>
					<p className='card-full__info-categories'>Classic shirt</p>
					<div className='card-full__info-price'>
						<div className='card-full__info-price-old'><span>5200 uah</span></div>
						<div className='card-full__info-price-now'><span>3800 uah</span></div>
					</div>
				</div>
				<div className='card-full__imgs'>
					<div className='card-full__imgs-tablet'>
						<SwiperTablet />
					</div>
				</div>
				<div className='card-full__info'>
					<p className='card-full__info-size'>
						Размер
						<ul>
							<li>XS</li>
							<li>s</li>
							<li>m</li>
							<li>l</li>
							<li>xl</li>
							<li>xp</li>
						</ul>
					</p>
					<p className='card-full__info-tabletsize'>Таблица размеров</p>
					<p className='card-full__info-color'>
						Цвет
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</p>
					<div className='card-full__info-btns'>
						<button type='button'>добавить в корзину</button>
						<button type='button'>купить в один клик</button>
					</div>
					<div className='card-full__info-dopinfo'>
						<span>Оплата и доставка</span>
						<span>Возврат и обмен</span>
					</div>
					<div className='card-full__info-info'>
						<span>ИНФОРМАЦИЯ О ТОВАРЕ</span>
						<span>Lorem lorem Lorem ipsum<br></br>Lorem lorem Lorem ipsum</span>
					</div>
				</div>
			</div>
		);
	}
}
export default CardFull;