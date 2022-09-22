
import React from 'react';
import '../css/productCardsPage/pagesGridProducts.css';
import GridProducts from './GridProducts';
import stockCards from '../data/stockCards.json';

class PagesGridProducts extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='pages-grid-products'>
				<GridProducts />
				<button type='button'>Показать больше</button>
			</div>
		);
	}
}


export default PagesGridProducts;