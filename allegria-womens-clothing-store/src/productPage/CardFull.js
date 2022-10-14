import React, { useState } from 'react';
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
import ModalPayment from './ModalPayment';
import ModalReturn from './ModalReturn';
import Like from '../Like';
import ButtonBusket from '../ButtonBusket';


function CardFull(props) {
	const [showPayment, setShowPayment] = useState(false);
	const [showReturn, setShowReturn] = useState(false);
	const [dump, setDump] = useState(0);


	const [searchParams] = useSearchParams();
	let id = searchParams.get('id') * 1;

	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const element = stockCards[id];
	if (element === undefined) {
		return (
			<div className='not-faund containerM'>{`Товар с Id:${id} не найден`}</div>
		)
	}

	let showPrice = element.price !== undefined;

	let arrayLi = [];
	let sizes = ["xs", "s", "m", "l", "xl", "XP"];
	for (let index = 0; index < sizes.length; index++) {
		arrayLi.push(
			<li key={index} className={(element.size.includes(sizes[index])) ? "" : "card-full__info-size-disabled"}>{sizes[index]}</li>
		);
	}
	let slidesWithLike = element.images.map((image, index) =>
		<SwiperSlide key={index}>
			<img src={image} alt='clothing' />
			<Like id={id} clickHandler={(x) => setDump(x)} dump={dump} />
		</SwiperSlide>
	);

	let slides = element.images.map((image, index) =>
		<SwiperSlide key={index}>
			<img src={image} alt='clothing' />
		</SwiperSlide>
	);

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
							{slidesWithLike}
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
							{slides}
						</Swiper>
					</div>
				</div>
				<div className='card-full__info'>
					<p className='card-full__info-name'>{element.name}</p>
					<p className='card-full__info-categories'>{element.categories}</p>
					{showPrice === true
						? <p className='card-full__info-price'>{element.price} UAH</p>
						: <div className='card-full__info-instock'>
							<span className='card-full__info-havnot'>нет в наличии</span>
							<span className='card-full__info-reportadmission'>Сообщить о поступлении</span>
						</div>
					}
					<div className='card-full__info-size'>
						Размер
						<ul>
							{arrayLi}
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
						<ButtonBusket id={id} />
						<button type='button'>купить в один клик</button>
					</div>
					<div className='card-full__info-dopinfo'>
						<span onClick={() => setShowPayment(true)}>Оплата и доставка</span>
						<ModalPayment show={showPayment} onHide={() => setShowPayment(false)} />
						<span onClick={() => setShowReturn(true)}>Возврат и обмен</span>
						<ModalReturn show={showReturn} onHide={() => setShowReturn(false)} />
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
							<div className='card-full__info-price-now'><span>{element.price} UAH</span></div>
						</div>
						: <div className='card-full__info-instock'>
							<span className='card-full__info-havnot'>нет в наличии</span>
							<span className='card-full__info-reportadmission'>Сообщить о поступлении</span>
						</div>
					}
				</div>
				<div className='card-full__imgs'>
					<div className='card-full__imgs-tablet'>
						<SwiperTablet id={id} />
					</div>
				</div>
				<div className='card-full__info'>
					<div className='card-full__info-size'>
						Размер
						<ul>
							{arrayLi}
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
						<ButtonBusket id={id} />
						<button type='button'>купить в один клик</button>
					</div>
					<div className='card-full__info-dopinfo'>
						<span onClick={() => setShowPayment(true)}>Оплата и доставка</span>
						<ModalPayment show={showPayment} onHide={() => setShowPayment(false)} />
						<span onClick={() => setShowReturn(true)}>Возврат и обмен</span>
						<ModalReturn show={showReturn} onHide={() => setShowReturn(false)} />
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