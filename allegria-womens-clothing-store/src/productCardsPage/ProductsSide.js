import React from 'react';
import '../css/productCardsPage/productsSide.css';
import SortProducts from './SortProducts';
import ExtensionFilter from './ExtensionFilter';
import PagesGridProducts from './PagesGridProducts';
import stockCards from '../data/stockCards.json';

class ProductsSide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='side-products'>
				<h1>name category</h1>
				<div className='side-products-filt'>
					<div className='side-products__filter'>
						<ExtensionFilter />
					</div>
					<div className='side-products__sort'>
						<span>{stockCards.length} товаров</span>
						<SortProducts />
					</div>
				</div>
				<PagesGridProducts productCount={stockCards.length} />
			</div>
		);
	}
}

export default ProductsSide;