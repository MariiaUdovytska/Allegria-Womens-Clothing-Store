import React from 'react';
import '../css/about/about.css';
import image32 from '../image/aboutPage/image32.png';
import image62 from '../image/aboutPage/image62.png';
import outlineElipse from '../image/outlineElipse.png';

function About() {
	return (
		<div className='about'>
			<div className='about__body'>
				<div className='about__body-full'>
					<div className='about__body-full-text'>
						<h2>о нас</h2>
						<p>Бутик Allegria специализируется на продаже комфортной и современной одежды для свободного времени в стиле кэжуал . Мы считаем, что одежда - это источник радости, что и отражено в названии нашего бутика.</p>
					</div>
				</div>
				<div className='about__body-prewtext'>American Vintage в первую очередь – это качественный трикотаж, изящная красота и летящий крой.</div>
				<div className='about__body-firsphotos'>
					<div className='about__body-firsphotos-imgs containerM'>
						<div className='about__body-firsphotos-left'></div>
						<div className='about__body-firsphotos-right'>
							<div className='about__body-firsphotos-right-forms-desctop'>
								<span></span>
								<img src={outlineElipse} alt="outline-elipse"></img>
							</div>
							<img src={image32} alt='hands'></img>
						</div>
					</div>
				</div>
				<div className='about__body-textsecond'>
					<h3>о нас</h3>
					<p>Броские сумки George Gina & Lucy поднимают настроение и своим обладательницам и<br></br> окружающим.</p>
					<p>Birkenstock – это обувь с мягкой ортопедической стелькой, позволяющая долгое время<br></br> находиться в обуви не уставая.</p>
					<p>Для всех представленных в бутике брендов важным приоритетом является <br></br>экологическая безопасность одежды и производства.</p>
				</div>
				<div className='about__body-secondphotos'>
					<div className='about__body-secondphotos-imgs containerM'>
						<div className='about__body-secondphotos-left'></div>
						<div className='about__body-secondphotos-right'>
							<div className='about__body-secondphotos-right-forms-desctop'>
								<span></span>
							</div>
							<img src={image62} alt='gerl in suit'></img>
						</div>
					</div>
				</div>
				<div className='about__body-textfooter'>
					<p>Для всех представленных в бутике брендов важным приоритетом является экологическая безопасность одежды и производства.</p>
				</div>
			</div>
		</div>
	);
}

export default About;
