import React from 'react';
import '../css/productCardsPage/productsSide.css';
import SortProducts from './SortProducts';
import ExtensionFilter from './ExtensionFilter';

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
						<span>nnn товаров</span>
						<SortProducts />
					</div>
				</div>
				<div>components cards wrap</div>
			</div>
		);
	}
}

export default ProductsSide;