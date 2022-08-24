import React from 'react';
import './css/fullScreen.css';
import { Carousel } from 'react-bootstrap';
import oneSuit from './image/fullScreen/1suit.jpg';
import oneGerl from './image/fullScreen/1gerl.jpg';
import twoGerls from './image/fullScreen/2gerls.jpg';
import threeGerlsOnPillow from './image/fullScreen/3girlsOnPillow.jpg';
import fourGerl from './image/fullScreen/4gerl.jpg';
import fourFeets from './image/fullScreen/4feets.jpg';

function FullScreen() {
	return (
		<div className='full-screen'>
			<div className='full-screen__body'>
				<Carousel interval={null}>
					<Carousel.Item>
						<div className='full-screen__body-carousel-one'>
							<div className='full-scren__body-carousel-one-img'>
								<img className="d-block w-100" src={oneSuit} alt="banner-one-suit" />
							</div>
							<div className='full-scren__body-carousel-one-img tablet-img-none'>
								<img className="d-block w-100" src={oneGerl} alt="banner-one-gerl" />
							</div>
						</div>
						<Carousel.Caption>
							<h4>бренд</h4>
							<h3>american vintage</h3>
							<p>Смотреть коллекцию</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<div className='full-screen__body-carousel-two'>
							<div className='full-screen__body-carousel-two-caption'>
								<div className='full-screen__body-carousel-caption-info'>
									<h4>бренд</h4>
									<h3>george gina lucy</h3>
									<p>Смотреть коллекцию</p>
								</div>
							</div>
							<div className='full-screen__body-carousel-two-img'>
								<img className="d-block w-100" src={twoGerls} alt="banner-two-gerls" />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='full-screen__body-carousel-three'>
							<div className='full-screen__body-carousel-three-caption'>
								<div className='full-screen__body-carousel-caption-info'>
									<h4>бренд</h4>
									<h3>deha</h3>
									<p>Смотреть коллекцию</p>
								</div>
							</div>
							<div className='full-screen__body-carousel-three-img'>
								<img className="d-block w-100" src={threeGerlsOnPillow} alt="banner-three-gerls" />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='full-screen__body-carousel-four'>
							<div className='full-screen__body-carousel-four-caption'>
								<div className='full-screen__body-carousel-caption-info'>
									<h4>бренд</h4>
									<h3>birkenstock</h3>
									<p>Смотреть коллекцию</p>
								</div>
							</div>
							<div className='full-screen__body-carousel-four-img'>
								<div className='tablet-img-none'>
									<img className="d-block w-100" src={fourFeets} alt="banner-four-feets" />
								</div>
								<div>
									<img className="d-block w-100" src={fourGerl} alt="banner-four-gerl" />
								</div>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default FullScreen;