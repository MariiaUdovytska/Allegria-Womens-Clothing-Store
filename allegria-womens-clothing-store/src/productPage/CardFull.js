import React, { useRef, useState } from 'react';
import '../css/productPage/cardFull.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import stockCards from '../data/stockCards.json';
import { useSearchParams } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperTablet from './SwiperTablet';


function CardFull(props) {
	const [searchParams] = useSearchParams();
	let id = searchParams.get('id');
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const element = stockCards[id];
	if (element === undefined) {
		return (
			<div className='not-faund containerM'>{`Товар с Id:${id} не найден`}</div>
		)
	}

	let showPrice = element.price !== undefined;

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
								<img src={element.image} alt='clothing' />
								<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
								<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image2} alt='clothing' />
								<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
								<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image3} alt='clothing' />
								<div className='card__body-up-like'><i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
								<div className='card__body-up-like dopempty'><i className='bi bi-heart' style={{ fontSize: '16px' }}></i></div>
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image4} alt='clothing' />
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
								<img src={element.image} alt='clothing' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image2} alt='clothing' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image3} alt='clothing' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={element.image4} alt='clothing' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<div className='card-full__info'>
					<p className='card-full__info-name'>{element.name}</p>
					<p className='card-full__info-categories'>{element.categories}</p>
					{showPrice === true
						? <p className='card-full__info-price'>{element.price}</p>
						: <div className='card-full__info-instock'>
							<span className='card-full__info-havnot'>нет в наличии</span>
							<span className='card-full__info-reportadmission'>Сообщить о поступлении</span>
						</div>
					}
					<div className='card-full__info-size'>
						Размер
						<ul>
							<li>XS</li>
							<li>s</li>
							<li>m</li>
							<li>l</li>
							<li>xl</li>
							<li>xp</li>
						</ul>
					</div>
					<p className='card-full__info-tabletsize'>Таблица размеров</p>
					<div className='card-full__info-color'>
						Цвет
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
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
					<p className='card-full__info-name'>{element.name}</p>
					<p className='card-full__info-categories'>{element.categories}</p>
					{showPrice === true
						? <div className='card-full__info-price'>
							<div className='card-full__info-price-old'><span>{element.oldPrice}</span></div>
							<div className='card-full__info-price-now'><span>{element.price}</span></div>
						</div>
						: <div className='card-full__info-instock'>
							<span className='card-full__info-havnot'>нет в наличии</span>
							<span className='card-full__info-reportadmission'>Сообщить о поступлении</span>
						</div>
					}
				</div>
				<div className='card-full__imgs'>
					<div className='card-full__imgs-tablet'>
						<SwiperTablet />
					</div>
				</div>
				<div className='card-full__info'>
					<div className='card-full__info-size'>
						Размер
						<ul>
							<li>XS</li>
							<li>s</li>
							<li>m</li>
							<li>l</li>
							<li>xl</li>
							<li>xp</li>
						</ul>
					</div>
					<p className='card-full__info-tabletsize'>Таблица размеров</p>
					<div className='card-full__info-color'>
						Цвет
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
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