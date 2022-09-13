import React from 'react';
import '../css/about/about.css';
// import fullFoto from '../image/aboutPage/fuulscreen.png';
import image32 from '../image/aboutPage/image32.png';
import outlineElipse from '../image/outlineElipse.png';

function About() {
	return (
		<div className='about'>
			<div className='about__body'>
				<div className='about__body-full'>
					{/* <div className='about__body-full-img'></div> */}
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
			</div>
		</div>
	);
}

export default About;
