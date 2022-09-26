
import React from 'react';
import '../css/productPage/productPage.css';
import PreviewPopular from '../PreviewPopular';
import CardFull from './CardFull';

function ProductPage(props) {
	return (
		<div className='product-page'>
			<div className='product-page__body'>
				<CardFull />
				<PreviewPopular swiperName={'Похожие товары'} />
			</div>
		</div>
	);
}
export default ProductPage;