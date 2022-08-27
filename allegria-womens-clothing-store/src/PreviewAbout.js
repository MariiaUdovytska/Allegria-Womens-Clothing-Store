import React from 'react';
import './css/previewAbout.css';
import previewGerl from './image/about/previewGerl.jpg';
import outlineElipse from './image/outlineElipse.png';
import outlineElipseSm from './image/outlineElipseSm.png';


function PreviewAbout() {
	return (
		<div className='preview-about'>
			<div className='preview-about__body'>
				<div className='preview-about__body-text'>
					<h2>О</h2>
					<h3>нас</h3>
					<p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
				</div>
				<div className='preview-about__body-forms'>
					<span></span>
					<img src={outlineElipseSm} alt="outline-elipse"></img>
				</div>
				<div className='preview-about__body-image'>
					<div className='preview-about__body-image-in'>
						<div className='preview-about__body-forms-desctop'>
							<span></span>
							<img src={outlineElipse} alt="outline-elipse"></img>
						</div>
						<img src={previewGerl} alt="preview-gerl"></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewAbout;